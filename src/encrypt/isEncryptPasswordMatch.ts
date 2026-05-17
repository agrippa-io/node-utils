import crypto from 'crypto'
import { encryptPassword } from 'src/encrypt/encryptPassword'

export async function isEncryptPasswordMatch(rawPassword: string, encryptedPassword: Buffer) {
  const rawPasswordEncrypted = await encryptPassword(rawPassword)

  return crypto.timingSafeEqual(rawPasswordEncrypted, encryptedPassword)
}
