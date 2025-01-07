import express from 'express';
import { usuarioController } from '../controllers/usuarioController';
const router = express.Router();
router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);
export default router;