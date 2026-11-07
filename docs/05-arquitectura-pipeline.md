# 05 — Arquitectura del pipeline

## Idea central

Todo gira alrededor de un **orquestador**:

- recibe la entrada
- encola la tarea
- mueve estados
- llama a cada rol
- guarda trazas

Los agentes no “se organizan solos”: el orquestador coordina.

## Diagrama general

```text
┌─────────────────────────────────────────────────────────┐
│                 INPUT                                   │
│        petición · bug · ticket                          │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   ORQUESTADOR                           │
│         cola de tareas · estados · logs                 │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│              AGENTE DE ESPECIFICACIÓN                   │
│     consulta CEREBRO → criterios de aceptación          │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│                AGENTE PLANIFICADOR                      │
│              parte el trabajo en T1 T2 T3…              │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│              AGENTE DESARROLLADOR                       │
│         rama feature/… · implementa · commits           │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌──────────────┬──────────────────┬───────────────────────┐
│   Lógica     │    Seguridad     │     Rendimiento       │
│ (paralelo)   │    (paralelo)    │     (paralelo)        │
└──────┬───────┴────────┬─────────┴──────────┬────────────┘
       └────────────────┴─────────┬──────────┘
                                  ▼
┌─────────────────────────────────────────────────────────┐
│                 AGENTE DE PRUEBAS                       │
│        escenarios reales · lint · CI                    │
└───────────────────────────┬─────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│              CLASIFICADOR DE RIESGO                     │
│   bajo → auto   |   alto → humano   |   fail → rewind   │
└───────────────────────────┬─────────────────────────────┘
                            ▼
                     PR / PRODUCCIÓN
```

## 1) Input

Normaliza siempre a:

```json
{
  "task_id": "TASK-1042",
  "source": "peticion|bug|ticket",
  "title": "...",
  "body": "...",
  "priority": "low|medium|high"
}
```

## 2) Orquestador

Estados sugeridos:

`queued → specifying → planning → building → reviewing → testing → waiting_human → done|failed`

Responsabilidades:

- no saltarse pasos
- reintentos controlados
- paralelizar reviews
- persistir artefactos de cada fase

## 3) Especificación

Convierte la petición en:

- problema
- alcance / no-alcance
- criterios de aceptación
- riesgos preliminares

Plantilla: [`../plantillas/spec.md`](../plantillas/spec.md)

## 4) Planificación

Parte la spec en tareas ejecutables:

- `T1`, `T2`, `T3`…
- dependencias entre tareas
- orden sugerido
- definición de “done” por tarea

Plantilla: [`../plantillas/plan.md`](../plantillas/plan.md)

## 5) Implementación

El desarrollador:

1. crea rama `feature/<task_id>-<slug>`
2. implementa por tareas del plan
3. deja commits claros
4. prepara el pack para review

Consulta el cerebro para arquitectura y estilo.

## 6) Revisión en paralelo

Tres revisores con contexto limpio:

| Revisor | Mira |
|---------|------|
| **Lógica** | corrección funcional, edge cases, consistencia |
| **Seguridad** | auth, secretos, inyecciones, permisos |
| **Rendimiento** | consultas, N+1, bloqueos, coste |

Opcional (extra): UX / UI si el cambio es de producto visible.

## 7) Pruebas

Un **agente de pruebas distinto** al desarrollador:

- valida escenarios reales
- ejecuta lint / tests / CI
- no “aprueba” código solo porque lo escribió el builder

## 8) Riesgo y salida

| Resultado | Acción |
|-----------|--------|
| Reviews + tests OK y riesgo bajo | auto-merge / deploy |
| Riesgo alto | gate humano |
| FAIL | volver a plan/build con hallazgos |

## Ejemplo práctico: de la petición al pull request

1. Entra “añadir descuento por volumen”
2. Spec define criterios
3. Plan crea T1/T2/T3
4. Developer abre `feature/...`
5. Revisores miran lógica, seguridad y rendimiento a la vez
6. Agente de pruebas valida con lint/CI y escenarios
7. Sale el PR listo
