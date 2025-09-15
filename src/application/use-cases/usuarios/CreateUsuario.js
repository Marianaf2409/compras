export default class CreateUsuario {
  constructor(usuarioRepositoryMongo) {
    this.usuarioRepositoryMongo = usuarioRepositoryMongo;
  }

  async execute(usuarioData) {
    return await this.usuarioRepositoryMongo.create(usuarioData);
  }
}
