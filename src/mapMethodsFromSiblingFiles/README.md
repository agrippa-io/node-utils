# mapMethodsFromSiblingFiles

Builds a method map by dynamically importing each file in a directory
(`index` is skipped). With `asLastNode` (default), the map key is the last
dot-segment of the filename.

```ts
import { mapMethodsFromSiblingFiles } from '@agrippa-io/node-utils'

const methods = await mapMethodsFromSiblingFiles('/path/to/handlers')
```
