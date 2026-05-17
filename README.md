# @agrippa-io/node-utils

Shared Node.js utilities for the Agrippa platform.

## Exports

| Export | Description |
| ------ | ----------- |
| `Logger` | Console logger with `error` / `info` / `debug` / `warn` / `route` / `usecase` levels, gated by `NODE_ENV`. |
| `getController` | Loads a directory of modules keyed by camelCased filename. |
| `getDirectoryNames` | Lists subdirectory names of a path. |
| `getFilenames` | Lists filenames of a path, optionally without extensions. |
| `mapMethodsFromChildDirectories` | Builds a method map from a directory's child directories. |
| `mapMethodsFromSiblingFiles` | Builds a method map from a directory's files. |
| `encryptPassword` / `isEncryptPasswordMatch` | PBKDF2 password hashing + constant-time comparison. |

## Conventions

This package follows the standard `node-service-template` TypeScript setup:

- **CommonJS** (`module: commonjs`) — extensionless relative imports, consumable by both CommonJS and ESM services.
- `tsc -p tsconfig.build.json` build; type-checked with `strict: true`.
- ESLint flat config (`eslint.config.js`) — no semicolons, single quotes.
- Tests run on Vitest (`npm test`).

## Scripts

```bash
npm run build       # tsc -> dist/
npm test            # vitest
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```
