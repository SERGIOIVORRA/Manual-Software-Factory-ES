# 09 — Casos de uso

## 1) De la petición al pull request

Flujo canónico del manual:

1. Entra petición / bug / ticket
2. Spec
3. Plan (T1, T2, T3)
4. Developer en rama `feature/...`
5. Reviews en paralelo: lógica, seguridad, rendimiento
6. Agente de pruebas (lint + escenarios)
7. PR

## 2) Autofix de errores de producción

**Entrada:** evento de error  
**Salida:** PR o deploy según riesgo

Útil cuando el mismo tipo de fallo se repite y puede cerrarse con un proceso repetible.

## 3) Equipos no técnicos

Marketing / ventas / ops lanzan peticiones (Slack o formulario).  
La factory decide si puede ir automática o necesita humano.

Ejemplos:

- cambiar copy de landing
- añadir FAQ
- ajustar textos legales (con gate humano)

## 4) App a medida que reduce suscripciones

Ejemplo de valor de negocio:

En lugar de pagar muchas apps sueltas (regalos, bundles, descuentos, upsell, etc.), la factory ayuda a construir **una solución a medida** que concentre módulos:

- regalos automáticos
- kits y packs
- descuentos avanzados / por volumen
- cupones y reglas
- ofertas por mercado
- automatizaciones
- upsell / cross-sell

Resultado buscado:

> **Una sola solución. Múltiples funcionalidades. Menos suscripciones.**

No es “magia”: es industrializar el desarrollo de ese backend propio con roles y control de calidad.

## 5) Mejoras del propio pipeline

Usa la factory para:

- mejorar prompts de cada rol
- endurecer límites del clasificador
- reportar KPIs semanales (lead time, % auto-merge, reopens)
