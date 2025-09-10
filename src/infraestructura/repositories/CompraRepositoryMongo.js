// Importamos Mongoose para manejar MongoDB
import mongoose from "mongoose";  
// Importamos la entidad Compra del dominio (aunque no se usa directamente aquí)  

// Definimos el esquema de MongoDB para las compras
const compraSchema = new mongoose.Schema({
    cliente: String,                 // Nombre del cliente
    telefono: String,                // Teléfono del cliente
    fecha: { type: Date, default: Date.now }, // Fecha de la compra, por defecto la fecha actual
    items: [                         // Lista de productos comprados
        {
            producto: String,       // Nombre del producto
            cantidad: Number,       // Cantidad comprada
            precio: Number          // Precio unitario
        }
    ],
    domicilio: Boolean,              // Indica si la compra es con entrega a domicilio
    direccion: {                     // Información de la dirección
        calle: String,
        ciudad: String
    },
    total: Number                    // Total de la compra
});

// Creamos el modelo de Mongoose basado en el esquema
const CompraModel = mongoose.model("Compra", compraSchema);

// Creamos un repositorio para manejar las operaciones de la base de datos
class CompraRepositoryMongo {
    // Crear una nueva compra
    async create(compra) {
        const newCompra = new CompraModel(compra);
        return await newCompra.save();  // Guardamos la compra en MongoDB
    }

    // Obtener todas las compras
    async findAll() {
        return await CompraModel.find();
    }

    // Buscar una compra por su ID
    async findById(id) {
        return await CompraModel.findById(id);
    }

    // Actualizar una compra por ID y devolver el documento actualizado
    async update(id, data) {
        return await CompraModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Eliminar una compra por ID
    async delete(id) {
        return await CompraModel.findByIdAndDelete(id);
    }
}

// Exportamos el repositorio para usarlo en los controladores
export default CompraRepositoryMongo;
