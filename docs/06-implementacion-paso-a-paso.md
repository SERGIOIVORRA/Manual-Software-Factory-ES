# 06 — Implementación paso a paso

## Fase 0 — Decide el primer proceso

Empieza por **un solo flujo**, no por “toda la empresa”.

Buen primer candidato:

- bugs de producción recurrentes, o
- issues etiquetados `factory-ready`, o
- cambios de copy/UI no críticos

Criterio: entrada clara + salida clara + frecuencia semanal.

## Fase 1 — Crea el cerebro

1. Crea carpeta `brain/` en el repo
2. Rellena stack, arquitectura, estándares, decisiones
3. Define “forbidden” (lo que nunca debe hacer un agente)
4. Versiona el cerebro en Git

Sin esto, no pases a la fase 2.

## Fase 2 — Normaliza el input

Elige 1–2 fuentes:

- monitorización de errores → webhook
- GitHub Issues con label
- canal de Slack `#factory-requests`

Todo se convierte en `task_id` + payload estándar.

## Fase 3 — Orquestador

Define estados y cola:

`queued → specifying → planning → building → reviewing → testing → waiting_human → done|failed`

Sin orquestador, vuelves al chat manual.

## Fase 4 — Especificación + Planificación

1. Agente de especificación → `specs/<task_id>.md`
2. Agente planificador → `plans/<task_id>.md` con T1/T2/T3
3. Falla si faltan criterios de aceptación o tareas verificables

No dejes que el desarrollador invente alcance.

## Fase 5 — Desarrollador

Reglas mínimas:

- rama `feature/<task_id>-...`
- implementa por tareas del plan
- CI obligatorio
- no merge sin pruebas verdes

## Fase 6 — Revisores en paralelo

Monta al menos:

1. lógica
2. seguridad
3. rendimiento

Cada uno:

- contexto limpio
- prompt corto y específico
- salida `PASS|FAIL` + hallazgos

## Fase 7 — Agente de pruebas (separado)

Debe ser **distinto** del desarrollador:

- escenarios reales
- lint / tests / CI
- no autoaprobar el código del builder

## Fase 8 — Clasificación de riesgo

Combina:

- reglas de código (paths críticos, tipos de archivo)
- juicio del agente
- prioridad del input

Hooks duros > promesas del modelo.

## Fase 9 — Canales no técnicos

Cuando el núcleo funcione, abre la puerta a:

- marketing / ventas / ops vía Slack
- formularios internos
- peticiones de copy, legales, landings

Ellos lanzan; la factory decide si necesita desarrollador.

## Fase 10 — Observabilidad de la factory

Mide:

| KPI | Pregunta |
|-----|----------|
| Lead time | ¿Cuánto tarda input → producción? |
| % auto-merge | ¿Cuántas salen sin humano? |
| Reopens | ¿Cuántas vuelven al builder? |
| Fallos en prod post-merge | ¿La calidad aguanta? |
| Tareas bloqueadas | ¿Dónde se atasca el pipeline? |

## Orden recomendado de herramientas (agnóstico)

No hace falta un stack concreto. Necesitas piezas:

1. **Orquestación** (cola de tareas / workflow)
2. **Repo + CI**
3. **Almacén del cerebro** (git o DB versionada)
4. **Agentes** (uno o varios proveedores)
5. **Notificaciones** (Slack/email)
6. **Monitorización** (errores de prod)

Monta lo mínimo viable y itera.
