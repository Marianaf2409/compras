import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, //Nuevo parser de URL  de Mongodb
            useUnifiedTopology: true // Nuevo motor de monitoreo de servidores
        });
        console.log("Conectado a la base de datos");
    } catch (error) {   
        console.log("Error de conexion",error);
        process.exit(1);//finaliza la ejecución si falla la connexión
    }
};