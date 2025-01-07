import { Request, Response, NextFunction } from 'express';

export const puntoReciclajeController = {
    obtenerTodos: async (req: Request, res: Response, next: NextFunction) => {
        try {
            // Lógica para obtener todos los puntos de reciclaje
            res.json({ message: 'Obtener todos los puntos de reciclaje' });
        } catch (error) {
            next(error);
        }
    },
    crear: async (req: Request, res: Response, next: NextFunction) => {
        try {
            // Lógica para crear un nuevo punto de reciclaje
            res.json({ message: 'Crear un nuevo punto de reciclaje' });
        } catch (error) {
            next(error);
        }
    }
};