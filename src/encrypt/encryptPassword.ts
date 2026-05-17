import crypto from 'crypto'

export async function encryptPassword(password: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      process.env.ENCRYPT_SALT as string,
      parseInt(process.env.ENCRYPT_ITERATIONS as string),
      parseInt(process.env.ENCRYPT_KEY_LENGTH as string),
      process.env.ENCRYPT_DIGEST as string,
      (err, hashedInput) => {
        if (err) {
          reject(err)
        }

        return resolve(hashedInput)
      })
  })
}
