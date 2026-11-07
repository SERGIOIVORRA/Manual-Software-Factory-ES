# Software Factory

Idea visual del modelo. No es el metodo completo.

## [▶ Ver la explicacion (video)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

[![Ver video Software Factory](./assets/video-poster.jpg)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

**[Abrir reproductor](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)** ·
**[Descargar MP4](./assets/software-factory-explicacion.mp4)**

**Dejar de chatear → empezar a orquestar.**

---

## Esquema 01 — Loop actual

```mermaid
flowchart TD
  U[Tu] -->|pedir| A[1 agente]
  A -->|entregar| U
  U -->|revisar| A
  A -->|corregir otra vez| U
```

## Esquema 02 — Secuencia del chat

```mermaid
sequenceDiagram
  participant T as Tu
  participant A as Agente
  T->>A: haz esto
  A-->>T: aqui tienes
  T->>A: corrige esto
  A-->>T: listo?
  T->>A: no, otra vez
```

## Esquema 03 — El salto

```mermaid
flowchart LR
  A[Chatear] -->|salto| B[Orquestar]
  B --> C[Entregable]
```

## Esquema 04 — Hoy vs Factory

```mermaid
flowchart TB
  subgraph HOY
    H1[Tu en medio]
    H2[1 agente]
    H3[Loop infinito]
  end
  subgraph FACTORY
    F1[Tu diriges]
    F2[Varios roles]
    F3[Proceso con salida]
  end
  HOY -->|cambio de modelo| FACTORY
```

## Esquema 05 — Pipeline

```mermaid
flowchart LR
  Peticion --> Orquestador
  Orquestador --> Spec
  Spec --> Plan
  Plan --> Build
  Build --> Review
  Review --> Entrega
```

## Esquema 06 — Estados del flujo

```mermaid
stateDiagram-v2
  [*] --> Entrada
  Entrada --> Spec
  Spec --> Plan
  Plan --> Build
  Build --> Review
  Review --> Entrega: ok
  Review --> Build: retrabajo
  Entrega --> [*]
```

## Esquema 07 — Piezas del sistema

```mermaid
flowchart TB
  CTX[Contexto]
  ROL[Roles]
  GAT[Gates]
  RAS[Rastro]
  CTX --- ROL
  ROL --- GAT
  GAT --- RAS
```

## Esquema 08 — Orquestador y agentes

```mermaid
flowchart TD
  O[Orquestador] --> S[Agente especificacion]
  S --> P[Agente planificador]
  P --> D1[Dev T1]
  P --> D2[Dev T2]
  P --> D3[Dev T3]
  D1 --> R[Review]
  D2 --> R
  D3 --> R
  R --> PR[Pull request]
```

## Esquema 09 — Secuencia Factory

```mermaid
sequenceDiagram
  participant U as Tu
  participant O as Orquestador
  participant S as Spec
  participant P as Plan
  participant D as Dev
  participant H as Gate humano
  U->>O: peticion
  O->>S: especificar
  S-->>O: spec + criterios
  O->>P: planificar
  P-->>O: tareas T1 T2 T3
  O->>D: implementar
  D-->>O: rama / diff
  O->>H: review critica?
  H-->>O: ok / rehacer
  O-->>U: entregable
```

## Esquema 10 — De peticion a PR

```mermaid
flowchart LR
  A[Peticion] --> B[Spec]
  B --> C[Plan]
  C --> D[Build]
  D --> E[Tests]
  E --> F[Review]
  F --> G[PR]
```

## Esquema 11 — Spec / Plan / Build

```mermaid
flowchart TD
  subgraph Spec
    S1[Objetivo]
    S2[Criterios]
    S3[Fuera de alcance]
  end
  subgraph Plan
    P1[T1]
    P2[T2]
    P3[T3]
  end
  subgraph Build
    B1[Rama]
    B2[Codigo]
    B3[Checks]
  end
  Spec --> Plan --> Build
```

## Esquema 12 — Gates

```mermaid
flowchart TD
  X{Riesgo} -->|bajo| R[Ruta rapida]
  X -->|alto| C[Ruta critica]
  R --> E[Entrega]
  C --> H[Gate humano]
  H -->|ok| E
  H -->|no| Back[Rehacer]
  Back --> C
```

## Esquema 13 — Vista completa

```mermaid
flowchart TB
  U[Tu diriges] --> O[Orquestador]
  O --> CTX[(Contexto)]
  O --> S[Spec]
  O --> P[Plan]
  O --> B[Build]
  O --> R[Review]
  R --> G{Gate}
  G -->|ok| OUT[Entregable / PR]
  G -->|no| P
  S -.-> CTX
  P -.-> CTX
  B -.-> CTX
  R -.-> CTX
```

---

**Pregunta:** programar con IA... o dirigir equipos de agentes?
