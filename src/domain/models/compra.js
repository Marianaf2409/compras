class Compra {
    constructor({ cliente, telefono, fecha, items, domicilio, direccion, total }) {
        this.cliente = cliente;
        this.telefono = telefono;
        this.fecha = fecha;
        this.items = items; // [{ producto, cantidad, precio }]
        this.domicilio = domicilio;
        this.direccion = direccion; // { calle, ciudad }
        this.total = total;
    }
}

export default Compra;
