import { getFilenames } from 'src/getFilenames'

const DEFAULT_OPTIONS = {
  isDefaultModule: true,
  asLastNode: true,
}

export interface InterfaceOptionsMapMethodsFromSiblingFiles {
  isDefaultModule?: boolean
  asLastNode?: boolean
}

export default async (path: string, options: InterfaceOptionsMapMethodsFromSiblingFiles = DEFAULT_OPTIONS) => {
  const _options: InterfaceOptionsMapMethodsFromSiblingFiles = {
    ...DEFAULT_OPTIONS,
    ...options,
  }
  const { isDefaultModule, asLastNode } = _options
  const filenames: string[] = getFilenames(path, { excludeExtension: true })

  return filenames.reduce(async (acc: any, filename: string) => {
    const methodName: string = asLastNode ? filename.split('.').pop() ?? filename : filename

    if (methodName !== 'index') {
      const _path = `${path}/${filename}`

      const module = await import(_path)
      acc[methodName] = isDefaultModule ? module.default : module
    }

    return acc
  }, {})
}
