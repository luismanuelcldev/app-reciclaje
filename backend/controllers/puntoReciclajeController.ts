import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();
export const puntoReciclajeController = {
    // Obtener todos los puntos de reciclaje
    async obtenerTodos(req: Request, res: Response) {
        try {
            const puntosReciclaje = await prisma.puntoReciclaje.findMany();
            res.json(puntosReciclaje);
        } catch (error) {
            console.error('Error al obtener puntos de reciclaje:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },
    // Crear punto de reciclaje
    async crear(req: Request, res: Response) {
        try {
            const { nombre, direccion, latitud, longitud, materiales, horario } = req.body;
            const puntoReciclaje = await prisma.puntoReciclaje.create({
                data: {
                    nombre,
                    direccion,
                    latitud,
                    longitud,
                    materiales,
                    horario,
                },
            });
            res.status(201).json(puntoReciclaje);
        } catch (error) {
            console.error('Error al crear punto de reciclaje:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },
};