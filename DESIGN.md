---
name: Harrison Rengifo Marin Portfolio
description: Portafolio web de ingeniería con acentos verdes, tipografía local y temas claro y oscuro.
colors:
  forest-accent-dark: "hsl(150, 69%, 61%)"
  forest-accent-dark-hover: "hsl(150, 57%, 53%)"
  canvas-dark: "hsl(150, 28%, 12%)"
  surface-dark: "hsl(150, 29%, 16%)"
  title-dark: "hsl(150, 8%, 95%)"
  text-dark: "hsl(150, 8%, 78%)"
  muted-dark: "hsl(150, 8%, 68%)"
  rule-dark: "rgba(196, 226, 207, .16)"
  grid-dark: "rgba(75, 214, 150, .075)"
  grid-major-dark: "rgba(75, 214, 150, .13)"
  forest-accent-light: "#027a48"
  forest-accent-light-hover: "#02623a"
  canvas-light: "#e6ece8"
  surface-light: "#f0f4f0"
  title-light: "#111a15"
  text-light: "#29352e"
  muted-light: "#536159"
  rule-light: "rgba(22, 48, 34, .16)"
  grid-light: "rgba(2, 122, 72, .08)"
  grid-major-light: "rgba(2, 122, 72, .12)"
  technology-bg-dark: "rgba(53, 205, 123, .14)"
  technology-border-dark: "rgba(83, 226, 149, .34)"
  technology-text-dark: "#a8edc2"
  technology-bg-light: "#def3e7"
  technology-border-light: "#a3d7b6"
  technology-text-light: "#0f5b38"
typography:
  display:
    fontFamily: "Sora, Onest, sans-serif"
    fontSize: "clamp(2.9rem, 7.1vw, 5.55rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0"
  headline:
    fontFamily: "Onest, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  title:
    fontFamily: "Sora, Onest, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0"
  body:
    fontFamily: "Onest, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "DM Mono, Consolas, monospace"
    fontSize: ".7rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  xs: "2px"
  sm: "3px"
  md: "4px"
  image-inset-frame: "8px"
  technology: "6px"
  project-image: "12px"
  portrait: "14px"
spacing:
  xs: ".35rem"
  sm: ".7rem"
  md: "1rem"
  lg: "1.8rem"
  section: "clamp(5rem, 9vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.forest-accent-dark}"
    textColor: "{colors.canvas-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: ".7rem 1.1rem"
    height: "46px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest-accent-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: ".7rem 1.1rem"
    height: "46px"
  project-stack-chip:
    backgroundColor: "{colors.technology-bg-dark}"
    textColor: "{colors.technology-text-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.technology}"
    padding: ".24rem .58rem"
---

# Design System: Harrison Rengifo Marin Portfolio

## Overview

**Creative North Star: "Cuaderno de Campo Web"**

El sistema presenta el trabajo como una secuencia de notas de ingeniería: una retícula tenue establece el papel, una línea vertical y reglas finas ordenan el recorrido, y los títulos marcan cada sección. El verde identifica acciones y detalles de navegación; el contenido y las imágenes de los proyectos conservan el protagonismo. La misma estructura cambia entre superficies verde-negras y claras, sin cambiar su gramática.

La composición es editorial y abierta, no una colección de paneles: encabezado horizontal, introducción amplia, muestras de proyectos con imagen y texto, y rutas de contacto separadas por reglas. Sora aporta contraste geométrico a títulos; Onest mantiene cómoda la lectura; DM Mono queda reservada a metadatos y stacks de tecnologías. El tema oscuro es el inicial y la elección se conserva entre visitas. La retícula y los separadores son los recursos de profundidad; no hay resplandor ni gradientes decorativos en la superficie activa.

**Key Characteristics:**
- Verde como acento persistente en tema oscuro y claro.
- Superficies planas, retícula verde de dos escalas y divisores de un píxel.
- Tipografía geométrica para títulos, sans local para lectura y mono para metadatos.
- Movimiento breve ligado a hover y entrada en viewport, con respeto a movimiento reducido.

## Colors

La paleta conserva un acento verde vivo en oscuro y lo cambia por un verde bosque profundo en claro; fondos, texto y reglas se recalibran por tema para sostener contraste.

