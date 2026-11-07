# Software Factory

![Software Factory](./assets/hero.png)

---

![El problema](./assets/01-chat-loop.png)

---

![El salto](./assets/04-salto.png)

---

![La fabrica](./assets/02-pipeline.png)

---

![Roles](./assets/03-roles.png)

---

### Gates

```mermaid
flowchart LR
  A[Ruta rapida] --> OK[Entrega]
  B[Ruta critica] --> H{Humano}
  H -->|ok| OK
  H -->|no| R[Rehacer]
  R --> B
```

---

**Idea:** dejar de chatear → orquestar.
