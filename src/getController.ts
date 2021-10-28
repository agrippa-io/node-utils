import { camelCase } from 'change-case'

import getFilenames from './getFilenames'

export function getController(path: string, isDefaultModule = true) {
  const filenames: string[] = getFilenames(path, { excludeExtension: true })

  return filenames.reduce((acc: Record<string, any>, filename: string) => {
    if (filename !== 'index') {
      const _path = `${path}/${filename}`

      const methodName = camelCase(filename)

      acc[methodName] = isDefaultModule ? require(_path).default : require(_path)
    }

    return acc
  }, {})
}
