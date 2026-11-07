# 02 — Principios clave

## 1. Roles, reglas y límites

Dentro de la factory siempre hay tres cosas:

| Pilar | Pregunta que responde |
|-------|------------------------|
| **Rol** | ¿Quién hace qué? |
| **Reglas** | ¿Cómo debe hacerlo y qué formato entrega? |
| **Límites** | ¿Qué no puede hacer sin gate humano? |

Sin límites, no hay fábrica: hay automatismos peligrosos.

## 2. Repetible

La misma clase de tarea sigue el mismo camino cada vez.

## 3. Auditable

Cada paso deja rastro:

- `task_id`
- input original
- spec / plan
- rama
- resultados de review
- resultado de pruebas
- decisión final (auto / humano / rechazo)

## 4. Contexto persistente (cerebro)

Antes de especificar, planificar o implementar, se consulta el cerebro del proyecto.

## 5. Separación de responsabilidades

No uses el mismo agente para:

- escribir el código, y
- escribir/aprobar sus propios tests sin contraste

Si un agente se revisa a sí mismo, **se da la razón a sí mismo**.

Mejor:

- desarrollador
- revisores (lógica / seguridad / rendimiento)
- agente de pruebas distinto
- humano en cambios críticos

## 6. La generación supera a la revisión

Se genera más rápido de lo que se revisa.  
Por eso la factory necesita:

- revisores en paralelo
- pruebas automáticas
- gates de riesgo

Si no, acumulas código sin control.

## 7. Orquestación

Hay un orquestador (cola + estados + coordinación).  
No improvisas el orden de los pasos en cada chat.

## 8. Human-in-the-loop solo cuando aporta

- cosmético / no-core → automático
- DB / auth / pagos / core → humano

## 9. Regla de frecuencia

Si lo haces más de una vez por semana y tiene entrada/salida claras → candidata a factory.
