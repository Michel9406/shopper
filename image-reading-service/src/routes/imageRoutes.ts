import { Router } from 'express';
import { analyzeImage, getImageInfo, processImage } from '../controllers/imageController';

const router = Router();

router.post('/analyze', analyzeImage);
router.get('/:id/info', getImageInfo);
router.post('/process', processImage);

export default router;