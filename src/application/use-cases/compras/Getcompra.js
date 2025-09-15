export default class getCompra {
    constructor(CompraRepositoryMongo) {
      this.CompraRepositoryMongo = CompraRepositoryMongo;
    }
  
    async execute() {
      return await this.CompraRepositoryMongo.findAll();
    }
}