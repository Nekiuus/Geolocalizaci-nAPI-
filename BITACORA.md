# Bitacora individual de trabajo

**Integrante:** Sebastian Garzon Gonzalez

Esta bitacora registra mi trabajo individual y los commits realizados en el repositorio.

## 2026-09-16 - Proyecto inicial

- Requisito o tarea: Construccion inicial de la aplicacion.
- Que hice: Desarrolle la primera version funcional del proyecto en `src/App.tsx`. Inclui la consulta a la API de geolocalizacion, los estados de la interfaz, la busqueda, el detalle, los favoritos y el reintento.
- Con que me trabe: Al inicio fue necesario entender como organizar la llamada a la API y manejar los datos en React con TypeScript.
- Como lo resolvi: Revise la estructura del componente y probe la aplicacion con el servidor de desarrollo.
- Archivos modificados: `src/App.tsx` y los archivos iniciales del proyecto.
- Commit relacionado: `first commit`.
- Pruebas realizadas: Ejecute la aplicacion con Vite y comprobe que la funcionalidad principal se mostrara en el navegador.

## 2026-09-16 - Documentacion inicial

- Requisito o tarea: Actualizar la documentacion del proyecto.
- Que hice: Actualice el `README.md` con la descripcion del proyecto, los requisitos, la instalacion, los comandos disponibles y las funcionalidades.
- Con que me trabe: El README tenia contenido de plantilla que no describia la aplicacion.
- Como lo resolvi: Reemplace la informacion generica por instrucciones especificas del proyecto de geolocalizacion.
- Archivos modificados: `README.md`.
- Commit relacionado: `Update README with project details and instructions`.
- Pruebas realizadas: Revise que los comandos y las instrucciones del README correspondieran al proyecto.

## 2026-09-18 - Componentes y README

- Requisito o tarea: Organizar la aplicacion en componentes y actualizar la documentacion.
- Que hice: Separe el trabajo en cinco componentes: `SearchBar`, `StatusMessage`, `LocationList`, `LocationCard` y `LocationDetail`. Tambien actualice nuevamente el `README.md`.
- Con que me trabe: Fue necesario decidir que responsabilidad debia tener cada componente y que props necesitaba recibir.
- Como lo resolvi: Deje los estados y la logica principal en `App.tsx`, y pase a los componentes la informacion y las funciones mediante props tipadas.
- Archivos modificados: `src/App.tsx`, `src/components/`, `src/types/` y `README.md`.
- Commit relacionado: `Componentes y README`.
- Pruebas realizadas: Ejecute `npm run build` y comprobe que la aplicacion compilara correctamente.
