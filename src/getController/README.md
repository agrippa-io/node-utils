# getController

Dynamically imports every file in a directory and returns them as a map keyed
by camelCased filename (`index` is skipped).

```ts
import { getController } from '@agrippa-io/node-utils'

const controller = await getController('/path/to/handlers')
```
