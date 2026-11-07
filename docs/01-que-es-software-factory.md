# 01 — Qué es una Software Factory

## Definición práctica

Una **Software Factory** es un sistema de producción de software donde:

- el trabajo **entra** por un canal único (o pocos canales estandarizados),
- atraviesa **pasos definidos** (código, agentes, humanos),
- y **sale** como entregable listo (código, PR, deploy, artefacto),
- dejando **trazabilidad** en cada etapa.

No es “abrir un chat con un agente y ver qué pasa”.  
Es **delegar un proceso completo** que puede seguir funcionando aunque tú no estés mirando.

## Analogía: fábrica de coches

En una fábrica real:

1. Entra materia prima (acero)
2. Distintas máquinas transforman piezas
3. Hay operadores y controles de calidad
4. Sale un coche

Si una máquina falla, el fallo se propaga. Por eso cada etapa debe ser:

- **revisable**
- **detectable**
- **corregible**

En software pasa igual: un spec malo genera código malo; un review flojo deja bugs; un deploy sin filtro puede tumbar producción.

## De “yo chateo” a “yo diseño el sistema”

| Antes (chat) | Ahora (factory) |
|--------------|-----------------|
| Tú lanzas cada prompt | El sistema recibe inputs solo |
| Tú eres el orquestador | La orquestación está definida |
| El contexto vive en tu cabeza | El contexto vive en el cerebro |
| Revisas a mano cada cosa | Revisores (agentes/humanos) en pipeline |
| Un solo hilo | Muchas tareas en paralelo |

## Qué NO es una Software Factory

- Un script suelto sin logs
- Un agente sin memoria del proyecto
- Un CI que solo “compila y ya”
- Un flujo que no se puede auditar cuando falla

## Idea central

> Factory = proceso **repetible** + **auditable** + con **inteligencia** donde aporta, y **código** donde debe ser determinista.
