export default class CreateClientes {
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }

    async execute(data) {
        const { documento, nombre, email, whatsapp } = data;

        // Validaciones básicas
        if (!documento || !nombre || !email || !whatsapp) {
            throw new Error("Faltan datos obligatorios: documento, nombre, email o whatsapp");
        }

        const nuevoCliente = {
            documento,
            nombre,
            email,
            whatsapp
        };

        // Guardar en el repositorio (MongoDB)
        return await this.clientesRepository.create(nuevoCliente);
    }
}
