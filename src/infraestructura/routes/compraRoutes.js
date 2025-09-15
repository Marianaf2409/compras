
import { Router } from "express"; 
import {
  createCompra,
  getCompras,
  getCompraById,
  updateCompra,
  deleteCompra
} from "../controllers/compraController.js";

const router = Router();



// Definimos las rutas de la API y asociamos los controladores
router.post("/compras", createCompra);             // Crear una nueva compra
router.get("/compras", getCompras);               // Obtener todas las compras
router.get("/compras/:id", getCompraById);        // Obtener una compra específica por ID
router.put("/compras/:id", updateCompra);         // Actualizar una compra por ID
router.delete("/compras/:id", deleteCompra);      // Eliminar una compra por ID


export default router;
