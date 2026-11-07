# 09 — Casos de uso

## 1) Autofix de errores de producción

**Entrada:** evento de error (stack trace, URL, entorno)  
**Salida:** PR o deploy (según riesgo)

Flujo típico:

1. Llega el error
2. Spec Writer resume causa probable + plan de fix
3. Builder reproduce con test + arregla
4. Reviews (seguridad + código prioritarios)
5. Si es pequeño → auto
6. Si afecta core → humano

Beneficio: dejas de “apagar fuegos” a mano 24/7.

## 2) Issues / tickets de desarrollo

**Entrada:** issue con label `factory`  
**Salida:** PR enlazado al issue

Buenos candidatos:

- bugs acotados
- mejoras pequeñas
- deuda técnica localizada

Malos candidatos al inicio:

- rediseños totales
- migraciones de plataforma
- requisitos ambiguos sin dueño

## 3) Equipos no técnicos (marketing / ventas / ops)

**Entrada:** mensaje en Slack  
**Salida:** cambio publicado o PR pendiente

Ejemplos:

- cambiar frase del hero
- añadir bloque FAQ
- actualizar aviso legal (con review humano)
- crear landing simple

La factory decide si necesita desarrollador.

## 4) Factory de contenido (mismo patrón, otro dominio)

El patrón factory no es solo código:

```text
audio/vídeo crudo
  → cortar silencios
  → limpiar errores
  → unir
  → transiciones / animaciones
  → miniatura
  → revisión humana
  → publicar
```

Misma lógica: entrada → pasos auditables → salida.

## 5) Mejoras internas del propio pipeline

Usa la factory para:

- mejorar prompts de roles
- añadir checks al clasificador
- generar reportes semanales de KPIs

Cuando el sistema se mejora a sí mismo con control, empieza a escalar de verdad.
