// routes/companyRoutes.js
import express from 'express';
import { 
    getAllHead, 
    createHead, 
    updateHead, 
    deleteHead 
} from '../controllers/head.js';

const router = express.Router();

// Define routes
router.get('/', getAllHead);
router.post('/', createHead);
router.put('/:id', updateHead);
router.delete('/:id', deleteHead);

export default router;
