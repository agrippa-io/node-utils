import crypto from 'crypto'

export async function encryptPassword(password) {

  console.log('**********************************************')
  console.log('ENCRYPT_SALT:', process.env.ENCRYPT_SALT ?? '*** EMPTY ***')
  console.log('ENCRYPT_ITERATIONS:', process.env.ENCRYPT_ITERATIONS ?? '*** EMPTY ***')
  console.log('ENCRYPT_KEY_LENGTH:', process.env.ENCRYPT_KEY_LENGTH ?? '*** EMPTY ***')
  console.log('ENCRYPT_DIGEST:', process.env.ENCRYPT_DIGEST ?? '*** EMPTY ***')
  console.log('**********************************************')

  crypto.pbkdf2(
    password,
    process.env.ENCRYPT_SALT,
    parseInt(process.env.ENCRYPT_ITERATIONS),
    parseInt(process.env.ENCRYPT_KEY_LENGTH),
    process.env.ENCRYPT_DIGEST,
    (err, hashedInput) => {
      if (err) {
        console.log('ERROR - Failed to encrypt password')
        throw err
      }

      console.log('**********************************************')
      console.log(`hashedInput[password: '${password}']`, hashedInput.toString())
      console.log('**********************************************')

      return hashedInput
    })
}
