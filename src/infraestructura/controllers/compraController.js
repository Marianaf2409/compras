// Importamos el repositorio de MongoDB para compras
import CompraRepositoryMongo from "../repositories/CompraRepositoryMongo.js";  
// Importamos la clase de caso de uso para crear compras
// ⚠️ Atención: aquí estás importando CreateUser, debería ser CreateCompra si es para compras
import CreateCompra from "../../application/use-cases/usuarios/CreateUsuario.js";  

// Creamos una instancia del repositorio
const compraRepository = new CompraRepositoryMongo();

// Controlador para crear una nueva compra
export const createCompra = async (req, res) => {
    try {
        // Creamos el caso de uso para crear compra y pasamos el repositorio
        const createCompraUseCase = new CreateCompra(compraRepository);
        // Ejecutamos el caso de uso con los datos del request body
        const compra = await createCompraUseCase.execute(req.body);
        // Respondemos con status 201 y el objeto creado
        res.status(201).json(compra);
    } catch (err) {
        // En caso de error, respondemos con status 400 y el mensaje de error
        res.status(400).json({ error: err.message });
    }
};

// Controlador para obtener todas las compras
export const getCompras = async (req, res) => {
    try {
        const compras = await compraRepository.findAll();
        res.json(compras);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para obtener una compra por ID
export const getCompraById = async (req, res) => {
    try {
        const compra = await compraRepository.findById(req.params.id);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json(compra);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para actualizar una compra por ID
export const updateCompra = async (req, res) => {
    try {
        const compra = await compraRepository.update(req.params.id, req.body);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json(compra);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para eliminar una compra por ID
export const deleteCompra = async (req, res) => {
    try {
        const compra = await compraRepository.delete(req.params.id);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json({ message: "Compra eliminada" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
