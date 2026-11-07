# 02 — Principios clave

## 1. Repetible

La misma clase de tarea debe seguir **siempre el mismo camino**.

Ejemplo:

- Bug de producción → Spec → Builder → Reviews → Riesgo → Deploy
- Cambio cosmético de landing → Spec corta → Builder → Riesgo bajo → Deploy auto

Si cada persona inventa un flujo distinto, no hay fábrica: hay improvisación.

## 2. Auditable

Cada paso debe dejar rastro de:

| Campo | Ejemplo |
|-------|---------|
| ID de tarea | `TASK-1042` |
| Input | Issue #88 / error Sentry `abc123` |
| Spec generada | `specs/TASK-1042.md` |
| Rama | `factory/TASK-1042-fix-login` |
| Resultados de review | seguridad OK, UX FAIL, UI OK, code OK |
| Decisión | devolver a builder / pedir humano / merge |
| Artefacto final | PR #120 / commit `a1b2c3` |

Sin auditoría no puedes mejorar el sistema cuando falla.

## 3. Contexto persistente (cerebro)

Si el agente no conoce:

- stack (Postgres vs MySQL),
- arquitectura,
- reglas de negocio,
- estilo de código,
- decisiones previas,

…alucina o inventa caminos incompatibles.

El cerebro es la memoria continua del proyecto. **Antes de escribir, se consulta.**

## 4. Separación de responsabilidades

No uses el mismo “cerebro mental” para:

- escribir el código, y
- validar si ese código es seguro / bueno en UX / bueno en UI

Mejor: **builder** + **revisores con contexto limpio** + modelos distintos cuando aporte independencia.

## 5. Human-in-the-loop solo cuando aporta

No todo necesita humano.  
No todo puede ir automático.

Clasifica por riesgo:

- cosmético / copy / no-core → automático
- DB / auth / pagos / core → humano

## 6. Paralelismo

La fábrica no es una cola de una sola pieza.  
Puedes lanzar muchas tareas a la vez si cada una tiene:

- ID propio
- rama propia
- logs propios
- estado propio

## 7. Regla de frecuencia

Si lo haces **más de una vez por semana** y tiene entrada/salida claras → candidata a factory.
