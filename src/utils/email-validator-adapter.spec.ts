import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  })
})

describe('EmailValidator Adapter', () => {
  test('should return if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalido_email@gmail.com')
    expect(isValid).toBe(false)
  })

  test('should return if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valido_email@gmail.com')
    expect(isValid).toBe(true)
  })
})
