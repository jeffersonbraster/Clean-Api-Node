import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('should return if validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalido_email@gmail.com')
    expect(isValid).toBe(false)
  })

  test('should return if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valido_email@gmail.com')
    expect(isValid).toBe(true)
  })

  test('should call validator with correcy email', () => {
    const sut = makeSut()
    const isEmailSpay = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@gmail.com')
    expect(isEmailSpay).toHaveBeenCalledWith('any_email@gmail.com')
  })
})
