# 10 — Checklist de puesta en marcha

Marca cada ítem antes de dar la factory por “lista”.

## Fundamentos

- [ ] Hay un proceso piloto elegido (uno solo)
- [ ] Entrada y salida del proceso están definidas
- [ ] El proceso es repetible
- [ ] El proceso es auditable (logs por paso)
- [ ] Existe cerebro versionado (`brain/`)

## Cerebro

- [ ] Stack documentado
- [ ] Arquitectura documentada
- [ ] Estándares de código/testing/seguridad
- [ ] Decisiones (ADR) iniciales
- [ ] Lista de “forbidden”
- [ ] Avatar/persona de usuario (para UX)

## Pipeline

- [ ] Input normalizado con `task_id`
- [ ] Spec Writer operativo
- [ ] Builder con TDD + rama por tarea
- [ ] CI obligatorio en verde
- [ ] Revisores: seguridad, UX, UI, código
- [ ] Aprobador con bucle y límite de intentos
- [ ] Clasificador de riesgo
- [ ] Hooks duros en paths críticos
- [ ] Ruta humana para HIGH

## Operación

- [ ] Notificaciones (Slack/email) configuradas
- [ ] Estados de tarea visibles (`queued…done/failed`)
- [ ] Parallelismo probado con ≥3 tareas a la vez
- [ ] Rollback documentado
- [ ] KPIs definidos (lead time, auto-merge %, reopens)

## Gobernanza

- [ ] Quién puede lanzar tareas
- [ ] Quién aprueba HIGH
- [ ] Qué se puede auto-merge
- [ ] Política de secretos y accesos
- [ ] Revisión semanal de fallos del pipeline

## Señal de “ya está bien”

Si puedes decir:

> “Entra un bug o petición, sale un PR/deploy, y sé exactamente en qué paso falló si algo se rompe”

…tienes Software Factory.
