import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import especiesRoutes from './routes/especiesRoutes';

dotenv.config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());


app.get('/', (_req: Request, res: Response): void => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Especies de Peces</title>
      <style>
        body { font-family: Arial, sans-serif; background: #fff; color: #000; padding: 20px; }
        a { color: #0000ee; }
      </style>
    </head>
    <body>
      <p>Especies de Peces: <a href="/api/datos">/api/datos</a></p>
    </body>
    </html>
  `);
});

app.use('/api', especiesRoutes);

app.listen(PORT, (): void => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api/datos`);
});

export default app;
