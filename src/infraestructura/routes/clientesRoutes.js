import { Router } from "express";
import {
  createClientes,
  getClientes,
  getClientesById,
  updateClientes,
  deleteClientes
} from "../controllers/clientesController.js";

const router = Router();

// Definimos las rutas sin /clientes porque ya está en app.js
router.post("/", createClientes);        // Crear un nuevo cliente
router.get("/", getClientes);            // Obtener todos los clientes
router.get("/:id", getClientesById);     // Obtener un cliente específico por ID
router.put("/:id", updateClientes);      // Actualizar un cliente por ID
router.delete("/:id", deleteClientes);   // Eliminar un cliente por ID

export default router;
