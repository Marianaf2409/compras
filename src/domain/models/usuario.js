import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, default: "user" },
  status: { type: Boolean, default: true }, 
});

export default mongoose.model("Usuario", usuarioSchema, "usuarios");
