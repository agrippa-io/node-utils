# mapMethodsFromChildDirectories

Builds a method map by dynamically importing each child directory of a path,
keyed by directory name. Load failures are logged via `Logger` and skipped.

```ts
import { mapMethodsFromChildDirectories } from '@agrippa-io/node-utils'

const methods = await mapMethodsFromChildDirectories('/path/to/modules')
```
