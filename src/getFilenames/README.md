# getFilenames

Returns the filenames in a directory (source maps excluded). Pass
`{ excludeExtension: true }` to strip file extensions.

```ts
import { getFilenames } from '@agrippa-io/node-utils'

const names = getFilenames('/path/to/dir', { excludeExtension: true })
```
