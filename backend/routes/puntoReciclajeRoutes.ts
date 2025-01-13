import { Router } from 'express';
import { puntoReciclajeController } from '../controllers/puntoReciclajeController';

const router = Router();

router.get('/puntos-reciclaje', puntoReciclajeController.obtenerTodos);
router.post('/puntos-reciclaje', puntoReciclajeController.crear);

// Export the router
export default router;