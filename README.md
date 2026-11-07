<div align="center">

![Software Factory](https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0A0C10,100:1A2418&text=Software%20Factory&fontSize=70&fontColor=C8F055&animation=twinkling&fontAlignY=38&desc=dejar%20de%20chatear%20·%20empezar%20a%20orquestar&descAlignY=60&descSize=18&descColor=A8B09E)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3200&pause=900&color=C8F055&center=true&vCenter=true&width=720&height=55&lines=No+es+un+chat+mejor.;Es+una+fabrica.;Tu+diriges.+No+pegas.)](https://github.com/DenverCoder1/readme-typing-svg)

![idea](https://img.shields.io/badge/idea-visual-c8f055?style=for-the-badge&labelColor=0a0c10)
![sin receta](https://img.shields.io/badge/metodo-no%20aqui-ff7a59?style=for-the-badge&labelColor=0a0c10)
![modelo](https://badges.ws/badge?label=modelo&value=orquestar&color=5eead4&labelColor=0a0c10&style=for-the-badge&animation=shine)

</div>

---

## 01 — El problema

![El problema](./assets/01-chat-loop.png)

```mermaid
flowchart TD
  U[Tú] -->|haz esto| A[Agente]
  A -->|¿y esto?| U
  U -->|corrige| A
  A -->|otra vez| U
  U -.->|∞ loop| U
```

---

## 02 — El salto

![El salto](./assets/04-salto.png)

```mermaid
flowchart LR
  CHAT[Chat infinito] -->|salto| FAB[Factory]
  FAB --> OUT[Entregable]
```

---

## 03 — La fábrica

![La fábrica](./assets/02-pipeline.png)

```mermaid
flowchart LR
  E[Entrada] --> S[Spec]
  S --> P[Plan]
  P --> B[Build]
  B --> R[Review]
  R --> O[Out]
```

---

## 04 — Piezas

![Roles](./assets/03-roles.png)

| Pieza | Qué hace |
| --- | --- |
| **Contexto** | memoria del proyecto |
| **Roles** | cada agente un oficio |
| **Gates** | humano solo donde importa |
| **Rastro** | todo auditable |

---

## 05 — Gates

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

![footer](https://capsule-render.vercel.app/api?type=waving&height=120&color=0:1A2418,100:0A0C10&section=footer&text=solo%20la%20idea&fontSize=28&fontColor=8B918C&animation=fadeIn&fontAlignY=60)

Hecho con cosas que ya existen:
[capsule-render](https://github.com/kyechan99/capsule-render) ·
[readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) ·
[shields.io](https://shields.io) ·
[badges.ws](https://badges.ws) ·
[Mermaid](https://mermaid.js.org) (nativo en GitHub)

</div>
