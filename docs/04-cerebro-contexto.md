# 04 — El cerebro (contexto persistente)

## Por qué existe

Sin memoria continua, cada tarea empieza de cero.

Ejemplo de fallo típico:

> Hace 3 meses decidisteis Postgres.  
> Hoy pides “mejorar rendimiento de la base de datos”.  
> El agente, sin cerebro, propone MySQL… o inventa un esquema incompatible.

El **cerebro** evita:

- código duplicado
- decisiones contradictorias
- roturas de arquitectura
- alucinaciones de stack

## Qué debe guardar el cerebro

| Bloque | Contenido |
|--------|-----------|
| Stack | lenguajes, frameworks, DB, hosting |
| Arquitectura | módulos, límites, patrones |
| Estándares | estilo, naming, testing, seguridad |
| Decisiones (ADR) | qué se decidió, por qué, fecha |
| Dominio | reglas de negocio, avatares de usuario |
| Integraciones | APIs, webhooks, terceros |
| No-hacer | anti-patrones prohibidos |

## Cuándo se consulta

**Siempre antes de:**

1. Escribir una spec
2. Generar código
3. Revisar arquitectura / UX / código
4. Clasificar riesgo de deploy

## Formato recomendado

Mantén el cerebro en el repo (o en un store versionado):

```text
brain/
  stack.md
  architecture.md
  standards.md
  decisions/
    2026-01-15-postgres.md
  domain.md
  forbidden.md
```

Usa también la plantilla: [`../plantillas/brain.md`](../plantillas/brain.md)

## Reglas de actualización

1. Toda decisión importante se registra el mismo día
2. El builder no “inventa” arquitectura nueva sin ADR
3. Si un agente propone cambiar stack, es cambio crítico → humano
4. El cerebro es fuente de verdad; el chat no lo es

## Señal de que el cerebro funciona

Cuando lanzas 10 tareas distintas y el resultado:

- respeta el mismo estilo,
- no rompe módulos vecinos,
- no reinventar soluciones ya existentes,

…el cerebro está haciendo su trabajo.
