# 07 — Roles de agentes

Cada rol tiene misión, input, output y criterio de “hecho”.

## Orquestador (sistema)

| | |
|--|--|
| **Misión** | Coordinar cola, estados y handoffs |
| **Output** | estado de tarea + artefactos enlazados |
| **Hecho cuando** | la tarea avanza sin saltarse pasos |

Puede ser código + workflow; no tiene por qué ser un LLM.

## Agente de especificación

| | |
|--|--|
| **Misión** | Convertir petición/bug/ticket en spec ejecutable |
| **Consulta** | Cerebro |
| **Output** | `specs/<task_id>.md` |
| **Hecho cuando** | hay criterios de aceptación claros |

No escribe código de producto.

## Agente planificador

| | |
|--|--|
| **Misión** | Partir la spec en tareas T1, T2, T3… |
| **Input** | spec |
| **Output** | `plans/<task_id>.md` |
| **Hecho cuando** | cada tarea es implementable y verificable |

## Agente desarrollador

| | |
|--|--|
| **Misión** | Implementar el plan en una rama |
| **Input** | spec + plan + cerebro |
| **Output** | commits + rama `feature/...` |
| **Hecho cuando** | el plan está cubierto y el pack listo para review |

No decide arquitectura nueva sin ADR.

## Revisor de lógica

| | |
|--|--|
| **Misión** | Validar corrección funcional y casos límite |
| **Contexto** | limpio |
| **Output** | `PASS/FAIL` + hallazgos |

## Revisor de seguridad

| | |
|--|--|
| **Misión** | Detectar riesgos de seguridad |
| **Contexto** | limpio |
| **Output** | `PASS/FAIL` + hallazgos priorizados |

## Revisor de rendimiento

| | |
|--|--|
| **Misión** | Detectar regresiones de coste/latencia/escala |
| **Contexto** | limpio |
| **Output** | `PASS/FAIL` + hallazgos |

## Agente de pruebas

| | |
|--|--|
| **Misión** | Validar con escenarios reales, lint y CI |
| **Importante** | **distinto** del desarrollador |
| **Output** | informe de pruebas + estado CI |

Si el mismo agente escribe código y tests sin contraste, se autojustifica.

## Clasificador de riesgo / aprobador

| | |
|--|--|
| **Misión** | Decidir auto-ruta vs humano, o reenviar a build |
| **Input** | reviews + pruebas + paths tocados |
| **Output** | `LOW` / `HIGH` / `SEND_BACK` |

Debe ir acompañado de **hooks de código** en paths críticos.

---

## Regla de oro de prompts

1. Un rol = un objetivo
2. Salida estructurada (`PASS|FAIL` + lista)
3. Si falta info del cerebro → `BLOCKED`
4. Prohibido inventar archivos no presentes en el diff (revisores)
