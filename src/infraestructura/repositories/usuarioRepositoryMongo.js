import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    rol: { type: String, default: "user" },
    status: { type: Boolean, default: true }
});

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

class UsuarioRepositoryMongo {
    async create(usuario) {
        const newUsuario = new UsuarioModel(usuario);
        return await newUsuario.save();
    }

    // ✅ MODIFICADO: agregar .lean() para devolver objetos planos
    async findAll() {
        return await UsuarioModel.find().lean();
    }

    // ✅ MODIFICADO: agregar .lean() también aquí
    async findById(id) {
        return await UsuarioModel.findById(id).lean();
    }

    async update(id, data) {
        return await UsuarioModel.findByIdAndUpdate(id, data, { new: true }).lean();
    }

    async delete(id) {
        return await UsuarioModel.findByIdAndDelete(id).lean();
    }
}

export default UsuarioRepositoryMongo;
