# Sistema de Seguimiento de Beneficiarios y Proyectos de Cooperación

## Descripción

El Sistema de Seguimiento de Beneficiarios y Proyectos de Cooperación es una aplicación web desarrollada para facilitar la gestión, control y monitoreo de beneficiarios y proyectos sociales. El sistema permite centralizar la información, mejorar la trazabilidad de los beneficiarios y optimizar la toma de decisiones mediante estadísticas y reportes.

Actualmente, muchas organizaciones gestionan esta información de forma manual o mediante hojas de cálculo, lo que genera duplicidad de datos, pérdida de información y dificultades para medir el impacto de los proyectos. Esta solución busca resolver dichas problemáticas mediante una plataforma segura y organizada.

---

## Integrantes

- María Luisa Carolina Méndez de León
- Roberto Monterroso

---

## Tecnologías Utilizadas

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Neon Database)
- JWT (JSON Web Token)
- Express Validator

### Frontend

- React
- Axios
- React Router DOM
- Bootstrap / Tailwind CSS

### Herramientas de Desarrollo

- Visual Studio Code
- Git
- GitHub
- Thunder Client

---

## Arquitectura del Sistema

El proyecto sigue una arquitectura basada en MVC (Modelo - Vista - Controlador), permitiendo una adecuada separación de responsabilidades y facilitando el mantenimiento y escalabilidad del sistema.

### Estructura del Backend

```text
backend/
│
├── controllers/
├── services/
├── routes/
├── middleware/
├── validators/
├── prisma/
├── server.js
└── package.json
```

### Flujo General

```text
Usuario
   │
   ▼
Frontend (React)
   │
   ▼
API REST (Express)
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

## Funcionalidades Implementadas

### Gestión de Usuarios

- Registro de usuarios
- Inicio de sesión
- Autenticación mediante JWT
- Control de acceso por roles

### Gestión de Beneficiarios

- Crear beneficiarios
- Consultar beneficiarios
- Actualizar beneficiarios
- Eliminar beneficiarios
- Validación de DPI único
- Filtros y búsquedas

### Gestión de Proyectos

- Crear proyectos
- Consultar proyectos
- Actualizar proyectos
- Eliminar proyectos
- Filtros por estado
- Búsquedas por nombre

### Dashboard

- Total de proyectos
- Total de beneficiarios
- Proyectos activos
- Proyectos finalizados

---

## Requisitos Previos

Antes de ejecutar el proyecto es necesario contar con:

- Node.js v20 o superior
- Git
- PostgreSQL o cuenta en Neon Database

Verificar instalación:

```bash
node -v
npm -v
git --version
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/mendezdeleonluisacarolina952-star/sistema-cooperacion
```

### 2. Ingresar al directorio

```bash
cd SISTEMA-COOPERACION
```

### 3. Instalar dependencias

```bash
npm install
```

---

## Configuración

Crear un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
DATABASE_URL="postgresql://usuario:password@host/base_de_datos?sslmode=require"

JWT_SECRET=miclavesupersegura

PORT=3000
```

---

## Configuración de Prisma

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

Generar Prisma Client:

```bash
npx prisma generate
```

---

## Ejecución del Proyecto

Modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en:

```text
http://localhost:3000
```

---

## Endpoints Principales

### Autenticación

#### Iniciar Sesión

```http
POST /api/auth/login
```

#### Registrar Usuario

```http
POST /api/auth/register
```

---

### Beneficiarios

```http
GET    /api/beneficiarios
POST   /api/beneficiarios
GET    /api/beneficiarios/:id
PUT    /api/beneficiarios/:id
DELETE /api/beneficiarios/:id
```

---

### Proyectos

```http
GET    /api/proyectos
POST   /api/proyectos
GET    /api/proyectos/:id
PUT    /api/proyectos/:id
DELETE /api/proyectos/:id
```

---

### Dashboard

```http
GET /api/dashboard
```

---

## Seguridad

La autenticación se implementa mediante JWT (JSON Web Token).

Las rutas protegidas requieren el envío del token en el encabezado:

```http
Authorization: Bearer TOKEN
```

El sistema valida la autenticidad del token antes de permitir el acceso a los recursos protegidos.

---

## Estrategia de Control de Versiones

El proyecto utiliza Git y GitHub siguiendo una estrategia basada en ramas:

```text
main
develop
feature/*
```

Ejemplos:

```text
feature/jwt-security
feature/dashboard-reports
feature/validations
feature/frontend
```

---

## Pruebas Realizadas

Se realizaron pruebas funcionales utilizando Thunder Client para validar:

- Registro de usuarios
- Inicio de sesión
- Generación de JWT
- Acceso a rutas protegidas
- CRUD de beneficiarios
- CRUD de proyectos
- Dashboard
- Validaciones
- Filtros y búsquedas

---

## Despliegue

### Backend

- Render
- Railway

### Frontend

- Vercel

---

## Licencia

Proyecto académico desarrollado para el curso de Ingeniería de Software de la Universidad Mariano Gálvez de Guatemala.
