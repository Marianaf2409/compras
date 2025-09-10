/**
 * Clase que representa el caso de uso para crear una compra.
 * Encapsula la lógica de negocio necesaria antes de guardar una compra en la base de datos.
 */
class CreateCompra {
    /**
     * Crea una instancia del caso de uso CreateCompra.
     * @param {Object} compraRepository - Repositorio para manejar las operaciones de la entidad Compra.
     */
    constructor(compraRepository) {
        this.compraRepository = compraRepository;
    }

    /**
     * Ejecuta la creación de una nueva compra.
     * Aquí se puede agregar lógica de validación o reglas de negocio antes de guardar la compra.
     * @param {Object} compraData - Objeto con los datos de la compra a crear.
     * @param {string} compraData.cliente - Nombre del cliente.
     * @param {string} compraData.telefono - Teléfono del cliente.
     * @param {Date} [compraData.fecha] - Fecha de la compra. Por defecto se usa la fecha actual.
     * @param {Array<Object>} compraData.items - Lista de productos comprados.
     * @param {string} compraData.items[].producto - Nombre del producto.
     * @param {number} compraData.items[].cantidad - Cantidad comprada.
     * @param {number} compraData.items[].precio - Precio unitario del producto.
     * @param {boolean} compraData.domicilio - Indica si la compra es con entrega a domicilio.
     * @param {Object} compraData.direccion - Dirección de entrega.
     * @param {string} compraData.direccion.calle - Calle de la dirección.
     * @param {string} compraData.direccion.ciudad - Ciudad de la dirección.
     * @param {number} compraData.total - Total de la compra.
     * @returns {Promise<Object>} La compra creada en la base de datos.
     */
    async execute(compraData) {
        // Aquí podrías agregar validaciones o lógica de negocio
        return await this.compraRepository.create(compraData);
    }
}

export default CreateCompra;
