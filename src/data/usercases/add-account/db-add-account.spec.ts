import { DbAddAccount } from './db-add-account'

describe('DbAddAccount Usercase', () => {
  test('Should call Encrypter with correct password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_pass'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@gmail.com',
      password: 'valid_pass'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_pass')
  })
})
