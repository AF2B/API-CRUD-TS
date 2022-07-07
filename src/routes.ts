import { Router } from "express";
import config from 'config';
import CarController from './controllers/CarController';

const port = config.get('port') as number;
const host = config.get('host') as string;

const router = Router();

router.get('/cars', CarController.getCars)
router.get('/car/:id', CarController.getCarById)
router.post('/car', CarController.createCar)
router.put('/car/:id', CarController.updateCar)
router.delete('/car/:id', CarController.deleteCar)

export default router;