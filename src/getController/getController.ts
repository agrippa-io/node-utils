import { camelCase } from 'change-case'

import { getFilenames } from 'src/getFilenames'

export async function getController(path: string, isDefaultModule = true) {
  const filenames: string[] = getFilenames(path, { excludeExtension: true })

  return filenames.reduce(async (acc: Record<string, any>, filename: string) => {
    if (filename !== 'index') {
      const _path = `${path}/${filename}`

      const methodName = camelCase(filename)

      const module = await import(_path)
      acc[methodName] = isDefaultModule ? module.default : module
    }

    return acc
  }, {})
}
