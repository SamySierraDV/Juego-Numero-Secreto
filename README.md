
## ****Juego del Número Secreto****

## ****¡Bienvenido al juego Número Secreto!****

Esta es una aplicación web interactiva desarrollada en JavaScript donde el jugador debe adivinar un número aleatorio generado por el sistema dentro de un rango determinado.

📋 Tabla de Contenidos

\-Descripción del Proyecto

\-✨ Funcionalidades

\-🛠️ Tecnologías Utilizadas

\-📁 Estructura del Proyecto

\-🧠 Arquitectura y Lógica del Juego

\-🚀 Cómo Ejecutar el Proyecto

\-👤 Autor

  

🎮 Descripción del Proyecto:

El Juego del Número Secreto desafía al jugador a adivinar un número generado aleatoriamente. Durante la partida, el juego proporciona retroalimentación en tiempo real indicando si el número secreto es mayor o menor que el valor ingresado, además de contabilizar el número de intentos requeridos para ganar.

✨ Funcionalidades:

Generación aleatoria sin repetición: Genera números entre 1 y 10 asegurando que un mismo número no se vuelva a sortear hasta agotar las combinaciones.

Pistas dinámicas: Indica si el número secreto es mayor o menor según el intento realizado

.Contador de intentos: Registra y despliega el número de intentos empleados para acertar.

Manejo de estado inicial y reinicio: Habilita y deshabilita controles según el estado de la partida para permitir jugar múltiples rondas.

Limpieza automática de entradas: Restablece la caja de texto tras cada intento para mejorar la experiencia de usuario.

  

🛠️ Tecnologías UtilizadasHTML5: Define la interfaz y estructura de la página del juego (index.html). -CSS3: Proporciona los estilos visuales y el diseño de la interfaz (style.css).

\- JavaScript (ES6): Implementa la lógica del juego, manipulación del DOM y generación aleatoria.

\-(app.js).

  

📁 Estructura del Proyecto:

El proyecto está organizado con la siguiente estructura de archivos  

Plaintextjuego-numero-secreto/
│
├── index.html      # Página del juego (Game page)
├── style.css       # Hojas de estilo (Page styling)
└── app.js          # Lógica principal del juego (Game logic)
```[cite: 1]

---

## 🧠 Arquitectura y Lógica del Juego

La arquitectura del sistema divide la interacción en componentes clave[cite: 1]:

* **Lógica del Juego (`app.js`):** Lee y actualiza la página HTML (`index.html`) e interactúa con el generador de números aleatorios[cite: 1].
* **Página del Juego (`index.html`):** Renderiza los elementos de la interfaz donde el jugador ingresa sus respuestas[cite: 1].
* **Estilos (`style.css`):** Aplica la apariencia gráfica a la página[cite: 1].
* **Jugador (`Player`):** Interactúa con la página enviando sus intentos[cite: 1].

### Funciones Principales (`app.js`)

1. **`generarNumeroAleatorio()`**: Genera un entero aleatorio entre 1 y `numeroMax` (10). Si el número generado ya está en la lista de sorteados, utiliza recursividad para obtener uno nuevo. Cuando se completan todas las opciones, muestra un mensaje indicando que se agotaron los números.
2. **`verificarIntento()`**: Compara el número introducido por el usuario con el número secreto, actualiza la interfaz con pistas o mensajes de victoria, incrementa el contador de intentos y habilita el botón de reinicio al acertar.
3. **`condicionesIniciales()` & `reiniciarJuego()`**: Restablecen el contador de intentos, seleccionan un nuevo número secreto y reconfiguran los botones del DOM.

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/samysierradv/juego-numero-secreto.git
   ```[cite: 1]

2. **Acceder al directorio del proyecto:**
   ```bash
   cd juego-numero-secreto
   ```[cite: 1]

3. **Ejecutar el juego:**
   Abre el archivo `index.html` en cualquier navegador web de tu preferencia[cite: 1].

---

## 👤 Autor

* **Samy Sierra** - [@samysierradv](https://github.com/samysierradv)[cite: 1]
