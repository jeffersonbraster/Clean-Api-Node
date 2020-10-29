import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('should return if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalido_email@gmail.com')
    expect(isValid).toBe(false)
  })
})
