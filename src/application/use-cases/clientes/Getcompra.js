export default class getCompra {
    constructor(clientesRepositoryMongo) {
      this.clientesRepositoryMongo = clientesRepositoryMongo;
    }
  
    async execute() {
      return await this.clientesRepositoryMongo.findAll();
    }
}