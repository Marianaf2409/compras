export default class GetUsers {
    constructor(usuarioRepositoryMongo) {
      this.usuarioRepositoryMongo = usuarioRepositoryMongo;
    }
  
    async execute() {
      return await this.usuarioRepositoryMongo.findAll();
    }
}