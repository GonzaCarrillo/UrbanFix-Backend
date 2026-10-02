🛠️ UrbanFix - Backend API

📖 Descripción del Proyecto

UrbanFix es una plataforma diseñada para conectar a usuarios que necesitan reparaciones o mejoras en el hogar con profesionales capacitados. Este repositorio contiene el código fuente del Backend (API REST), encargado de gestionar la lógica de negocio, autenticación, manejo de usuarios, solicitudes de servicios y la persistencia de datos.

🚀 Tecnologías Utilizadas

Entorno de ejecución: Node.js

Base de Datos: PostgreSQL

ORM: Prisma

Control de Versiones: Git & GitHub

📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno local antes de iniciar:

Node.js (v16 o superior)

PostgreSQL (Instancia local corriendo)

Git

⚙️ Instalación y Configuración Local

Clonar el repositorio:

git clone https://github.com/TU_USUARIO/urbanfix-backend.git
cd urbanfix-backend


Instalar dependencias:

npm install


Configurar Variables de Entorno:
Crea un archivo .env en la raíz del proyecto basándote en el archivo .env.example:

cp .env.example .env


Asegúrate de configurar correctamente la URL de tu base de datos PostgreSQL local:

DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/urbanfix_db?schema=public"
PORT=3000


Inicializar la Base de Datos con Prisma:
Sincroniza el esquema de Prisma con tu base de datos local para crear las tablas:

npx prisma migrate dev --name init


(Opcional) Si cuentas con un archivo de seed para cargar datos iniciales:

npx prisma db seed


Levantar el servidor:

# Modo desarrollo
npm run dev

# Modo producción
npm start


📄 Contrato de API (Documentación)

La documentación exacta de las rutas, los datos que se envían (Requests) y los que se reciben (Responses) se encuentra definida en:

🔗 Documentación de la API / Contrato (Wiki/Postman/Swagger) (Reemplazar con el enlace real cuando esté listo)

🌿 Flujo de Trabajo y Ramas (Git Workflow)

Seguimos una convención estandarizada para el nombrado de ramas e issues:

feat/* : Para nuevas características (ej. feat/prisma-initial-sync)

chore/*: Para tareas de configuración o mantenimiento (ej. chore/postgres-local-setup)

docs/* : Para documentación (ej. docs/api-contract)

fix/*  : Para corrección de errores.

🏗️ Estructura del Proyecto (Diagrama de Clases)

El modelo de datos y las relaciones principales del sistema (Usuarios, Servicios, Categorías, etc.) están basados en el esquema diseñado en la Semana 1.
Consulta la carpeta /documentacion para ver el diagrama de clases completo (Diagrama_de_Clases_UrbanFix).

Desarrollado para el proyecto final de Talently Lab.
```mermaid
graph LR
    subgraph Frontend
        C[Cliente Web/App]
    end

    subgraph Backend
        R[Rutas y Endpoints]
        Ctr[Controladores]
        Svc["Servicios (Lógica de Negocio)"]
        ORM[Prisma ORM]
    end

    subgraph BD
        DB[(PostgreSQL)]
    end

    C -->|HTTP Request| R
    R --> Ctr
    Ctr --> Svc
    Svc --> ORM
    ORM -->|Queries SQL| DB
    
    DB -.->|Resultados| ORM
    ORM -.->|Modelos| Svc
    Svc -.->|Datos procesados| Ctr
    Ctr -.->|HTTP Response JSON| C