### Primary
- **Verde menta de acción:** el acento oscuro marca el nombre, enlaces, foco, estados activos y botones primarios; su tono alternativo se usa en hover.
- **Verde bosque de acción:** reemplaza al acento en tema claro y mantiene la misma función; su tono alternativo resuelve el hover.

### Neutral
- **Carbón verde:** fondo de página oscuro; la superficie oscura se reserva para controles o contenidos que sí necesitan una base diferenciada.
- **Gris verdeado claro:** fondo del tema claro; las superficies usan un tono apenas más luminoso, sin llegar al blanco puro.
- **Texto de título y lectura:** los tonos casi blancos y grises verdosos del tema oscuro se sustituyen por tinta y gris verdoso oscuro en tema claro.
- **Texto secundario:** tonos atenuados para descripciones, navegación inactiva y datos auxiliares.
- **Regla y retícula:** líneas verdes tenues de `44px` y líneas mayores cada `220px` ordenan el fondo; los divisores de contenido se mantienen en un píxel.
- **Etiquetas de tecnología:** relleno esmeralda tenue y texto verde claro en oscuro; en claro, relleno verde pálido y tinta bosque para conservar el contraste.

### Named Rules
**The Green Across Themes Rule.** El verde sigue señalando acción en ambos temas; cambia su valor para conservar legibilidad, no su función.

## Typography

**Display Font:** Sora (con Onest y sans-serif como fallback)  
**Body Font:** Onest (con Segoe UI y sans-serif como fallback)  
**Label/Mono Font:** DM Mono (con Consolas y monospace como fallback)

**Character:** Sora dibuja encabezados compactos y seguros; Onest suaviza la lectura continua. DM Mono aporta una voz técnica deliberadamente limitada a metadatos breves y stacks de tecnologías.

### Hierarchy
- **Display** (600, `clamp(2.9rem, 7.1vw, 5.55rem)`, `1.02`): nombre principal; se ajusta con el ancho y se limita a unas doce letras de ancho para controlar el bloque.
- **Headline** (600, `clamp(1.1rem, 2vw, 1.45rem)`, `1.4`): profesión bajo el nombre.
- **Title** (600, `clamp(2rem, 4vw, 3rem)`, `1.15`): encabezados de proyectos y contacto; los títulos de proyecto bajan a una escala fluida propia.
- **Body** (400, `1rem`, `1.65`; descripciones `1.8`): biografía y texto corrido; las descripciones se limitan a `68ch`.
- **Label** (500, `.7rem`, `1.2`, espaciado `0`): metadatos y etiquetas mono; las tecnologías usan `.72rem` con peso 400.

**The Three-Voice Rule.** Reserva Sora para jerarquía, Onest para lectura y DM Mono para metadatos breves; no conviertas el texto corrido en una interfaz monoespaciada.

## Layout

El contenido se centra en un ancho máximo de `1160px`, con gutters de `48px` y margen automático; a `380px` o menos, el gutter baja a `32px`. La navegación permanece horizontal y sticky en todos los tamaños: mide `74px` en escritorio y `66px` hasta `760px`. Una regla vertical tenue acompaña el eje del contenido; las secciones usan padding fluido (`clamp(5rem, 9vw, 8rem)`).

Por encima de `760px`, la introducción usa dos columnas con proporción aproximada `1.28fr / .72fr`; el retrato conserva formato `4:5`. Los proyectos se presentan como filas `16:10` con imagen y texto, alternando el segundo proyecto. Hasta `760px`, la introducción y cada proyecto pasan a una columna, y el retrato queda centrado bajo el texto. Contacto pasa de tres columnas a filas compactas de icono, datos y acción; bajo `380px`, la acción baja debajo de los datos para evitar desbordamiento. El documento admite un viewport mínimo de `320px` y recorta overflow horizontal.

**The Rule-Not-Card Rule.** La estructura se marca con líneas y espacio; no encierres cada proyecto o método de contacto en una tarjeta redondeada.

## Elevation & Depth

La superficie activa es plana en reposo. La profundidad viene de la retícula de fondo, reglas, contraste entre temas y movimiento de imágenes/proyectos, no de sombras apiladas. El botón de tema y las filas de proyecto no tienen sombra efectiva; los estados elevan el contenido mediante traslación, escala o cambio de color.

