# Software Factory

Idea visual del modelo. No es el metodo completo.

**Dejar de chatear → empezar a orquestar.**

---

## 1. El problema

Hoy el humano esta en medio del chat. Sin salida.

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

```mermaid
flowchart LR
  A[Chatear] -->|salto| B[Orquestar]
  B --> C[Entregable]
```

---

## 3. La fabrica

La peticion entra. El entregable sale.

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

| Pieza | Que hace |
| --- | --- |
| Contexto | memoria del proyecto |
| Roles | cada agente un oficio |
| Gates | humano donde importa |
| Rastro | todo auditable |

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
