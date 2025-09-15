export default class GetUsuario{
    constructor(clientesRepositoryMongo) {
      this.clientesRepositoryMongo = clientesRepositoryMongo;
    }
  
    async execute(id) {
      return await this.clientesRepositoryMongo.findById(id);
    }
}