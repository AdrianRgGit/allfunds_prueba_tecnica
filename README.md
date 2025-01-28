# Noticiario - Prueba Técnica

## Índice:
- [Resumen](#resumen)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Requisitos](#requisitos)
- [Cómo utilizar el proyecto](#cómo-utilizar-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Mejoras implantadas](#mejoras-implantadas)
- [Mejoras Futuras](#mejoras-futuras)
- [Observaciones](#observaciones)
- [Notas](#notas)

## Resumen
Este proyecto es una prueba técnica fullstack en la cuál hay que realizar una web dónde muestra una lista de noticias con sus elementos a los usuarios. Los usuarios pueden interactuar con estas archivando, borrando o publicando nuevas.

## Teconlogías utilizadas
### Frontend
- Lenguaje: **TypeScript**
- Framework: **React (vanilla)**
- Framework de estilos: **TailwindCSS**
- Manejador de estados globales: **Zustand**
- Herramienta de desarrollo: **Vite**
- Librerías adicionales: **Axios** (peticiones http), **Formik** y **YuP** (validaciones y envío de formularios), **Framer-Motion** (animaciones), **Lucide** (iconos), **React-router** (enrutados).

### Backend
- Lenguaje: **Node.JS (JavaScript)**
- Servidor: **Express**
- Base de datos: **MongoDB**
- ORM: **Mongoose**

### Testing
- Test: **Jest**
- Test peticiones http: **Supertest**

## Funcionalidades
### Frontend
- La aplicación consta de dos vistas:
  1. **News (Home)**:
     - Mostrar todas las noticias que no estén archivadas verticalmente, ordenadas por fecha de creación de más reciente a más antigua.
     - Cada noticia debe tener un botón **Archivar** que:
       - Mueva la noticia a la vista **Archived**.
       - La elimine de la vista **News (Home)**.
  2. **Archived**:
     - Mostrar todas las noticias archivadas, ordenadas por fecha de archivo de más reciente a más antigua.
     - Cada noticia debe tener un botón **Eliminar** que elimine la noticia de la base de datos.

### Backend
El esquema de la colección **news** tiene el siguiente formato:

```bash
{
    _id: String (asignado automáticamente al crear un elemento),
    title: String,
    description: String,
    content: String,
    author: String,
    archiveDate: Date,
    __v: Number (creado automáticamente),
    createdAt: Date,
    updatedAt: Date
}
```

Se han realizado los siguientes endpoints para poder interactuar con la base de datos (el puerto es el que asigno automáticamente en mi aplicación, si configuras otro en el .env editarlo):

**GET getallnews**

Obtener todas las noticias que no tengan fecha de archivado (paginado de 5 en 5):
```bash
http://localhost:5000/api/news/getallnews?page=1
```

**GET getarchivednews**

Obtener todas las noticias que tengan fecha de archivado (paginado de 5 en 5):
```bash
http://localhost:5000/api/news/getarchivednews?page=1
```

**POST createnew**

Crear una nueva noticia. Al no tener autentificación en esta aplicación se pondrá por defecto "Anónimo" como autor:
```bash
http://localhost:5000/api/news/createnew
```

**PUT archivenew**

Archivar una noticia pasando su id por parámetros:
```bash
http://localhost:5000/api/news/archivenew/:id
```

**DELETE deletenew**

Eliminar una noticia pasando su id por parámetros:
```bash
http://localhost:5000/api/news/deletenew/:id
```

## Cómo utilizar el proyecto
1. Clona el repositorio
```bash
git clone https://github.com/AdrianRgGit/allfunds_prueba_tecnica.git
```

2. Instalar dependencias (FRONTEND)
```bash
cd news-frontend
npm i
```

3. Instalar dependencias (BACKEND)
```bash
cd news-backend
npm i
```

4. Conectarse con la base de datos:
En el backend hay un archivo llamado example.env, cambiarle el nombre a .env (eliminando el example) y rellenar los campos con los datos que adjunto en el correo.

5. Crear los seeds para poblar la base de datos.
```bash
npm run seed-news
```

6. Lanzar el servidor (FRONTEND)
```bash
cd news-frontend
npm run dev
```

7. Lanzar el servidor (BACKEND)
```bash
cd news-backend
npm run dev
```

8. Acceder a la ruta
```bash
http://localhost:5173/
```

## Estructura del proyecto
```bash
allfunds_prueba_tecnica/
├── news-backend/
│   ├── src/
│   │   ├── controllers (funcionalidades de los endpoints)
│   │   ├── models (modelo colección news)
|   |   ├── routes (rutas de los endpoints)
|   |   ├── seeds (seeder de news)
|   |   └── tests (testing de los endpoints)
│   ├── .gitignore
│   ├── example.env
│   ├── package.json
│   └── package-lock.json
├── news-frontend/
│   ├── public/ (favicon de la aplicación)
│   ├── src/
│   │   ├── app/ (elementos esenciales para la app)
│   │   ├── components/ (componentes individuales)
|   |   ├── layout/ (plantilla que comparte toda la app)
|   |   ├── pages/ (vistas de la aplicación)
|   |   ├── store/ (lógica de estado global y funciones)
|   |   ├── types/ (tipado de los componentes, datos, páginas...)
|   |   └── utils/ (funciones de utilidad general, constantes...)
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── package.json
|   |  
|   (archivos de configuración de ts, vite...)
└── README.md
```

## Mejoras implantadas
Debido a que era un poco libre a la hora de realizar la prueba técnica, he implantado un par de mejoras que no se requerían o no se daban a conocer.

### Frontend
He utilizado Zustand para gestionar el estado global de la aplicación. Esto no era un requerimiento, pero creo que para trabajar con react es esencial contar con una librería como esta.

### Backend
He realizado las peticiones GET con paginación para mejorar el rendimiento de la aplicación. Se que no era necesario pero para peticiones con muchos datos la optimización de la web puede verse afectada negativamente.

He implantado un testing básico para los endpoints del back.

## Mejoras futuras
- Utilizar otro framework que complemente a React como NextJS
- Realizar testing en el front y profundizar más en los hechos en el back.
- Implantar más funcionalidades a la web, como poder editar noticias, desarchivar noticias, reestablecer noticias que has borrado sin querer...
- Implantar autentificación de usuarios para saber quien publica las noticias y que se les guarde las archivadas.
- Darle dos vueltas al diseño.
- Y más cosas que se me puedan ocurrir...

## Observaciones
En general, la aplicación en sí con lo que te pide el enunciado es sencilla de hacer, lo mínimo que se pedía era algo simple y rápido de implementar. Lo que me gusta de este tipo de pruebas es que siempre te motiva a ir un paso más allá, incorporar más conocimientos y hacerla lo mejor posible. Me hubiese gustado añadir más cosas, pero al ser una prueba técnica, a veces menos es más, y no quiero desviarme demasiado del enunciado. Aún así, creo que lo que añadí de forma opcional debería ser esencial en cualquier aplicación mínimamente funcional.

¡Muchas gracias por la oportunidad!

## Notas
He optado por Vite como herramienta de construcción para un desarrollo más rápido y eficiente.

He utilizado Axios para realizar las peticiones HTTP de manera más sencilla.

He utilizado TailwindCSS y Motion para mejorar el estilo de los elementos y lograr un diseño más dinámico y atractivo.

He usado Mongoose para interactuar con la base de datos MongoDB de forma sencilla y eficiente, aprovechando sus modelos y esquemas para gestionar los datos.
