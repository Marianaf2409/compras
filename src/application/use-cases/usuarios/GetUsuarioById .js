export default class GetUsuarioById {
  constructor(usuarioRepositoryMongo) {
    this.uusuarioRepositoryMongo= usuarioRepositoryMongo;
  }

  async execute(id) {
    return await this.usuarioRepositoryMongo.findById(id);
  }
}
