export default class GetUsuarioById {
  constructor(usuarioRepositoryMongo) {
    this.usuarioRepositoryMongo= usuarioRepositoryMongo;
  }

  async execute(id) {
    return await this.usuarioRepositoryMongo.findById(id);
  }
}
