/**
 * Interface que representa una especie de pesca
 * Coincide exactamente con las columnas de la tabla `especies` en MySQL
 */
export interface Especie {
  id: number;
  nombre: string;
  nombre_cientifico: string;
  peso_minimo_kg: number;
  cebo_favorito: string;
  temporada: string;
  activo: boolean;
}
