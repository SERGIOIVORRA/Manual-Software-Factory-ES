# Manual de Software Factory para Desarrollos

Guía práctica para pasar de **programar chateando con un agente** a **dirigir un equipo de agentes** con roles, reglas y límites.

> Una Software Factory no es un chatbot mejorado.  
> Es un **proceso orquestado**: entra una petición o un bug → se especifica → se planifica → se implementa → se revisa en paralelo → se prueba → sale un entregable auditable.

---

## La pregunta clave

**¿Programar con IA… o dirigir equipos de agentes?**

El salto no es “escribir prompts más largos”.  
El salto es dejar de estar tú en medio de cada ciclo.

---

## Índice

| # | Documento | Contenido |
|---|-----------|-----------|
| 1 | [Qué es una Software Factory](./docs/01-que-es-software-factory.md) | Concepto y diferencia con el chat |
| 2 | [Principios clave](./docs/02-principios.md) | Roles, reglas, límites, auditoría y contexto |
| 3 | [Tipos de pasos](./docs/03-tipos-de-pasos.md) | Código, agentes y gates humanos |
| 4 | [El cerebro (contexto)](./docs/04-cerebro-contexto.md) | Memoria del proyecto |
| 5 | [Arquitectura del pipeline](./docs/05-arquitectura-pipeline.md) | Orquestador + flujo completo |
| 6 | [Implementación paso a paso](./docs/06-implementacion-paso-a-paso.md) | Cómo montarla |
| 7 | [Roles de agentes](./docs/07-roles-de-agentes.md) | Spec, plan, desarrollo, revisores, pruebas |
| 8 | [Rutas rápida vs crítica](./docs/08-rutas-rapida-y-critica.md) | Auto vs humano |
| 9 | [Casos de uso](./docs/09-casos-de-uso.md) | Bugs, tickets, negocio, apps a medida |
| 10 | [Checklist](./docs/10-checklist.md) | Puesta en marcha |
| 11 | [Posibilidades y límites](./docs/11-posibilidades-y-limites.md) | Qué sí, qué no, errores típicos |
| — | [Plantillas](./plantillas/) | Spec, plan, brain, review, PR |

---

## El modelo de hoy (el problema)

Hoy muchas personas trabajan así:

```text
pedir → revisar → corregir → repetir
```

Con **un solo agente** y **tú en medio**.

Eso te convierte en cuello de botella:

- tú lanzas
- tú esperas
- tú corriges
- tú vuelves a empezar

Aunque abras varias ventanas, el ritmo sigue dependiendo de ti.

Además:

- se **genera más rápido de lo que se revisa**
- si el **mismo agente** escribe el código y sus tests, **se da la razón a sí mismo**

---

## El concepto Software Factory

Mucho más que un chatbot: un **proceso con roles**.

Tres pilares dentro de la fábrica:

| Pilar | Significado |
|-------|-------------|
| **Rol** | Cada agente hace una cosa concreta |
| **Reglas** | Cómo debe hacerlo y con qué formato de salida |
| **Límites** | Qué no puede hacer sin aprobación |

### Entrada

- Petición
- Bug
- Ticket

### Pasos del proceso

1. **Especificación**
2. **Planificación**
3. **Implementación**
4. **Revisión** (en paralelo)
5. **Pruebas**

Todo bajo un **orquestador**: cola de tareas y coordinación.

---

## Pipeline base

```text
INPUT (petición / bug / ticket)
        ↓
 ORQUESTADOR (cola + estados + trazas)
        ↓
 Agente de especificación  →  criterios de aceptación
        ↓
 Agente planificador       →  tareas T1, T2, T3…
        ↓
 Agente desarrollador      →  rama feature/… + código
        ↓
 Revisores en paralelo
   ├─ Lógica
   ├─ Seguridad
   └─ Rendimiento
        ↓
 Agente de pruebas         →  escenarios reales + lint/CI
        ↓
 Clasificador de riesgo
   ├─ bajo  → merge/deploy automático
   └─ alto  → aprobación humana
        ↓
 PRODUCCIÓN / PR
```

---

## Condiciones mínimas

| Condición | Significado |
|-----------|-------------|
| **Repetible** | La misma clase de trabajo sigue el mismo camino |
| **Auditable** | Cada paso deja rastro |
| **Con contexto** | Hay un “cerebro” del proyecto |
| **Con roles separados** | Quien construye no es quien se auto-valida a ciegas |

---

## Valor de negocio (ejemplo)

Una factory bien montada no solo “escribe código más rápido”.  
Permite construir **soluciones a medida** que concentran funcionalidad y reducen dependencia de muchas herramientas sueltas (por ejemplo, varias apps de pago sustituidas por un backend propio).

Idea: **una sola solución, múltiples funcionalidades, menos suscripciones**.

---

## Cómo usar este manual

1. Lee [01](./docs/01-que-es-software-factory.md) y [11](./docs/11-posibilidades-y-limites.md)
2. Diseña roles y límites con [02](./docs/02-principios.md) y [07](./docs/07-roles-de-agentes.md)
3. Monta el orquestador y el pipeline con [05](./docs/05-arquitectura-pipeline.md) y [06](./docs/06-implementacion-paso-a-paso.md)
4. Valida con el [checklist](./docs/10-checklist.md)

---

## Licencia

MIT — úsala y adáptala a tu equipo.

**Autor:** Sergio Ivorra
