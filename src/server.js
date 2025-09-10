import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";



import {
  createCompra,
  getCompras,
  getCompraById,
  updateCompra,
  deleteCompra
} from "./infraestructure/controllers/compraController.js";

dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);


const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error(err));

// Endpoints
app.post("/compras", createCompra);
app.get("/compras", getCompras);
app.get("/compras/:id", getCompraById);
app.put("/compras/:id", updateCompra);
app.delete("/compras/:id", deleteCompra);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
