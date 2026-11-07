# 01 — Qué es una Software Factory

## Definición práctica

Una **Software Factory** es un sistema donde:

- entra una **petición**, un **bug** o un **ticket**,
- un **orquestador** coordina una cola de trabajo,
- distintos **agentes con roles** ejecutan pasos del proceso,
- y sale un entregable (rama, PR, deploy) con **trazas auditables**.

No es “abrir un chat y ver qué pasa”.  
Es **dirigir un equipo de agentes** con reglas y límites.

## El modelo de hoy vs la factory

| Modelo de hoy | Software Factory |
|---------------|------------------|
| Un solo agente | Varios roles especializados |
| Tú en medio de cada ciclo | Orquestación del proceso |
| pedir → revisar → corregir → repetir | especificar → planificar → implementar → revisar → probar |
| Contexto improvisado | Cerebro persistente del proyecto |
| Autovalidación fácil | Separación builder / revisores / pruebas |

## Analogía rápida

Como en una fábrica real:

1. Entra materia prima (la petición)
2. Distintas estaciones transforman el trabajo
3. Hay controles de calidad
4. Sale un producto

Si una estación falla, debe detectarse **antes** de que el fallo se arrastre.

## Qué NO es

- Un chatbot con memoria larga
- Un agente único que lo hace todo
- Un CI sin roles ni reglas de negocio
- Un flujo sin límites ni auditoría

## Frase guía

> El próximo salto no es solo programar *con* IA.  
> Es **dirigir equipos de agentes**.
