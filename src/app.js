import express from "express";
import usuariosRoutes from "./infraestructura/routes/usuariosRoutes.js";
import compraRoutes from "./infraestructura/routes/compraRoutes.js";
import clientesRoutes from "./infraestructura/routes/clientesRoutes.js"; 

const app = express();
app.use(express.json());

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/compras", compraRoutes);
app.use("/api/clientes", clientesRoutes); 

export default app;
