# Cyber Código - Sitio Web Oficial

Este repositorio contiene el código fuente de la landing page oficial de **Cyber Código**, una startup de desarrollo web enfocada en ofrecer soluciones digitales de alto impacto para negocios. El proyecto fue transformado desde una versión inicial a un sitio web profesional, funcional y estéticamente pulido.

## ✨ Características Principales

A continuación se detallan las mejoras y características implementadas en el proyecto:

### 🎨 Diseño y Experiencia de Usuario (UX)

-   **Modo Oscuro Integral:** Se aplicó un tema oscuro coherente en todos los componentes del sitio, asegurando una estética elegante y una legibilidad óptima en condiciones de poca luz.
-   **Fondo de Patrón Global:** El fondo de puntitos (grid pattern) se extendió a toda la página para crear una identidad visual unificada y moderna.
-   **Botones Flotantes Optimizados:**
    -   **WhatsApp:** Se mejoró el diseño del botón y se personalizó el mensaje predeterminado para facilitar el primer contacto.
    -   **Selector de Tema:** Se reubicó en el header para un acceso más intuitivo y una mejor estructura del layout.

### 🏗️ Arquitectura de Estilos y Migración

-   **SCSS Modular:** Se eliminó por completo TailwindCSS para adoptar una arquitectura de estilos basada exclusivamente en SCSS, organizando el código en módulos por componente para un mejor mantenimiento.
-   **Sintaxis Moderna:** Se actualizaron las importaciones de Sass a la sintaxis `@use`, resolviendo advertencias de deprecación y asegurando la compatibilidad futura del proyecto.

### 📱 Layout Responsivo

-   **Eliminación de Márgenes:** Se corrigió el desbordamiento horizontal y los márgenes blancos no deseados mediante un reseteo de CSS y la propiedad `overflow-x: hidden`.
-   **Contenido Centrado y Legible:** Se implementó una estructura profesional donde los fondos de sección ocupan el 100% del ancho, mientras que el contenido principal se mantiene centrado con `max-width`, garantizando una experiencia de lectura cómoda en cualquier dispositivo.
-   **Espaciado en Móviles:** Se ajustó el espaciado en las cuadrículas de tarjetas para evitar que los elementos se vean demasiado juntos en pantallas pequeñas.

### ✍️ Copywriting Estratégico

-   Se realizó una revisión completa de todos los textos del sitio (títulos, descripciones, llamadas a la acción) para comunicar de manera más efectiva la propuesta de valor de Cyber Código y proyectar una imagen más profesional y persuasiva.

### ⚙️ Configuración de Desarrollo

-   Se optimizó el script de desarrollo en `package.json` para permitir el acceso al servidor desde la red local, facilitando las pruebas en dispositivos móviles durante el desarrollo.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [SCSS/Sass](https://sass-lang.com/)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Linting:** [ESLint](https://eslint.org/)

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18.x o superior) y un gestor de paquetes como `npm` o `yarn`.

### Instalación

1.  Clona el repositorio:
    ```sh
    git clone https://github.com/joseorteha/cyberCodigo.git
    ```
2.  Navega al directorio del proyecto:
    ```sh
    cd cyberCodigo
    ```
3.  Instala las dependencias:
    ```sh
    npm install
    ```

### Ejecución

-   Para iniciar el servidor de desarrollo:
    ```sh
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

-   Para acceder desde tu red local (por ejemplo, desde tu móvil):
    ```sh
    npm run dev -- --host
    ```

## 📜 Scripts Disponibles

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Compila la aplicación para producción.
-   `npm run start`: Inicia un servidor de producción.
-   `npm run lint`: Ejecuta el linter para analizar el código.
