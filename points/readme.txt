# Proyecto de Banner Interactivo con Puntos Animados

## Descripción General
Este proyecto consiste en un banner interactivo con puntos animados sobre una imagen de fondo. Los puntos indican ubicaciones específicas y presentan animaciones y funcionalidades detalladas al interactuar con ellos.

## Estructura de Directorios y Archivos

- **img/**: Contiene las imágenes utilizadas en el proyecto.
  - `tiendas-de-ropa.jpg`: Imagen principal que sirve como fondo del banner.

- **points/**: Almacena los datos de los puntos de interés.
  - `initial.json`: Archivo JSON que contiene la información de los puntos que se colocarán sobre la imagen.

- **script/**: Contiene los scripts JavaScript utilizados en el proyecto.
  - `center.js`: Calcula el tamaño de la imagen en ancho y alto, determina el punto central y desplaza suavemente hasta ese punto.
  - `getDotPositions.js`: Posiciona automáticamente los puntos según el tipo y enlaza cada uno con sus animaciones, clases, funcionalidades y eventos necesarios.
  - `menu.js`: Ejecuta animaciones específicas y controla la función que muestra el menú, su contenido y comportamiento.
  - `positionClickListener.js`: Proporciona la ubicación exacta donde se hizo clic, ayudando al programador a posicionar los puntos con precisión.

- `index.html`: Archivo HTML principal que estructura el banner y contiene los scripts, la imagen y los estilos.
- `style.css`: Archivo CSS que define los estilos y animaciones detalladas para todos los elementos, asegurando que el banner sea agradable y responsivo mediante media queries.

## Instrucciones de Uso

1. **Instalación**:
   No se requiere instalación de dependencias adicionales. Simplemente abre `index.html` en tu navegador web.

2. **Ejecución**:
   - Abre `index.html` en tu navegador.
   - Interactúa con la imagen y los puntos de interés para ver las animaciones y funcionalidades.

3. **Modificación**:
   - Para agregar o modificar puntos de interés, edita `points/initial.json`.
   - Para cambiar los estilos, modifica `style.css`.
   - Para ajustar la funcionalidad, edita los scripts en el directorio `script/`.

## Ejemplos

1. La imagen `tiendas-de-ropa.jpg` servirá de fondo del banner interactivo.
2. Los puntos sobre la imagen se posicionan automáticamente según los datos de `initial.json`.
3. Interactúa con los puntos para ver animaciones y obtener más información sobre cada ubicación.

## Contacto y Contribuciones

Para preguntas o problemas, contacta a [tu correo electrónico].

Para contribuir al proyecto, por favor abre un Pull Request o contacta a [tu correo electrónico].
