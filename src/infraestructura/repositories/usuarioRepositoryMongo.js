import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    rol: { type: String, default: "user" },
    status: { type: Boolean, default: true }
});

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

class UsuarioRepositoryMongo {
    /**
     * Crea un nuevo usuario
     * @param {Object} usuario - Datos del usuario a crear
     * @returns {Promise<Object>} Usuario creado
     */
    async create(usuario) {
        const newUsuario = new UsuarioModel(usuario);
        return await newUsuario.save();
    }

    /**
     * Obtiene todos los usuarios
     * @returns {Promise<Array>} Lista de usuarios (objetos planos)
     */
    async findAll() {
        return await UsuarioModel.find().lean();
    }

    /**
     * Busca un usuario por ID
     * @param {String} id - ID del usuario
     * @returns {Promise<Object|null>} Usuario encontrado o null
     */
    async findById(id) {
        return await UsuarioModel.findById(id).lean();
    }

    /**
     * Actualiza un usuario por ID
     * @param {String} id - ID del usuario a actualizar
     * @param {Object} data - Datos para actualizar
     * @returns {Promise<Object|null>} Usuario actualizado o null
     */
    async update(id, data) {
        return await UsuarioModel.findByIdAndUpdate(id, data, { new: true }).lean();
    }

    /**
     * Elimina un usuario por ID
     * @param {String} id - ID del usuario a eliminar
     * @returns {Promise<Object|null>} Usuario eliminado o null
     */
    async delete(id) {
        return await UsuarioModel.findByIdAndDelete(id).lean();
    }
}

export default UsuarioRepositoryMongo;
