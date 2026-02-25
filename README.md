# 🐟 API de Especies de Pesca

API REST desarrollada con **TypeScript**, **Express** y **MySQL** (XAMPP) para gestionar información sobre especies de pesca.

## Especies registradas

| # | Nombre  | Nombre Científico       | Peso Min. (kg) | Cebo Favorito         | Temporada         | Activo |
|---|---------|-------------------------|----------------|-----------------------|-------------------|--------|
| 1 | Mojarra | Diplodus vulgaris       | 0.300          | gusano coreano rojo   | Primavera-Verano  | ✅     |
| 2 | Sargo   | Diplodus sargus         | 0.350          | longuerones           | Otono-Invierno    | ✅     |
| 3 | Lubina  | Dicentrarchus labrax    | 0.600          | peces pequenos vivos  | Invierno          | ✅     |
| 4 | Dorada  | Sparus aurata           | 0.700          | moluscos              | Otono             | ✅     |
| 5 | Anchova | Pomatomus saltatrix     | 0.650          | peces vivos           | Verano-Otono      | ❌     |
| 6 | Caballa | Scomber scombrus        | 0.300          | peces pequenos vivos  | Primavera         | ✅     |
| 7 | Jurel   | Trachurus trachurus     | 0.400          | peces pequenos vivos  | Verano            | ✅     |

## Requisitos previos

- **Node.js** v16 o superior
- **XAMPP** con MySQL activo
- **npm**

## Instalación

1. Clonar el repositorio e instalar dependencias:
   ```bash
   cd C:\xampp\htdocs\especies-pesca-api
   npm install
   ```

2. Crear la base de datos importando el archivo SQL desde phpMyAdmin o por terminal:
   ```bash
   mysql -u root < database/especies_pesca.sql
   ```

3. Copiar `.env.example` a `.env` y ajustar las credenciales si es necesario:
   ```bash
   cp .env.example .env
   ```

4. Compilar TypeScript:
   ```bash
   npm run build
   ```

5. Arrancar el servidor:
   ```bash
   npm start
   ```

## Endpoints

| Método | Ruta         | Descripción                                      |
|--------|--------------|--------------------------------------------------|
| GET    | `/`          | Página de bienvenida en HTML                     |
| GET    | `/api/datos` | Devuelve todas las especies en formato JSON      |

## Estructura del proyecto

```
especies-pesca-api/
├── database/
│   └── especies_pesca.sql    # Script SQL con la tabla y los datos
├── src/
│   ├── config/
│   │   └── database.ts       # Pool de conexiones MySQL
│   ├── interfaces/
│   │   └── Especie.ts        # Interface TypeScript para la entidad
│   ├── routes/
│   │   └── especiesRoutes.ts # Ruta GET /api/datos
│   └── server.ts             # Archivo principal del servidor Express
├── .env.example              # Plantilla de variables de entorno
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Tecnologías

- **TypeScript** – Tipado estático
- **Express** – Framework web
- **mysql2** – Driver MySQL con soporte para promesas
- **dotenv** – Gestión de variables de entorno
- **XAMPP** – Servidor MySQL local
