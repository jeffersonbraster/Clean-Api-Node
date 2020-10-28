export class ServerError extends Error {
  constructor () {
    super('Error interno do servidor, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
