import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface TokenPayload {
    id: string;
}
declare global {
    namespace Express {
        interface Request {
            usuario?: TokenPayload;
        }
    }
}
export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ mensaje: 'No autorizado' });
        }
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET no está definido');
        }
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        ) as unknown as TokenPayload;
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token inválido' });
    }
};