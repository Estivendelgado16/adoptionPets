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
| auth.model.js        | ✅     | Schema Mongoose (`id` numérico auto-incrementado, username, email, phone, password) |
| auth.repository.js   | ✅     | `findByEmail()`, `findByUsername()`, `createUser()`, `findById(id)`, `findLastUserId()` |
| auth.service.js      | ✅     | `registerUser()` (hashing, validación, auto-incremento de ID, errores específicos), `loginUser()` (comparación de contraseña, generación de JWT) |
| auth.controller.js   | ✅     | `register` (201), `login` (200), ambos con try/catch y `next(err)` |
| auth.routes.js       | ✅     | `POST /register`, `POST /login` |

#### Seguridad y Middlewares
| Archivo                          | Estado | Detalles |
|----------------------------------|--------|----------|
| shared/middlewares/authMiddleware.js | ✅ | `protectRoute`: extrae token del header, verifica JWT, busca usuario por ID, adjunta a `req.user` |
| shared/middlewares/errorHandler.js   | ✅ | Middleware global que procesa `AppError`, errores de Mongoose (duplicados, validación, cast), y errores no controlados |
| shared/errors/AppError.js            | ✅ | Clases: `AppError`, `BadRequestError` (400), `UnauthorizedError` (401), `NotFoundError` (404) |

#### Configuración General
| Archivo             | Estado | Detalles |
|---------------------|--------|----------|
| index.js            | ✅     | Punto de entrada. Conecta DB, monta rutas (`/api/pets`, `/api/stories`, `/api/auth`), middleware de logging y errores |
| shared/database/connection.js | ✅ | Conexión a MongoDB Atlas/local con dotenv, eventos de conexión, manejo de errores |
| seed.js             | ✅     | Poblado de base de datos con pets (2) y stories (4) con datos de Unsplash, IDs numéricos |
| .env                | ✅     | Variables `URI` y `JWT_SECRET` |
| package.json        | ✅     | Dependencias: express, mongoose, cors, dotenv, bcryptjs, jsonwebtoken |
| app.js              | ❌     | Archivo vacío, sin uso |

---

## 🔌 Endpoints del API (Backend)

| Método | Ruta                | Descripción | Protegida |
|--------|---------------------|-------------|-----------|
| GET    | `/api/pets`         | Lista todas las mascotas | ❌ |
| GET    | `/api/pets/:id`     | Mascota por ID numérico | ❌ |
| GET    | `/api/stories`      | Lista todas las historias | ❌ |
| GET    | `/api/stories/:id`  | Historia por ID numérico | ❌ |
| POST   | `/api/auth/register`| Registro de usuario (auto-incrementa id) | ❌ |
| POST   | `/api/auth/login`   | Inicio de sesión (retorna user + JWT token) | ❌ |

---

## 📝 Tareas pendientes

### Frontend (Prioridad Alta)
| Prioridad | Tarea | Notas |
|-----------|-------|-------|
| 🔴 Alta | Formulario de Login | UI para iniciar sesión, guardar token, consumir `/api/auth/login` |
| 🔴 Alta | Formulario de Registro | UI para registrar usuario, consumir `/api/auth/register` |
| 🔴 Alta | Manejo de sesión | Guardar token en localStorage, adjuntar a headers en requests autenticados |
| 🟡 Media | Proteger rutas del Frontend | Redirigir a login si no hay token |
| 🟡 Media | Mostrar errores de auth al usuario | Consumir `errorHandler` del backend para mostrar mensajes claros |

### Backend (Prioridad Baja)
| Prioridad | Tarea | Notas |
|-----------|-------|-------|
| 🟢 Baja | Proteger rutas del Backend | Aplicar `protectRoute` a rutas sensibles (ej: futuro POST /api/pets) |
| 🟢 Baja | Mejorar Seed Data | Añadir más mascotas e historias para pruebas |
| 🟢 Baja | Limpiar `app.js` | Archivo vacío, eliminar o reutilizar |

---

## 💻 Stack Tecnológico

- **Frontend:** React 19, Vite 8, React Router 7, MUI 9, Bootstrap 5
- **Backend:** Express 5, Mongoose 9, bcryptjs, jsonwebtoken, dotenv
- **Base de datos:** MongoDB Atlas / Local
- **Paquetería:** pnpm
