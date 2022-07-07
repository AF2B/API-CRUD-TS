import mongoose ,{ Schema } from 'mongoose';

const CarModel = new Schema({
    marca: String,
    modelo: String,
    ano: Number,
    quilometragem: Number,
    tipoCambio: String,
    preco: Number
},{timestamps: true});

export default mongoose.model('Carros', CarModel);