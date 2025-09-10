// Importamos Mongoose para conectarnos a MongoDB
import mongoose from "mongoose";

// Función asíncrona para conectar a la base de datos
const connectDB = async () => {
    try {
        // Intentamos conectar a MongoDB usando la URI del .env
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,      // Nuevo parser de URL de MongoDB (opción recomendada)
            useUnifiedTopology: true    // Nuevo motor de monitoreo de servidores (opción recomendada)
        });

        // Mensaje de éxito si la conexión se realiza correctamente
        console.log("Conectado a la base de datos");
    } catch (error) {
        // En caso de error, mostramos el error en la consola
        console.log("Error de conexión", error);
        // Finaliza la ejecución de la aplicación si no se puede conectar
        process.exit(1);
    }
};

// Exportamos la función para usarla en server.js
export default connectDB;
