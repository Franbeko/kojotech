import { Router } from 'express';
import healthRoutes from './health.routes.js';
import contactRoutes from './contact.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/contact', contactRoutes);

// Phase 12: router.use('/bolt', boltRoutes);

export default router;