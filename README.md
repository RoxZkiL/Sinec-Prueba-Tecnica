# Proyecto de Blog API y Cliente

Este proyecto consta de dos partes: una API REST desarrollada con Node.js y Express, y una aplicación frontend en React para interactuar con la API y estilos de Material-UI.

## Parte 1: API REST en Node.js con Express

### Requisitos

- **Node.js** (versión recomendada: 16.x o superior)

### Configuración y Ejecución

**Iniciar el servidor:**

npm install

npm start

Esto iniciará la API en http://localhost:3000.

**Endpoints Disponibles:**

Listar todas las publicaciones o crear una nueva publicación:

GET /api/posts/
POST /api/posts/
Obtener detalles de una publicación específica:
GET /api/posts/:id/

## Parte 2: Iniciar el cliente en React

### Configuración y Ejecución

npm install

npm run dev

Esto iniciará la aplicación en http://localhost:8000.

**Rutas Disponibles:**

/posts: Muestra los títulos de los posts. Cada título es un enlace a la vista de detalles.
Detalles de una publicación:

/posts/:id: Muestra todos los detalles del post con el ID dado. Si el ID no existe, muestra una página de error 404.
Crear una nueva publicación:

/posts/create Muestra un formulario para crear un nuevo post. Los campos del formulario incluyen:

Título (title)
Contenido (content)
Autor (author)

Una vez creado el post, redirige a la vista de detalles del nuevo post. El formulario incluye validación básica para asegurarse de que todos los campos están completos.

### Notas

-Asegúrate de que la API esté en funcionamiento antes de iniciar el cliente frontend.
