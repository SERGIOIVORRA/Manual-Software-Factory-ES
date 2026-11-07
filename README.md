<div align="center">

![Software Factory](./assets/hero.gif)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=2800&pause=700&color=C8F055&center=true&vCenter=true&width=720&height=55&lines=No+es+un+chat+mejor.;Es+una+fabrica.;Tu+diriges.+No+pegas.)](https://github.com/DenverCoder1/readme-typing-svg)

![idea](https://img.shields.io/badge/idea-visual-c8f055?style=for-the-badge&labelColor=0a0c10)
![modelo](https://img.shields.io/badge/modelo-orquestar-5eead4?style=for-the-badge&labelColor=0a0c10)

</div>

---

## 01 — El problema

![El problema](./assets/01-chat-loop.gif)

```mermaid
flowchart TD
  U[Tú] -->|haz esto| A[Agente]
  A -->|¿y esto?| U
  U -->|corrige| A
  A -->|otra vez| U
```

---

## 02 — El salto

![El salto](./assets/04-salto.gif)

```mermaid
flowchart LR
  CHAT[Chat infinito] -->|salto| FAB[Factory]
  FAB --> OUT[Entregable]
```

---

## 03 — La fábrica

![La fábrica](./assets/02-pipeline.gif)

```mermaid
flowchart LR
  E[Entrada] --> S[Spec]
  S --> P[Plan]
  P --> B[Build]
  B --> R[Review]
  R --> O[Out]
```

---

## 04 — Gates

```mermaid
flowchart LR
  A[Ruta rápida] --> OK[Entrega]
  B[Ruta crítica] --> H{Humano}
  H -->|ok| OK
  H -->|no| R[Rehacer]
  R --> B
```

---

<div align="center">

**Idea:** dejar de chatear → orquestar.

Animaciones hechas con [GSAP](https://gsap.com) + [Playwright](https://playwright.dev) + [ffmpeg](https://ffmpeg.org) → GIFs que sí se mueven en GitHub.

</div>
