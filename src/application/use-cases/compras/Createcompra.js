export default class CreateCompra {
    constructor(CompraRepositoryMongo) {
      this.CompraRepositoryMongo = CompraRepositoryMongo;
    }
  
    async execute(userData) {
      return await this.CompraRepositoryMongo.create(userData);
    }
}