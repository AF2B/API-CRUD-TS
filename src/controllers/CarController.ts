import { Request, Response } from "express"
import CarModel from "../model/CarModel";

const CarController = {

    async getCars(req: Request, res: Response): Promise<Response> {
        
        let cars = await CarModel.find();

        return res.json(cars);
    },

    async getCarById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        let car = await CarModel.findById(id)


        return res.json(car)
    },

    async createCar(req: Request, res: Response): Promise<Response> {

        let created = await CarModel.create(req.body);

        return res.json(created);
    },

    async updateCar(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { marca, modelo, ano, quilometragem, tipoCambio, preco } = req.body;

        let car = await CarModel.findByIdAndUpdate(id, {
            
            marca: marca,
            modelo: modelo,
            ano: ano,
            quilometragem: quilometragem,
            tipoCambio: tipoCambio,
            preco: preco
            
        }).then((data) => {
            return res.status(200).json(data);
        }).catch((error) => {
            return res.status(404).json(error);
        });

        return res.json(car);
    },

    async deleteCar(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const carDeleted = await CarModel.findByIdAndDelete(id).then((data) => {
                return res.status(200).json({ message: `${id} excluido com sucesso!` });
            }).catch((error) => {
                return res.status(404).json(error);
            });
        return res.json(carDeleted);
    }
};

export default CarController;