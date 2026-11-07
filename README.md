# Software Factory — la idea

No es un chat mejor. Es una **fábrica**.

---

## Hoy

![Chat infinito](./assets/01-chat-loop.svg)

```mermaid
flowchart LR
  U[Tú] -->|prompt| A[Agente]
  A -->|respuesta| U
  U -->|corrige| A
  A -->|otra vez| U
```

---

## El salto

![De chatear a orquestar](./assets/04-salto.svg)

```mermaid
flowchart LR
  A[Chatear] --> B[Orquestar]
```

---

## La fábrica

![Pipeline](./assets/02-pipeline.svg)

```mermaid
flowchart LR
  E[Entrada] --> S[Spec]
  S --> P[Plan]
  P --> B[Build]
  B --> R[Review]
  R --> O[Out]
```

---

## Roles

![Roles](./assets/03-roles.svg)

```mermaid
flowchart TB
  C[Contexto]
  C --- SP[Spec]
  C --- PL[Plan]
  C --- DV[Build]
  C --- RV[Review]
  C --- QA[Test]
  SP --> PL --> DV --> RV --> QA
```

---

## Gates

```mermaid
flowchart LR
  Auto[Ruta rápida] --> OK[Entrega]
  Crit[Ruta crítica] --> H{Humano?}
  H -->|sí| OK
  H -->|no| Fix[Rehacer]
  Fix --> Crit
```

---

Poco texto. Solo el modelo.
