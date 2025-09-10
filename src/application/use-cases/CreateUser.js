class CreateCompra {
    constructor(compraRepository) {
        this.compraRepository = compraRepository;
    }

    async execute(compraData) {
        // Aquí podrías agregar validaciones o lógica de negocio
        return await this.compraRepository.create(compraData);
    }
}

export default CreateCompra;
