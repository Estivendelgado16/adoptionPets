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
| **Páginas**       |        | |
| Home              | ✅     | `/` — Hero + SuccessGallery |
| About             | ✅     | `/nosotros` |
| Adoptions         | ✅     | `/adopta` — Directorio |
| Report            | ✅     | `/reportar` |
| **Conexión API**  | 🔄     | Proxy configurado (`/api` → `localhost:3001`) |

---

### 🟢 Backend (`server/`)

#### Módulo Pets
| Archivo          | Estado | Detalles |
|------------------|--------|----------|
| pets.model.js    | ✅     | Schema Mongoose (name, species, age, size, sex, image, shelterPhone, tags, status, id). Incluye `toJSON` |
| pets.repository.js | ✅   | `findAll()`, `findById(id)` con `findOne({ id: Number(id) })` |
| pets.service.js  | ✅     | `getAllPets()`, `getPetById(id)` |
| pets.controller.js | ✅    | `getPets`, `getPetById` con try/catch |
| pets.routes.js   | ✅     | `GET /`, `GET /:id` |

#### Módulo Stories
| Archivo              | Estado | Detalles |
|----------------------|--------|----------|
| stories.model.js     | ✅     | Schema Mongoose (id, petName, title, quote, image, author, location, badge, accentColor, authorAvatar). Incluye `toJSON` |
| stories.repository.js | ✅    | `findAll()`, `findById(id)` con `findOne({ id: Number(id) })` |
| stories.service.js   | ✅     | `getAllStories()`, `getStoriesById(id)` |
| stories.controller.js | ✅    | `getAllStories`, `getStoriesById` con try/catch |
| stories.routes.js    | ✅     | `GET /`, `GET /:id` |

#### Módulo Auth
| Archivo              | Estado | Detalles |
|----------------------|--------|----------|
| auth.model.js        | ✅     | Schema Mongoose (username, email, phone, password) |
| auth.repository.js   | ✅     | `findByEmail()`, `findByUsername()`, `createUser()` |
| auth.service.js      | ✅     | `registerUser()` con bcrypt, validación de email/username duplicados. `loginUser()` con bcrypt.compare |
| auth.controller.js   | ✅     | `register` (201), `login` (200), ambos con try/catch |
| auth.routes.js       | ✅     | `POST /register`, `POST /login` |

#### Configuración General
| Archivo             | Estado | Detalles |
|---------------------|--------|----------|
| index.js            | ✅     | Punto de entrada. Conecta DB, monta rutas (`/api/pets`, `/api/stories`, `/api/auth`), middleware de logging y errores |
| shared/database/connection.js | ✅ | Conexión a MongoDB Atlas con dotenv, eventos de conexión, manejo de errores |
| seed.js             | ✅     | Poblado de base de datos con pets (2) y stories (4) con datos de Unsplash |
| .env                | ✅     | Variable `URI` para conexión a Atlas |
| package.json        | ✅     | Dependencias: express, mongoose, cors, dotenv, bcryptjs |
| app.js              | ❌     | Archivo vacío, sin uso |

---

## 🔴 Pendientes / Problemas

### 🚨 Crítico: Conexión a MongoDB Atlas
- **Error:** `MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster`
- **Causa probable:** Firewall de la red local (Riwi) bloqueando salida al puerto 27017
- **Solución sugerida:** Usar MongoDB local (`mongodb://localhost:27017/petadoption`) o resolver el firewall

### 📝 Tareas pendientes

| Prioridad | Tarea | Notas |
|-----------|-------|-------|
| 🔴 Alta | Resolver conexión a BD | Cambiar URI o desbloquear firewall |
| 🟡 Media | Conectar frontend al backend | AdoptionDirectory ya `fetch` a `/api/pets`; Home a `/api/stories` |
| 🟡 Media | Frontend Auth (login/register UI) | Crear formularios de login y registro |
| 🟡 Media | Manejo de errores en frontend | Mostrar errores de login/registro al usuario |
| 🟢 Baja | JWT Tokens | Implementar tokens de sesión para mantener sesión iniciada |
| 🟢 Baja | shared/errors/ | Middleware de errores personalizados |
| 🟢 Baja | shared/middlewares/ | Middlewares de autenticación y autorización |
| 🟢 Baja | Tests | Agregar pruebas unitarias/integración |
| 🟢 Baja | Más datos en seed | Agregar más mascotas e historias |

---

## 🔌 Endpoints del API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/pets` | Lista todas las mascotas |
| GET | `/api/pets/:id` | Mascota por ID numérico |
| GET | `/api/stories` | Lista todas las historias |
| GET | `/api/stories/:id` | Historia por ID numérico |
| POST | `/api/auth/register` | Registro de usuario |
| POST | `/api/auth/login` | Inicio de sesión |

---

## 💻 Stack Tecnológico

- **Frontend:** React 19, Vite 8, React Router 7, MUI 9, Bootstrap 5
- **Backend:** Express 5, Mongoose 9, bcryptjs, dotenv
- **Base de datos:** MongoDB Atlas (planeado migrar a local)
- **Paquetería:** pnpm
