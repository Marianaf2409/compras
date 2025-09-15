// Importamos Mongoose para manejar MongoDB
import mongoose from "mongoose";

// Definimos el esquema de MongoDB para los clientes
const clientesSchema = new mongoose.Schema({
    documento: { type: String, required: true, unique: true }, // Documento único
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true }
});

// Creamos el modelo de Mongoose basado en el esquema
const clientesModel = mongoose.model("clientes", clientesSchema);

// Creamos un repositorio para manejar las operaciones de la base de datos
class ClientesRepositoryMongo {
    // Crear un nuevo cliente
    async create(cliente) {
        const newCliente = new clientesModel(cliente);
        return await newCliente.save();  // Guardamos el cliente en MongoDB
    }

    // Obtener todos los clientes
    async findAll() {
        return await clientesModel.find();
    }

    // Buscar un cliente por su ID
    async findById(id) {
        return await clientesModel.findById(id);
    }

    // Actualizar un cliente por ID y devolver el documento actualizado
    async update(id, data) {
        return await clientesModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Eliminar un cliente por ID
    async delete(id) {
        return await clientesModel.findByIdAndDelete(id);
    }
}

// Exportamos el repositorio para usarlo en los controladores
export default ClientesRepositoryMongo;
