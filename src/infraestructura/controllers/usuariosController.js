import UsuarioRepositoryMongo from "../repositories/usuarioRepositoryMongo.js";
import CreateUsuario from "../../application/use-cases/usuarios/CreateUsuario.js";
import bcrypt from "bcryptjs";

const usuarioRepository = new UsuarioRepositoryMongo();

// Crear usuario
export const createUsuario = async (req, res) => {
  try {
    const { email, password, rol, status } = req.body;
    // Hashear la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUsuarioUseCase = new CreateUsuario(usuarioRepository);
    const usuario = await createUsuarioUseCase.execute({
      email,
      password: hashedPassword,
      rol,
      status,
    });

    // Convertir documento de mongoose a objeto plano para manipularlo
    const usuarioPlano = usuario.toObject();

    // Enviar respuesta con password oculto
    res.status(201).json({
      mensaje: "Usuario creado con éxito",
      usuario: {
        ...usuarioPlano,
        password: "******"  // ocultamos la contraseña real
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    // Traer usuarios (ya viene como objeto plano por .lean())
    const usuarios = await usuarioRepository.findAll();

    // Ocultar contraseña para cada usuario antes de enviar
    const usuariosSafe = usuarios.map(u => ({
      ...u,
      password: "******"
    }));

    res.json(usuariosSafe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener usuario por ID
export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await usuarioRepository.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    // Ocultar contraseña en la respuesta
    res.json({
      ...usuario,
      password: "******"
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar usuario
export const updateUsuario = async (req, res) => {
  try {
    // Si se envía contraseña nueva, la hasheamos antes de guardar
    const { password } = req.body;
    if (password) {
      req.body.password = await bcrypt.hash(password, 10);
    }

    const usuario = await usuarioRepository.update(req.params.id, req.body);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    // Ocultar contraseña en respuesta
    res.json({
      ...usuario,
      password: "******"
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await usuarioRepository.delete(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
