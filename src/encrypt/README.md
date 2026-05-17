# encrypt

PBKDF2 password hashing and constant-time comparison.

- `encryptPassword(password)` — derives a key via `crypto.pbkdf2`. Reads
  `ENCRYPT_SALT`, `ENCRYPT_ITERATIONS`, `ENCRYPT_KEY_LENGTH`, `ENCRYPT_DIGEST`
  from the environment.
- `isEncryptPasswordMatch(rawPassword, encryptedPassword)` — hashes
  `rawPassword` and compares it to `encryptedPassword` in constant time.

```ts
import { encryptPassword, isEncryptPasswordMatch } from '@agrippa-io/node-utils'
```
