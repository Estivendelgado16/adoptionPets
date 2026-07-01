# 🐾 PetAdoption — Progreso del Proyecto

## 📁 Estructura General

```
pet-adoption-directory/
├── client/          → Frontend (React + Vite)
├── server/          → Backend (Express + MongoDB)
├── README.md
└── PROGRESO.md      ← Este archivo
```

---

## ✅ Módulos Completados

### 🟢 Frontend (`client/`)

| Componente        | Estado | Notas |
|-------------------|--------|-------|
| NavBar            | ✅     | Navegación principal |
| Footer            | ✅     | Pie de página |
| HeroVideo         | ✅     | Banner de inicio |
| SuccessGallery    | ✅     | Galería de historias de éxito |
| AdoptionDirectory | ✅     | Directorio de adopción con filtros |
| FilterSidebar     | ✅     | Filtros por especie, tamaño, género |
| PetGrid           | ✅     | Grid de tarjetas de mascotas |
| PetCard           | ✅     | Tarjeta individual de mascota |
| AdoptionPagination | ✅    | Paginación |
| TipCard           | ✅     | Tarjeta de consejos |
| ReportFlow        | ✅     | Flujo de reporte de mascota perdida |
| StoryCard         | ✅     | Tarjeta de historia de éxito |
| Breadcrumb        | ✅     | Migas de pan |
| PageShell         | ✅     | Layout base de páginas |
| PageHeader        | ✅     | Encabezado de página |
| Button            | ✅     | Botón reutilizable |
| **Conexión API**  | ✅     | Proxy configurado (`/api` → `localhost:3001`), fetch a `/api/pets` y `/api/stories` implementado |

---

### 🟢 Backend (`server/`)

#### Módulo Pets
| Archivo          | Estado | Detalles |
|------------------|--------|----------|
| pets.model.js    | ✅     | Schema Mongoose con `id` numérico, `toJSON` transform |
| pets.repository.js | ✅   | `findAll()`, `findById(id)` con `findOne({ id: Number(id) })` |
| pets.service.js  | ✅     | `getAllPets()`, `getPetById(id)` |
| pets.controller.js | ✅    | `getPets`, `getPetById` con try/catch |
| pets.routes.js   | ✅     | `GET /`, `GET /:id` |

#### Módulo Stories
| Archivo              | Estado | Detalles |
|----------------------|--------|----------|
| stories.model.js     | ✅     | Schema Mongoose con `id` numérico, `toJSON` transform |
| stories.repository.js | ✅    | `findAll()`, `findById(id)` con `findOne({ id: Number(id) })` |
| stories.service.js   | ✅     | `getAllStories()`, `getStoriesById(id)` |
| stories.controller.js | ✅    | `getAllStories`, `getStoriesById` con try/catch |
| stories.routes.js    | ✅     | `GET /`, `GET /:id` |

#### Módulo Auth
| Archivo              | Estado | Detalles |
|----------------------|--------|----------|
| auth.model.js        | ✅     | Schema Mongoose (`id` numérico, username, email, phone, password) |
| auth.repository.js   | ✅     | `findByEmail()`, `findByUsername()`, `createUser()` |
| auth.service.js      | ✅     | `registerUser()` (hashing, validación, errores específicos), `loginUser()` (comparación de contraseña, generación de JWT) |
| auth.controller.js   | ✅     | `register` (201), `login` (200), ambos con try/catch y `next(err)` |
| auth.routes.js       | ✅     | `POST /register`, `POST /login` |

#### Configuración General
| Archivo             | Estado | Detalles |
|---------------------|--------|----------|
| index.js            | ✅     | Punto de entrada. Conecta DB, monta rutas (`/api/pets`, `/api/stories`, `/api/auth`), middleware de logging y errores |
| shared/database/connection.js | ✅ | Conexión a MongoDB Atlas con dotenv, eventos de conexión, manejo de errores |
| shared/errors/AppError.js | ✅ | Clases de error personalizadas (`AppError`, `BadRequestError`, `UnauthorizedError`, `NotFoundError`) |
| shared/middlewares/errorHandler.js | ✅ | Middleware global de errores que procesa AppError y errores de Mongoose |
| seed.js             | ✅     | Poblado de base de datos con pets (2) y stories (4) con datos de Unsplash, uso de IDs numéricos |
| .env                | ✅     | Variables `URI` y `JWT_SECRET` |
| package.json        | ✅     | Dependencias: express, mongoose, cors, dotenv, bcryptjs, jsonwebtoken |
| app.js              | ❌     | Archivo vacío, sin uso |

---

## 🔴 Pendientes / Problemas

### 🚨 Crítico: Conexión a MongoDB Atlas
- **Error:** `MongooseServerSelectionError` al iniciar el servidor.
- **Causa probable:** Firewall de la red local (Riwi) bloqueando salida al puerto 27017.
- **Solución Sugerida:** Usar MongoDB local o revisar configuración de red/firewall.

### 📝 Tareas pendientes (Backend)

| Prioridad | Tarea | Notas |
|-----------|-------|-------|
| 🔴 Alta | Resolver conexión a BD | Cambiar URI a `mongodb://localhost:27017/petadoption` o revisar firewall |
| 🔴 Alta | Middleware de Autenticación JWT (`shared/middlewares/authMiddleware.js`) | Verificar token en header `Authorization` y adjuntar `req.user` |
| 🟡 Media | Proteger Rutas del Backend | Aplicar middleware de autenticación a rutas sensibles (ej: si añadimos POST/PUT/DELETE para mascotas) |
| 🟡 Media | Manejo de Errores en Frontend | Mostrar errores de registro/login al usuario |
| 🟢 Baja | Crear formularios Frontend (Login/Register) | Crear UI para interactuar con el API de Auth |
| 🟢 Baja | Mejorar Seed Data | Añadir más mascotas y historias para pruebas |

---

## 🔌 Endpoints del API (Backend)

| Método | Ruta                | Descripción |
|--------|---------------------|-------------|
| GET    | `/api/pets`         | Lista todas las mascotas |
| GET    | `/api/pets/:id`     | Mascota por ID numérico |
| GET    | `/api/stories`      | Lista todas las historias |
| GET    | `/api/stories/:id`  | Historia por ID numérico |
| POST   | `/api/auth/register`| Registro de usuario |
| POST   | `/api/auth/login`   | Inicio de sesión (retorna user + token) |

---

## 💻 Stack Tecnológico

- **Frontend:** React 19, Vite 8, React Router 7, MUI 9, Bootstrap 5
- **Backend:** Express 5, Mongoose 9, bcryptjs, jsonwebtoken, dotenv
- **Base de datos:** MongoDB Atlas (conectar con URI de `.env`)
- **Paquetería:** pnpm
