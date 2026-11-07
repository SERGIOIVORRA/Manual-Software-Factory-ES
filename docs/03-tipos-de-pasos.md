# 03 — Tipos de pasos en la factory

En una Software Factory conviven **tres tipos de pasos**. Mezclarlos bien es la clave.

## 1. Paso de código (determinista)

Código clásico o scripts:

- validar formato de input
- crear rama
- ejecutar tests
- lint
- build
- desplegar
- bloquear merge si falla CI

**Característica:** o funciona o no funciona. No “razona”.

Úsalo siempre que la acción sea repetible y sin ambigüedad.

## 2. Paso de agente (no determinista, con razonamiento)

Agente con instrucciones claras:

- qué debe hacer
- cómo debe hacerlo
- qué formato de salida espera
- cómo se valida el resultado
- qué parte del cerebro debe consultar

Ejemplos:

- escribir una especificación a partir de un bug
- implementar una feature siguiendo TDD
- revisar seguridad del diff
- evaluar si un flujo UX es comprensible

**Característica:** adapta el trabajo al input, pero dentro de reglas.

## 3. Paso humano (aprobación / gate)

Persona que decide:

- merge de cambios críticos
- cambio de arquitectura
- despliegue sensible
- excepciones de negocio

**Característica:** no sustituye al sistema; lo gobierna en puntos de alto riesgo.

---

## Cómo combinarlos

```text
Código → crea rama y ticket ID
Agente → escribe spec
Agente → construye con TDD
Código → ejecuta tests/CI
Agentes → reviews (seguridad/UX/UI/código)
Agente → aprueba o reenvía
Código/Agente → clasifica riesgo
Humano (si aplica) → OK final
Código → merge + deploy
```

## Errores típicos

| Error | Consecuencia |
|-------|--------------|
| Todo con agentes | caro, inestable, difícil de auditar |
| Todo con código | no cubre tareas ambiguas |
| Humano en todo | vuelves al cuello de botella |
| Sin reglas de salida | nadie sabe si el paso “pasó” o “falló” |

## Regla práctica

> Si es binario y repetible → **código**.  
> Si requiere juicio → **agente**.  
> Si puede romper el negocio → **humano**.
