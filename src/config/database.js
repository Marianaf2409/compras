// Importamos Mongoose para conectarnos a MongoDB
import mongoose from "mongoose";

// Función asíncrona para conectar a la base de datos
const connectDB = async () => {
  try {
    // Intentamos conectar a MongoDB usando la URI del .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,      // Nuevo parser de URL de MongoDB (recomendado)
      useUnifiedTopology: true    // Nuevo motor de monitoreo de servidores (recomendado)
    });

    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1); // Finaliza la ejecución si falla la conexión
  }
};

// Exportamos la función para usarla en app.js
export default connectDB;
