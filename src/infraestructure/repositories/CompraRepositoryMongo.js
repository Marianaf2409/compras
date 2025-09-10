import mongoose from "mongoose";
import Compra from "../../domain/models/Compra.js";

const compraSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    fecha: { type: Date, default: Date.now },
    items: [
        {
            producto: String,
            cantidad: Number,
            precio: Number
        }
    ],
    domicilio: Boolean,
    direccion: {
        calle: String,
        ciudad: String
    },
    total: Number
});

const CompraModel = mongoose.model("Compra", compraSchema);

class CompraRepositoryMongo {
    async create(compra) {
        const newCompra = new CompraModel(compra);
        return await newCompra.save();
    }

    async findAll() {
        return await CompraModel.find();
    }

    async findById(id) {
        return await CompraModel.findById(id);
    }

    async update(id, data) {
        return await CompraModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await CompraModel.findByIdAndDelete(id);
    }
}

export default CompraRepositoryMongo;
