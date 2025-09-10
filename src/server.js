// Importamos las librerías necesarias
import express from "express";      // Framework para crear la API
import mongoose from "mongoose";    // Librería para conectarnos a MongoDB
import dotenv from "dotenv";        // Para leer variables de entorno desde el archivo .env

// Importamos los controladores (funciones que manejan las rutas)
import {
  createCompra,
  getCompras,
  getCompraById,
  updateCompra,
  deleteCompra
} from "./infraestructure/controllers/compraController.js";

// Cargamos las variables de entorno desde .env
dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);  // Mostramos en consola la URI de MongoDB para verificar que se carga correctamente

// Creamos la aplicación de Express
const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Conexión a MongoDB usando Mongoose
mongoose.connect(process.env.MONGO_URI, {       // URI obtenida desde .env
  useNewUrlParser: true,                        // Configuración para analizar la URI correctamente
  useUnifiedTopology: true                      // Configuración para usar el nuevo motor de topología
})
.then(() => console.log("MongoDB conectado"))   // Mensaje si la conexión es exitosa
.catch(err => console.error(err));              // Mensaje de error si falla la conexión

// Definimos las rutas de la API y asociamos los controladores
app.post("/compras", createCompra);             // Crear una nueva compra
app.get("/compras", getCompras);               // Obtener todas las compras
app.get("/compras/:id", getCompraById);        // Obtener una compra específica por ID
app.put("/compras/:id", updateCompra);         // Actualizar una compra por ID
app.delete("/compras/:id", deleteCompra);      // Eliminar una compra por ID

// Configuramos el puerto donde correrá la API
const PORT = process.env.PORT || 3000;          // Si no hay variable de entorno, usa el puerto 3000
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));  // Mensaje indicando que el servidor está corriendo
