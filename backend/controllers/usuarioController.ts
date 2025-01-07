import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
export const usuarioController = {
    // Registro de usuario
    async registro(req: Request, res: Response) {
        try {
            const { email, nombre, password } = req.body;
            // Verificar si el usuario ya existe
            const usuarioExistente = await prisma.usuario.findUnique({
                where: { email },
            });
            if (usuarioExistente) {
                return res.status(400).json({ mensaje: 'El usuario ya existe' });
            }
            // Encriptar contraseña
            const salt = await bcryptjs.genSalt(10);
            const passwordHash = await bcryptjs.hash(password, salt);
            // Crear usuario
            const usuario = await prisma.usuario.create({
                data: {
                    email,
                    nombre,
                    password: passwordHash,
                },
            });
            // Generar JWT
            const token = jwt.sign(
                { id: usuario.id },
                process.env.JWT_SECRET || 'tu_secreto_jwt_super_seguro',
                { expiresIn: '24h' }
            );
            res.status(201).json({
                token,
                usuario: {
                    id: usuario.id,
                    email: usuario.email,
                    nombre: usuario.nombre,
                },
            });
        } catch (error) {
            console.error('Error en registro:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },
    // Login de usuario
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            // Buscar usuario
            const usuario = await prisma.usuario.findUnique({
                where: { email },
            });
            if (!usuario) {
                return res.status(400).json({ mensaje: 'Usuario no encontrado' });
            }
            // Verificar contraseña
            const passwordValida = await bcryptjs.compare(password, usuario.password);
            if (!passwordValida) {
                return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
            }
            // Generar JWT
            const token = jwt.sign(
                { id: usuario.id },
                process.env.JWT_SECRET || 'tu_secreto_jwt_super_seguro',
                { expiresIn: '24h' }
            );
            res.json({
                token,
                usuario: {
                    id: usuario.id,
                    email: usuario.email,
                    nombre: usuario.nombre,
                },
            });
        } catch (error) {
            console.error('Error en login:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    },
};