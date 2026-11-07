# Software Factory

> GitHub no deja reproducir MP4 dentro del README. El video se ve aqui:

## [▶ Ver la explicacion (video)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

[![Ver video Software Factory](./assets/video-poster.jpg)](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)

**[Abrir reproductor](https://sergioivorra.github.io/Manual-Software-Factory-ES/ver.html)** ·
**[Descargar MP4](./assets/software-factory-explicacion.mp4)**

Idea visual del modelo. No es el metodo completo.

---

## Resumen (mismo hilo que el video)

### 1. El modelo de hoy

Un solo agente y tu en medio: pedir, revisar, corregir, otra vez.

```mermaid
flowchart TD
  U[Tu] -->|pedir| A[1 agente]
  A -->|entregar| U
  U -->|revisar / corregir| A
```

### 2. El concepto

Software Factory = mucho mas que un chatbot: un **proceso** con roles.

```mermaid
flowchart LR
  Peticion --> Orquestador
  Orquestador --> Spec
  Spec --> Plan
  Plan --> Build
  Build --> Review
  Review --> Entrega
```

### 3. Ejemplo practico

De la peticion al pull request:

```mermaid
flowchart TD
  O[Orquestador] --> S[Agente de especificacion]
  S --> P[Agente planificador]
  P --> D1[Dev T1]
  P --> D2[Dev T2]
  P --> D3[Dev T3]
  D1 --> PR[Pull request]
  D2 --> PR
  D3 --> PR
```

### 4. Gates y limites

```mermaid
flowchart LR
  Rapida[Ruta rapida] --> OK[Entrega]
  Critica[Ruta critica] --> H{Humano}
  H -->|ok| OK
  H -->|no| Redo[Rehacer]
  Redo --> Critica
```

Generar mas rapido de lo que se revisa no basta: hace falta orquestacion y criterio humano.

---

**Cierre del video:** programar con IA... o dirigir equipos de agentes?
