# Manual de Software Factory para Desarrollos

Guía práctica para diseñar e implementar una **fábrica de software** moderna: procesos repetibles, auditables y orquestados con agentes de IA, código determinista y puntos de aprobación humana.

> Objetivo: dejar de ser el cuello de botella del chat con un agente y convertir el desarrollo en un sistema donde **entra trabajo → se procesa → sale entregable**, con trazabilidad en cada paso.

---

## Índice

| # | Documento | Contenido |
|---|-----------|-----------|
| 1 | [Qué es una Software Factory](./docs/01-que-es-software-factory.md) | Concepto, analogía y por qué importa |
| 2 | [Principios clave](./docs/02-principios.md) | Repetible, auditable, con contexto persistente |
| 3 | [Tipos de pasos](./docs/03-tipos-de-pasos.md) | Código, agentes y revisión humana |
| 4 | [El cerebro (contexto)](./docs/04-cerebro-contexto.md) | Memoria del proyecto y decisiones de arquitectura |
| 5 | [Arquitectura del pipeline](./docs/05-arquitectura-pipeline.md) | Entrada → Spec → Builder → Revisores → Aprobación → Deploy |
| 6 | [Implementación paso a paso](./docs/06-implementacion-paso-a-paso.md) | Cómo montarla en tu equipo |
| 7 | [Roles de agentes](./docs/07-roles-de-agentes.md) | Spec writer, builder, seguridad, UX, UI, código, aprobador |
| 8 | [Rutas rápida vs crítica](./docs/08-rutas-rapida-y-critica.md) | Cuándo merge automático y cuándo humano |
| 9 | [Casos de uso](./docs/09-casos-de-uso.md) | Errores de producción, issues, marketing, contenido |
| 10 | [Checklist de puesta en marcha](./docs/10-checklist.md) | Lista para no olvidar nada |
| — | [Plantillas](./plantillas/) | Spec, brain, PR, webhook |

---

## Resumen ejecutivo

### El problema

Trabajar solo chateando con agentes te convierte en el **cuello de botella**:

- Tú lanzas cada tarea
- Tú esperas
- Tú revisas
- Tú decides el siguiente paso

Aunque abras varias ventanas de agentes, el ritmo sigue dependiendo de ti.

### La solución

Una **Software Factory** es un proceso industrializado:

1. **Entra** un input (error de producción, issue, petición de negocio, tarea)
2. **Pasa** por máquinas/pasos definidos (código, agentes, humanos)
3. **Sale** un entregable (PR, deploy, artefacto)
4. Cada paso deja **trazas auditables**

Si algo falla en una “máquina”, lo detectas, lo corriges y el resto del sistema no arrastra el error a ciegas.

---

## Condiciones mínimas para que funcione

| Condición | Significado |
|-----------|-------------|
| **Repetible** | La misma clase de trabajo sigue siempre el mismo camino |
| **Auditable** | Cada paso deja rastro: qué entró, qué salió, quién decidió |
| **Con contexto** | Existe un “cerebro” con arquitectura, reglas y decisiones previas |

Sin estas tres, no tienes fábrica: tienes automatismos sueltos.

---

## Pipeline base (visión rápida)

```text
INPUT
  ├─ error de producción (monitorización)
  ├─ issue / ticket
  └─ petición (Slack, formulario, voz…)
        ↓
  SPEC WRITER  →  consulta el CEREBRO  →  escribe especificación
        ↓
  BUILDER      →  TDD (test → falla → código → pasa)  →  rama + PR
        ↓
  SUB-AGENTES (contexto limpio cada uno)
  ├─ Seguridad
  ├─ UX
  ├─ UI
  └─ Code review
        ↓
  APROBADOR    →  si hay feedback negativo → vuelve al BUILDER
        ↓
  CLASIFICADOR DE RIESGO
  ├─ bajo riesgo  →  merge / deploy automático
  └─ alto riesgo  →  aprobación humana
        ↓
  PRODUCCIÓN
```

Puedes lanzar **varias tareas en paralelo** (cada una con su ID, rama y trazas).

---

## ¿Cuándo merece la pena crear una factory?

Si un proceso:

- lo haces **más de una vez por semana**, y
- tiene **entrada clara** y **salida clara**, y
- se puede **revisar y auditar**,

…entonces tiene sentido convertirlo en fábrica.

Ejemplos: corrección de bugs recurrentes, cambios de copy en landing, generación de specs, reviews de seguridad, edición de contenido, etc.

---

## Cómo usar este manual

1. Lee [01](./docs/01-que-es-software-factory.md) y [02](./docs/02-principios.md)
2. Diseña tu pipeline con [05](./docs/05-arquitectura-pipeline.md)
3. Define el cerebro con [04](./docs/04-cerebro-contexto.md) y la plantilla `plantillas/brain.md`
4. Implementa siguiendo [06](./docs/06-implementacion-paso-a-paso.md)
5. Valida con el [checklist](./docs/10-checklist.md)

---

## Licencia

MIT — úsala, adáptala y compártela en tu equipo o empresa.

**Autor:** Sergio Ivorra
