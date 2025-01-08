import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

interface CustomRequest extends Request {
    usuario?: {
        id: string;
    };
}

const prisma = new PrismaClient();

export const publicacionController = {
    async obtenerTodas(req: CustomRequest, res: Response) {
        try {
            const publicaciones = await prisma.publicacion.findMany({
                include: {
                    autor: {
                        select: {
                            id: true,
                            nombre: true,
                            email: true,
                        },
                    },
                    comentarios: {
                        include: {
                            autor: {
                                select: {
                                    id: true,
                                    nombre: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            res.json(publicaciones);
        } catch (error) {
            console.error('Error al obtener publicaciones:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },

    async crear(req: CustomRequest, res: Response) {
        try {
            const { titulo, contenido, categoria } = req.body;
            const autorId = req.usuario?.id;

            const publicacion = await prisma.publicacion.create({
                data: {
                    titulo,
                    contenido,
                    categoria,
                    autorId,
                },
                include: {
                    autor: {
                        select: {
                            id: true,
                            nombre: true,
                            email: true,
                        },
                    },
                },
            });

            res.status(201).json(publicacion);
        } catch (error) {
            console.error('Error al crear publicación:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },

    async agregarComentario(req: CustomRequest, res: Response) {
        try {
            const { publicacionId } = req.params;
            const { contenido } = req.body;
            const autorId = req.usuario?.id;

            const comentario = await prisma.comentario.create({
                data: {
                    contenido,
                    autorId,
                    publicacionId,
                },
                include: {
                    autor: {
                        select: {
                            id: true,
                            nombre: true,
                        },
                    },
                },
            });

            res.status(201).json(comentario);
        } catch (error) {
            console.error('Error al agregar comentario:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },
};