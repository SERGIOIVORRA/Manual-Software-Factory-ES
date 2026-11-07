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

## Fase 3 — Spec Writer

Implementa un agente/job que:

1. recibe la tarea
2. lee cerebro
3. escribe `specs/<task_id>.md`
4. falla si faltan criterios de aceptación

No dejes que el builder invente alcance.

## Fase 4 — Builder con TDD

Reglas mínimas:

- rama por tarea
- tests primero
- CI obligatorio
- no merge sin tests verdes

## Fase 5 — Revisores

Monta 4 jobs/agentes:

1. seguridad
2. UX
3. UI
4. code review

Cada uno:

- contexto limpio
- prompt corto y específico
- salida estructurada: `PASS|FAIL` + lista de hallazgos

## Fase 6 — Aprobador y bucle

Si hay FAIL:

- agrupa hallazgos
- reabre builder
- incrementa `attempt`
- corta a N intentos y escala a humano

## Fase 7 — Clasificación de riesgo

Combina:

- reglas de código (paths críticos, tipos de archivo)
- juicio del agente
- prioridad del input

Hooks duros > promesas del modelo.

## Fase 8 — Canales no técnicos

Cuando el núcleo funcione, abre la puerta a:

- marketing / ventas / ops vía Slack
- formularios internos
- peticiones de copy, legales, landings

Ellos lanzan; la factory decide si necesita desarrollador.

## Fase 9 — Observabilidad de la factory

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
