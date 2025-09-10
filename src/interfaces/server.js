// Importamos las librerías necesarias
import express from "express";      // Framework para crear la API
import userRoutes from "../infraestructura/routes/userRoutes.js";

// Creamos la instancia del servidor Express
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas de la API
app.use("/api/users", userRoutes);

export default app;
