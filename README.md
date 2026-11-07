# Software Factory

<div align="center">

![Software Factory](./assets/hero.png)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&width=640&height=40&lines=Dejar+de+chatear.;Empezar+a+orquestar.)](https://github.com/DenverCoder1/readme-typing-svg)

Idea visual del modelo. **No es el metodo completo.**

</div>

---

## 1. El problema

Hoy el humano esta en medio del chat. Sin salida.

![El problema](./assets/01-chat-loop.png)

```mermaid
flowchart TD
  U[Tu] -->|haz esto| A[Agente]
  A -->|y esto| U
  U -->|corrige| A
  A -->|otra vez| U
```

---

## 2. El salto

Mismo tipo de agente. Otro sistema.

![El salto](./assets/04-salto.png)

```mermaid
flowchart LR
  A[Chatear] -->|salto| B[Orquestar]
  B --> C[Entregable]
```

---

## 3. La fabrica

La peticion entra. El entregable sale.

![La fabrica](./assets/02-pipeline.png)

```mermaid
flowchart LR
  E[Entrada] --> S[Spec]
  S --> P[Plan]
  P --> B[Build]
  B --> R[Review]
  R --> O[Out]
```

---

## 4. Piezas

![Roles](./assets/03-roles.png)

| Pieza | Que hace |
| --- | --- |
| **Contexto** | memoria del proyecto |
| **Roles** | cada agente un oficio |
| **Gates** | humano donde importa |
| **Rastro** | todo auditable |

---

## 5. Gates

```mermaid
flowchart LR
  A[Ruta rapida] --> OK[Entrega]
  B[Ruta critica] --> H{Humano}
  H -->|ok| OK
  H -->|no| X[Rehacer]
  X --> B
```

---

<div align="center">

**Dejar de chatear → empezar a orquestar.**

</div>
