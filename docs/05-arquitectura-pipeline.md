# 05 — Arquitectura del pipeline

## Diagrama general

```text
┌─────────────────────────────────────────────────────────┐
│                         INPUT                           │
│  errores prod · issues · tickets · Slack · formularios  │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    SPEC WRITER                          │
│         consulta CEREBRO → escribe SPEC                 │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│                       BUILDER                           │
│   crea rama · TDD · implementa · deja trazas            │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌──────────────┬──────────────┬──────────────┬────────────┐
│  Seguridad   │     UX       │     UI       │ Code review│
│ (ctx limpio) │ (ctx limpio) │ (ctx limpio) │(ctx limpio)│
└──────┬───────┴──────┬───────┴──────┬───────┴─────┬──────┘
       └──────────────┴───────┬──────┴─────────────┘
                              ▼
┌─────────────────────────────────────────────────────────┐
│                      APROBADOR                          │
│   consolida feedback · OK o vuelve al BUILDER           │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│               CLASIFICADOR DE RIESGO                    │
│   bajo → auto merge/deploy   |   alto → humano          │
└───────────────────────────┬─────────────────────────────┘
                            ▼
                      PRODUCCIÓN
```

## 1) Input unificado

Todo entra por el mismo “puerto”:

- error de monitorización (p. ej. logs/APM)
- issue de GitHub / ticket
- mensaje de Slack / formulario
- tarea lanzada a mano o por voz

Normaliza a un objeto:

```json
{
  "task_id": "TASK-1042",
  "source": "sentry|github|slack|manual",
  "title": "...",
  "body": "...",
  "priority": "low|medium|high",
  "created_at": "ISO-8601"
}
```

## 2) Spec Writer

No programa. **Planifica**.

Antes de escribir:

1. Lee el input
2. Consulta el cerebro
3. Detecta solapes / código existente
4. Emite una spec con criterios de aceptación y tests esperados

Plantilla: [`../plantillas/spec.md`](../plantillas/spec.md)

## 3) Builder

Implementa la spec:

1. Crea rama `factory/<task_id>-<slug>`
2. Trabaja con **TDD**:
   - escribe test
   - falla
   - escribe código
   - pasa
3. Repite por cada ítem de la spec
4. Abre PR o deja pack listo para review

Consulta el cerebro para arquitectura y estilo.

## 4) Sub-agentes revisores (contexto limpio)

Lanza en paralelo, cada uno sin contaminar al otro:

| Revisor | Mira |
|---------|------|
| Seguridad | vulnerabilidades, secretos, auth, inyecciones |
| UX | flujo, pasos, claridad para el avatar de usuario |
| UI | consistencia visual, estados, accesibilidad básica |
| Código | arquitectura, estándares, duplicados, claridad |

Idealmente usa **familias/modelos distintos** al builder para reducir sesgo de auto-revisión.

## 5) Aprobador

Recibe los 4 feedbacks:

- si hay FAIL → reenvía al builder con lista de correcciones
- si todo PASS → avanza

Bucle hasta convergencia o hasta límite de intentos (p. ej. 3).

## 6) Clasificador de riesgo + hooks

No confíes solo en “el modelo dice que es safe”.

Añade **código/hooks** que bloqueen caminos peligrosos:

- cambios en migraciones DB
- auth / pagos / permisos
- infra / secretos
- archivos críticos

| Riesgo | Acción |
|--------|--------|
| Bajo | merge + deploy automático |
| Alto | notificar humano + esperar OK |

## 7) Paralelismo

Cada tarea es independiente:

- su ID
- su rama
- sus logs
- su estado (`queued|spec|building|review|waiting_human|done|failed`)

Así la factory escala como una línea de producción real.
