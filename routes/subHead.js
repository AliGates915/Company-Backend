// routes/companyRoutes.js
import express from 'express';
import { 
    getAllSubHead, 
    createSubHead, 
    updateSubHead, 
    deleteSubHead 
} from '../controllers/subHead.js';

const router = express.Router();

// Define routes
router.get('/', getAllSubHead);
router.post('/', createSubHead);
router.put('/:id', updateSubHead);
router.delete('/:id', deleteSubHead);

export default router;
