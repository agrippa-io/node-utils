# Logger

Console logger with `error` / `info` / `debug` / `warn` / `route` / `usecase` levels.
Output is gated by `NODE_ENV`: errors always print (except under `test`); the
rest print only outside `production` and `test`.

```ts
import { Logger } from '@agrippa-io/node-utils'

Logger.info('service started')
```
