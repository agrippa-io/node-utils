import crypto from 'crypto'

export async function encryptPassword(password: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      process.env.ENCRYPT_SALT,
      parseInt(process.env.ENCRYPT_ITERATIONS),
      parseInt(process.env.ENCRYPT_KEY_LENGTH),
      process.env.ENCRYPT_DIGEST,
      (err, hashedInput) => {
        if (err) {
          reject(err)
        }

        return resolve(hashedInput)
      })
  })
}
