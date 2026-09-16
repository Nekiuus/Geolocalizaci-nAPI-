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
