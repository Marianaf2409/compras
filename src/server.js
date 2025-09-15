import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Puerto en el que se ejecutará el servidor (por defecto 3000)
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos MongoDB usando Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,      // Usar el nuevo parser de URL de MongoDB
  useUnifiedTopology: true,   // Usar el nuevo motor de gestión de servidores
})
.then(() => {
  console.log("Conectado a MongoDB");

  // Iniciar el servidor solo si la conexión a la base de datos es exitosa
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  // Mostrar error si falla la conexión a MongoDB
  console.error("Error conectando a MongoDB:", err.message);
});
