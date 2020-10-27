export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Faltam dados: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
