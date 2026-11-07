# Software Factory

![Software Factory](./assets/hero.svg)

---

![El problema](./assets/01-chat-loop.svg)

---

![El salto](./assets/04-salto.svg)

---

![La fábrica](./assets/02-pipeline.svg)

---

![Roles](./assets/03-roles.svg)

---

### Gates

```mermaid
flowchart LR
  A[Ruta rápida] --> OK[Entrega]
  B[Ruta crítica] --> H{Humano}
  H -->|ok| OK
  H -->|no| R[Rehacer]
  R --> B
```

---

**Idea:** dejar de chatear → orquestar.
