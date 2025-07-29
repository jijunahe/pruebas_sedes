Proyecto Técnico: Laravel + React con Docker
Este proyecto consiste en una aplicación fullstack con un backend en Laravel y un frontend en React, ambos orquestados mediante Docker y Docker Compose.


/raíz
│
├── backend_laravel/
│   └── Código del backend (Laravel)
│
├── frontend_react/
│   └── Código del frontend (React con Vite)
│
└── docker-compose.yml


Requisitos

1.Docker

2.Docker Compose

3.Git


git clone https://github.com/jijunahe/pruebas_sedes.git
cd pruebas_sedes

Levantar el contenedor
-docker-compose up -d --build

Esto levantará:
-Un contenedor con Laravel (app)
-Un contenedor con React (frontend)


Acceso a la aplicación
Frontend (React): http://localhost:3000
Backend (Laravel API): http://localhost:5173
