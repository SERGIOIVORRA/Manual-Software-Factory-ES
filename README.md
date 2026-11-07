# Software Factory — la idea

> No es un chat mejor. Es una **fábrica**.

**[▶ Abrir la versión animada](https://sergioivorra.github.io/Manual-Software-Factory-ES/)**

---

## 1. El problema (tú en medio)

```mermaid
flowchart LR
  U[Tú] -->|prompt| A[Agente]
  A -->|respuesta| U
  U -->|corrige| A
  A -->|otra vez| U
  U -.->|∞| U
```

---

## 2. El salto

```mermaid
flowchart LR
  A[Chatear] -->|dejar de pegar| B[Orquestar]
  style A fill:#3a2a2a,stroke:#ff6b4a,color:#fff
  style B fill:#2a3a2a,stroke:#3dd68c,color:#fff
```

---

## 3. La fábrica (pipeline)

```mermaid
flowchart LR
  E[Entrada\nidea / bug] --> S[Spec\nqué]
  S --> P[Plan\ncómo]
  P --> B[Build\nhacer]
  B --> R[Review\nmirar]
  R --> O[Out\nlisto]
```

---

## 4. Roles (cada uno un oficio)

```mermaid
flowchart TB
  subgraph Factory
    C[🧠 Contexto\nmemoria]
    SP[📝 Spec]
    PL[🗺️ Plan]
    DV[👷 Build]
    RV[🔎 Review]
    QA[🧪 Test]
  end
  C --- SP
  C --- PL
  C --- DV
  C --- RV
  C --- QA
  SP --> PL --> DV --> RV --> QA
```

---

## 5. Gates (humano solo donde importa)

```mermaid
flowchart LR
  Auto[Ruta rápida\nauto] --> OK[Entrega]
  Crit[Ruta crítica] --> H{Humano}
  H -->|sí| OK
  H -->|no| Fix[Rehacer]
  Fix --> Crit
```

---

## 6. En una frase

```text
chat ∞  →  spec → plan → build → review → out
         (tú diriges, no pegas)
```

Poco texto. Solo el modelo.  
La animación está en la [página](https://sergioivorra.github.io/Manual-Software-Factory-ES/).
