# Geolocalizacion de IPs

Aplicacion web desarrollada con React, TypeScript y Vite. Consulta informacion geografica de 20 direcciones IP usando la API publica de ip-api.com.

## Requisitos

- Node.js 20.19 o superior
- npm
- Conexion a Internet

## Instalacion

```bash
npm install
```

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila la aplicacion para produccion.
- `npm run lint`: revisa el codigo con ESLint.
- `npm run preview`: muestra la version compilada.

## Funcionalidades

- Consulta 20 direcciones IP.
- Muestra IP, pais, ciudad, region y zona horaria.
- Distingue los estados de carga, error, sin resultados y exito.
- Filtra resultados con un retardo manual de 400 milisegundos.
- Permite abrir el detalle de una ubicacion y volver a la lista.
- Permite marcar y desmarcar favoritos.
- Guarda los favoritos en `localStorage`.
- Permite reintentar la consulta sin recargar la pagina.
- Usa un proxy de Vite para comunicarse con ip-api.com.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- API ip-api.com

Codigo de verificacion del enunciado: VRF-7QK2
