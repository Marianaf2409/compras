import "dotenv/config.js";
import connectDB  from "./config/database.js";
import app from "./interfaces/server.js";


       // Si no hay variable de entorno, usa el puerto 3000
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));  // Mensaje indicando que el servidor está corriendo
});