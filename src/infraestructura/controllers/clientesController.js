// Importamos el repositorio de MongoDB para clientes
import ClientesRepositoryMongo from "../repositories/clientesRepositoryMongo.js";  
// Importamos la clase de caso de uso para crear clientes
import CreateClientes from "../../application/use-cases/clientes/CreateClientes.js";  

// Creamos una instancia del repositorio
const clientesRepository = new ClientesRepositoryMongo();

// Controlador para crear un nuevo cliente
export const createClientes = async (req, res) => {
    try {
        const createClientesUseCase = new CreateClientes(clientesRepository);
        const clientes = await createClientesUseCase.execute(req.body);
        res.status(201).json(clientes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para obtener todos los clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await clientesRepository.findAll();
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para obtener un cliente por ID
export const getClientesById = async (req, res) => {
    try {
        const clientes = await clientesRepository.findById(req.params.id);
        if (!clientes) return res.status(404).json({ error: "Clientes no encontrado" });
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para actualizar un cliente por ID
export const updateClientes = async (req, res) => {
    try {
        const clientes = await clientesRepository.update(req.params.id, req.body);
        if (!clientes) return res.status(404).json({ error: "Clientes no encontrado" });
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para eliminar un cliente por ID
export const deleteClientes = async (req, res) => {
    try {
        const clientes = await clientesRepository.delete(req.params.id);
        if (!clientes) return res.status(404).json({ error: "Clientes no encontrado" });
        res.json({ message: "Clientes eliminado" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
