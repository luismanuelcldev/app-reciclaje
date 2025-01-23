import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import usuarioRoutes from '../routes/usuarioRoutes';
import puntoReciclajeRoutes from '../routes/puntoReciclajeRoutes';
// Configuración de variables de entorno
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/puntos-reciclaje', puntoReciclajeRoutes);
// Ruta de prueba
app.get('/', (_req, res) => {
    res.json({ mensaje: 'API de Reciclaje funcionando correctamente' });
});
// Manejo de errores global
app.use((err: Error, _req: express.Request, res: express.Response) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: 'Algo salió mal!' });
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});