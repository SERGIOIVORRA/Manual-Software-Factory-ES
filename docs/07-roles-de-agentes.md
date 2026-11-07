# 07 — Roles de agentes

Cada rol tiene un trabajo, un input, un output y un criterio de “hecho”.

## Spec Writer

| | |
|--|--|
| **Misión** | Convertir un pedido/bug en especificación ejecutable |
| **Consulta** | Cerebro (siempre) |
| **Output** | `specs/<task_id>.md` |
| **Hecho cuando** | hay alcance, no-alcance, criterios de aceptación y tests esperados |

No escribe código de producto.

## Builder

| | |
|--|--|
| **Misión** | Implementar la spec con TDD |
| **Consulta** | Cerebro + spec |
| **Output** | commits en rama + tests + PR |
| **Hecho cuando** | CI verde y todos los ítems de la spec cubiertos |

No decide arquitectura nueva sin ADR.

## Revisor de seguridad

| | |
|--|--|
| **Misión** | Encontrar riesgos de seguridad en el diff |
| **Contexto** | Limpio (solo diff + estándares de seguridad del cerebro) |
| **Output** | `PASS/FAIL` + hallazgos priorizados |

## Revisor de UX

| | |
|--|--|
| **Misión** | Validar flujo y claridad para el usuario objetivo |
| **Contexto** | Limpio + avatar/personas del cerebro |
| **Output** | `PASS/FAIL` + fricciones detectadas |

## Revisor de UI

| | |
|--|--|
| **Misión** | Validar consistencia visual y estados de interfaz |
| **Contexto** | Limpio + design tokens / reglas UI |
| **Output** | `PASS/FAIL` + lista de inconsistencias |

## Revisor de código

| | |
|--|--|
| **Misión** | Cumplir arquitectura, estilo y calidad |
| **Contexto** | Limpio + estándares del cerebro |
| **Output** | `PASS/FAIL` + comentarios accionables |

## Aprobador

| | |
|--|--|
| **Misión** | Consolidar reviews y decidir |
| **Input** | 4 reportes |
| **Output** | `APPROVE` o `SEND_BACK` con lista única de fixes |

## Clasificador de riesgo

| | |
|--|--|
| **Misión** | Decidir ruta automática vs humana |
| **Input** | diff + paths tocados + tipo de tarea |
| **Output** | `LOW` / `HIGH` + justificación |

Debe estar respaldado por **hooks de código** que no se puedan saltar.

---

## Buenas prácticas de prompts por rol

1. Un rol = un objetivo
2. Formato de salida estricto (JSON o checklist)
3. Prohibido inventar archivos no presentes en el diff (para revisores)
4. Si falta info del cerebro → `BLOCKED` (no improvisar)