### Named Rules
**The Flat-at-Rest Rule.** No añadas sombras a reposo para simular jerarquía; usa superficie, regla y espaciado. Reserva el movimiento visible para respuestas de interacción.

## Shapes

La geometría combina controles precisos con medios más amables: etiquetas tecnológicas usan `6px`, capturas e imágenes de proyecto `12px`, el retrato `14px`, su marco interior `8px` y los botones mantienen `4px`. Las imágenes recortan con `object-fit: cover`; el retrato mantiene `4:5` y los proyectos `16:10`. Evita píldoras exageradas, círculos decorativos y contenedores con radios amplios. Los divisores son líneas de `1px`, no bordes que enmarquen cada bloque.

## Components

### Buttons
- **Shape:** rectángulo de esquinas discretas (`4px`), altura mínima `46px`, padding `.7rem 1.1rem` y espacio para icono cuando existe.
- **Primary:** fondo verde de acción y texto tomado del fondo del tema; hover cambia al verde alternativo y eleva `2px`.
- **Hover / Focus:** transición de color y transformación en `.2s`; foco visible de `2px` con offset de `4px`.
- **Ghost:** transparente con texto y borde verde; hover toma la superficie del tema y el color de título.

### Cards / Containers
- **Proyectos:** no son tarjetas visuales; cada fila comienza con una regla superior, espacio interior y fondo transparente. La imagen usa marco fino y hover escala hasta `1.025`.
- **Contacto:** filas sin fondo ni radio, separadas por regla superior; icono verde, título Sora y datos secundarios.
- **GitHub:** el bloque de datos inicia con una regla superior y fondo transparente.

### Navigation
La barra horizontal permanece arriba, con logotipo textual a la izquierda, enlaces centrados y control cuadrado de tema a la derecha. Enlaces inactivos usan texto secundario; hover y sección activa aumentan contraste y revelan una línea inferior animada. El control de tema mide `42px` (`38px` hasta `760px`) y alterna entre las paletas guardando la selección. En pantallas estrechas la navegación sigue horizontal y reduce gaps y tamaño tipográfico; no cambia a dock inferior ni a menú desplegable en la superficie activa.

### Project Rows
Cada fila combina captura recortada con radios de `12px` y texto; la segunda invierte el orden en escritorio. Los stacks son etiquetas DM Mono con relleno, borde y texto esmeralda, adaptados a cada tema. En hover, el proyecto se desplaza hacia arriba y la imagen aumenta levemente; el puntero puede añadir tilt de hasta aproximadamente `2deg` por eje. La tercera fila es un marcador de proyecto en desarrollo, con imagen esquemática y etiqueta mono, no una tarjeta de caso terminado.

### Contact Rows
En escritorio, tres métodos se disponen como columnas alineadas a la izquierda. En móvil cada método se convierte en una fila con icono, nombre y dato, y la acción al costado; bajo `380px`, la acción ocupa una línea propia.

### Motion and States
Los elementos revelables entran con opacidad y desplazamiento al acercarse al viewport; los elementos posteriores reciben retrasos breves. En `prefers-reduced-motion: reduce`, se desactivan desplazamiento suave, transiciones y animaciones, y el tilt no se aplica. `:focus-visible` mantiene un contorno verde claramente separado del control.

## Do's and Don'ts

### Do:
- **Do** conservar los dos temas y asignar el verde a acciones y énfasis en ambos.
- **Do** usar divisores finos, retícula de baja intensidad y jerarquía tipográfica para organizar secciones.
- **Do** mantener los tres roles tipográficos en sus funciones observadas.
- **Do** permitir que imágenes, títulos y acciones fluyan a una columna hasta `760px` y verificar el ajuste a `320px`.
- **Do** conservar foco visible y movimiento reducido en nuevos controles interactivos.

### Don't:
- **Don't** convertir las filas de proyecto y contacto en paneles con sombra y radios grandes.
- **Don't** usar DM Mono para párrafos ni inventar etiquetas técnicas para rellenar espacios.
- **Don't** aplicar glow, gradientes saturados o adornos tipo dashboard: no forman parte de la superficie activa.
- **Don't** eliminar la persistencia del tema o cambiar el papel semántico del verde entre temas.
