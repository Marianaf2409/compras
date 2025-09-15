import { Router } from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuariosController.js";

const router = Router();

// Definimos las rutas de la API y asociamos los controladores
router.post("/", createUsuario);        // POST /api/usuarios
router.get("/", getUsuarios);           // GET /api/usuarios
router.get("/:id", getUsuarioById);     // GET /api/usuarios/:id
router.put("/:id", updateUsuario);      // PUT /api/usuarios/:id
router.delete("/:id", deleteUsuario);   // DELETE /api/usuarios/:id

export default router;

