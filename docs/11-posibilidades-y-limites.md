# 11 — Posibilidades y límites

## Mensaje claro

**No se programa solo.**

Una Software Factory aumenta capacidad, pero no elimina diseño, criterio ni responsabilidad.

## Posibilidades reales

- paralelizar trabajo (varias tareas a la vez)
- estandarizar calidad con roles fijos
- reducir el tiempo que pasas en ciclos pedir/revisar/corregir
- dejar que no-técnicos lancen peticiones controladas
- construir producto a medida con más ritmo

## Límites importantes

### 1) Se genera más rápido de lo que se revisa

Si no montas revisores + pruebas + gates, acumulas deuda y riesgo.

### 2) Mismo agente para código y tests

Si un agente escribe el código y sus propios tests sin contraste:

> se da la razón a sí mismo

Separa **desarrollador** y **agente de pruebas**.

### 3) Sin cerebro, alucina arquitectura

Sin contexto persistente, cada tarea reinventará decisiones.

### 4) Sin límites, puede romper producción

Paths críticos (DB, auth, pagos, infra) deben tener hooks duros + humano.

### 5) No todo proceso merece factory

Si no es repetible, no tiene salida clara o ocurre rara vez, automatizarlo sale caro.

## Checklist anti-autoengaño

- [ ] ¿Hay roles distintos o un solo “superagente”?
- [ ] ¿Hay reglas de salida (`PASS/FAIL`) por paso?
- [ ] ¿Hay límites que no se pueden saltar?
- [ ] ¿Hay orquestador con estados?
- [ ] ¿Hay pruebas independientes del builder?
- [ ] ¿Hay gate humano en cambios críticos?

Si alguna respuesta es “no”, todavía no tienes factory: tienes chat con extras.
