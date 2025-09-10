import CompraRepositoryMongo from "../repositories/CompraRepositoryMongo.js";
import CreateCompra from "../../application/use-cases/CreateUser.js";

const compraRepository = new CompraRepositoryMongo();

export const createCompra = async (req, res) => {
    try {
        const createCompraUseCase = new CreateCompra(compraRepository);
        const compra = await createCompraUseCase.execute(req.body);
        res.status(201).json(compra);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Otros endpoints
export const getCompras = async (req, res) => {
    try {
        const compras = await compraRepository.findAll();
        res.json(compras);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCompraById = async (req, res) => {
    try {
        const compra = await compraRepository.findById(req.params.id);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json(compra);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCompra = async (req, res) => {
    try {
        const compra = await compraRepository.update(req.params.id, req.body);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json(compra);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCompra = async (req, res) => {
    try {
        const compra = await compraRepository.delete(req.params.id);
        if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
        res.json({ message: "Compra eliminada" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
