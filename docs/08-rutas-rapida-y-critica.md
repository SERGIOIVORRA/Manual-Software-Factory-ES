# 08 — Rutas rápida y crítica

No todo cambio merece el mismo nivel de fricción.

## Ruta rápida (bajo riesgo)

Ejemplos:

- color de un botón
- texto de landing
- tipografía / spacing no estructural
- copy de emails no legales
- ajustes cosméticos de UI

Flujo:

```text
input → spec breve → builder → reviews ligeras → auto-merge → deploy
```

Condiciones:

- no toca DB
- no toca auth/pagos/permisos
- no toca infra/secretos
- CI verde
- clasificador = LOW
- hooks de paths críticos = OK

## Ruta crítica (alto riesgo)

Ejemplos:

- migraciones de base de datos
- lógica de negocio core
- autenticación / autorización
- facturación / pagos
- cambios grandes de API
- infraestructura

Flujo:

```text
input → spec → builder → reviews completas → aprobador → HUMANO → merge → deploy
```

Condiciones:

- notificación al responsable
- PR obligatorio
- checklist humano firmado
- posibilidad de rollback documentada

## Matriz rápida de decisión

| Señal | Ruta |
|-------|------|
| Solo frontend visual | Rápida |
| Archivos en `/db`, `/migrations` | Crítica |
| Cambia contratos de API | Crítica |
| Issue etiquetado `cosmetic` | Rápida |
| Error de producción en checkout | Crítica |
| Petición de marketing (copy) | Rápida (con review UI/UX) |

## Importante

El clasificador **no debe ser solo un LLM**.

Añade reglas duras:

```text
SI el diff toca paths críticos → HIGH (sin excepción)
SI el modelo dice LOW pero hooks dicen HIGH → HIGH
SI no hay tests nuevos en cambio de lógica → HIGH o BLOCK
```

## Política de intentos

| Situación | Acción |
|-----------|--------|
| Reviews FAIL ×1–2 | reenviar a builder |
| Reviews FAIL ×3 | escalar a humano |
| Clasificador indeciso | tratar como HIGH |
| CI rojo | no avanzar nunca |
