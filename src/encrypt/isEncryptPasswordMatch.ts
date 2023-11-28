import crypto from 'crypto'
import { encryptPassword } from './encryptPassword'

export async function isEncryptPasswordMatch(rawPassword, encryptedPassword) {
  const rawPasswordEncrypted = await encryptPassword(rawPassword)

  return crypto.timingSafeEqual(rawPasswordEncrypted, encryptedPassword)
}
