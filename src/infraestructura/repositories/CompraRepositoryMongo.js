import mongoose from "mongoose";  

// Definimos el esquema para las compras
const compraSchema = new mongoose.Schema({
    cliente: String,                 // Nombre del cliente
    telefono: String,                // Teléfono del cliente
    fecha: { type: Date, default: Date.now }, // Fecha de compra, por defecto hoy
    items: [                        // Productos comprados
        {
            producto: String,       // Nombre del producto
            cantidad: Number,       // Cantidad
            precio: Number          // Precio unitario
        }
    ],
    domicilio: Boolean,             // Si es con entrega a domicilio
    direccion: {                   // Dirección de entrega
        calle: String,
        ciudad: String
    },
    total: Number                  // Total a pagar
});

// Creamos el modelo de mongoose
const CompraModel = mongoose.model("Compra", compraSchema);

// Repositorio para hacer CRUD en la colección "Compra"
class CompraRepositoryMongo {
    // Crear una nueva compra y guardarla en la base de datos
    async create(compra) {
        const newCompra = new CompraModel(compra);
        return await newCompra.save();
    }

    // Obtener todas las compras
    async findAll() {
        return await CompraModel.find();
    }

    // Buscar compra por su ID
    async findById(id) {
        return await CompraModel.findById(id);
    }

    // Actualizar compra por ID, devolviendo el documento actualizado
    async update(id, data) {
        return await CompraModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Eliminar compra por ID
    async delete(id) {
        return await CompraModel.findByIdAndDelete(id);
    }
}

// Exportamos el repositorio para usarlo en controladores u otras capas
export default CompraRepositoryMongo;
