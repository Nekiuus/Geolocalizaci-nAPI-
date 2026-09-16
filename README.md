<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# Geolocalizaci-nAPI-
# Geolocalización de IPs

Aplicación desarrollada con React, TypeScript y Vite que consulta información geográfica de cinco direcciones IP usando la API de ip-api.com.

## Requisitos

- Node.js 20.19 o superior
- npm
- Navegador web moderno
- Conexión a Internet

## Instalación

1. Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

2. Entrar en la carpeta:

cd booking2

3. Instalar las dependencias:

npm install

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

npm run dev

Después, abrir la dirección que muestra Vite, normalmente:

http://localhost:5173

## Comandos disponibles

- npm install
  Instala todas las dependencias del proyecto.

- npm run dev
  Inicia el servidor de desarrollo.

- npm run build
  Compila el proyecto para producción.

- npm run preview
  Permite previsualizar la versión compilada.

- npm run lint
  Revisa el código en busca de errores de formato o calidad.

## Funcionalidades

- Consulta información de cinco direcciones IP.
- Muestra país, ciudad, región y zona horaria.
- Incluye estados de carga, error, sin resultados y éxito.
- Permite filtrar resultados con un retraso de 400 milisegundos.
- Permite seleccionar una ubicación para ver sus detalles.
- Permite marcar y desmarcar ubicaciones como favoritas.
- Guarda los favoritos en localStorage.
- Permite reintentar la consulta sin recargar la página.
- Usa un proxy de Vite para comunicarse con ip-api.com y evitar problemas de CORS.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS
- API ip-api.com
- localStorage
>>>>>>> 635a9ebc88c1136402497a8832331470049355c7
