export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Dados invalidos: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
