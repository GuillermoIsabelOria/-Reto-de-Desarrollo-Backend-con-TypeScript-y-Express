import { Router, Request, Response } from 'express';
import pool from '../config/database';
import { Especie } from '../interfaces/Especie';
import { RowDataPacket } from 'mysql2';

const router: Router = Router();

/**
 * GET /api/datos
 * Devuelve todas las especies de pesca almacenadas en la base de datos.
 * Los resultados están tipados con la interface Especie (sin usar 'any').
 */
router.get('/datos', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consultamos la tabla 'especies' y tipamos el resultado
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM especies');

    // Mapeamos los rows a nuestro tipo Especie
    const especies: Especie[] = rows.map((row) => ({
      id: row.id as number,
      nombre: row.nombre as string,
      nombre_cientifico: row.nombre_cientifico as string,
      peso_minimo_kg: parseFloat(row.peso_minimo_kg),
      cebo_favorito: row.cebo_favorito as string,
      temporada: row.temporada as string,
      activo: Boolean(row.activo),
    }));

    res.status(200).json({
      success: true,
      total: especies.length,
      data: especies,
    });
  } catch (error: unknown) {
    const mensaje =
      error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({
      success: false,
      message: 'Error al obtener las especies de la base de datos',
      error: mensaje,
    });
  }
});

export default router;
