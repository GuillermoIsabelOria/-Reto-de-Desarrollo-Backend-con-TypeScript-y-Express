-- ==============================================
-- Base de datos: Especies de Pesca
-- Proyecto: especies-pesca-api
-- ==============================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS especies_pesca
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_spanish_ci;

USE especies_pesca;

-- ==============================================
-- Tabla: especies
-- ==============================================
DROP TABLE IF EXISTS especies;

CREATE TABLE especies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL COMMENT 'Nombre común de la especie',
  nombre_cientifico VARCHAR(150) NOT NULL COMMENT 'Nombre científico de la especie',
  peso_minimo_kg DECIMAL(6,3) NOT NULL COMMENT 'Peso minimo en kilogramos',
  cebo_favorito VARCHAR(100) NOT NULL COMMENT 'Cebo favorito para pescar esta especie',
  temporada VARCHAR(50) NOT NULL COMMENT 'Mejor temporada de pesca',
  activo TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 = disponible para pesca, 0 = veda/protegida'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- ==============================================
-- Insertar 7 registros de especies de pesca
-- ==============================================
INSERT INTO especies (nombre, nombre_cientifico, peso_minimo_kg, cebo_favorito, temporada, activo) VALUES
  ('Mojarra',  'Diplodus vulgaris',    0.300, 'gusano coreano rojo',    'Primavera-Verano',  1),
  ('Sargo',    'Diplodus sargus',      0.350, 'longuerones',            'Otono-Invierno',    1),
  ('Lubina',   'Dicentrarchus labrax', 0.600, 'peces pequenos vivos',   'Invierno',          1),
  ('Dorada',   'Sparus aurata',        0.700, 'moluscos',               'Otono',             1),
  ('Anchova',  'Pomatomus saltatrix',  0.650, 'peces vivos',            'Verano-Otono',      0),
  ('Caballa',  'Scomber scombrus',     0.300, 'peces pequenos vivos',   'Primavera',         1),
  ('Jurel',    'Trachurus trachurus',  0.400, 'peces pequenos vivos',   'Verano',            1);
