# Software Factory

Idea visual del modelo. No es el metodo completo.

## [▶ Ver la explicacion (video)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

[![Ver video Software Factory](./assets/video-poster.jpg)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

**[Abrir reproductor](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)** ·
**[Descargar MP4](./assets/software-factory-explicacion.mp4)**

**Dejar de chatear → empezar a orquestar.**

---

## Esquema 01 — El problema: tu en medio

Hoy programas con IA como si fuera un chat: un solo agente y tu en el centro. Pedir, revisar, corregir, otra vez. No hay salida del loop.

```mermaid
flowchart TD
  U[Tu] -->|pedir| A[1 agente]
  A -->|entregar| U
  U -->|revisar| A
  A -->|corregir otra vez| U
```

---

## Esquema 02 — Como se siente ese chat

No falla la IA: falla el modelo. Cada mensaje te obliga a volver a meter contexto, criterio y decision.

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

---

## Esquema 03 — El salto de modelo

El salto no es "un agente mejor". Es dejar de chatear y pasar a orquestar: peticion entra, entregable sale.

```mermaid
flowchart LR
  A[Chatear] -->|salto| B[Orquestar]
  B --> C[Entregable]
```

---

## Esquema 04 — Hoy vs Software Factory

Misma materia prima (agentes). Distinto sistema: tu dejas de ser el pegamento y pasas a dirigir.

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

---

## Esquema 05 — Que es una Software Factory

No va de usar mas herramientas de IA. Va de un proceso con roles: spec, plan, build, review, entrega.

```mermaid
flowchart LR
  Peticion --> Orquestador
  Orquestador --> Spec
  Spec --> Plan
  Plan --> Build
  Build --> Review
  Review --> Entrega
```

---

## Esquema 06 — El flujo tiene estados

Una factory no improvisa en el chat: avanza por estados. Si review falla, vuelve a build. Si pasa, entrega.

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

---

## Esquema 07 — Las 4 piezas

Sin estas piezas sigues en modo chat, aunque tengas 10 agentes.

- **Contexto:** memoria del proyecto (no reexplicar cada vez)
- **Roles:** cada agente un oficio
- **Gates:** humano solo donde importa
- **Rastro:** todo auditable

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

---

## Esquema 08 — Roles especializados

De la peticion al pull request: un agente especifica, otro planifica, otros implementan en paralelo, luego review.

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

---

## Esquema 09 — Como habla el sistema

Tu no pegas con cada agente. Hablas con el orquestador. El reparte trabajo y te devuelve un entregable.

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

---

## Esquema 10 — Camino completo a PR

El objetivo no es "una respuesta bonita". Es una salida ingenieril: spec → plan → codigo → tests → review → PR.

```mermaid
flowchart LR
  A[Peticion] --> B[Spec]
  B --> C[Plan]
  C --> D[Build]
  D --> E[Tests]
  E --> F[Review]
  F --> G[PR]
```

---

## Esquema 11 — Que produce cada fase

Spec define el que. Plan parte el trabajo. Build ejecuta en ramas aisladas con checks. Asi no se mezcla todo en un solo hilo de chat.

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

---

## Esquema 12 — Gates: donde entra el humano

No revisas todo. Ruta rapida si el riesgo es bajo. Ruta critica si el impacto es alto: ahi el humano decide.

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

---

## Esquema 13 — Vista completa del modelo

Tu diriges. El orquestador coordina. El contexto sostiene. Los roles producen. El gate protege. El rastro queda.

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

**Cierre:** programar con IA... o dirigir equipos de agentes?
