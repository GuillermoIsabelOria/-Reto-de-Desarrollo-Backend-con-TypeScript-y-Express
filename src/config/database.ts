import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

/**
 * Pool de conexiones a MySQL.
 * Las credenciales se leen desde las variables de entorno
 * definidas en el archivo .env (nunca hardcodeadas).
 */
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'especies_pesca',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
