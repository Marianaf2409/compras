export default class GetUsuario{
    constructor(CompraRepositoryMongo) {
      this.CompraRepositoryMongo = CompraRepositoryMongo;
    }
  
    async execute(id) {
      return await this.CompraRepositoryMongo.findById(id);
    }
}