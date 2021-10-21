import getFilenames from './getFilenames'

const DEFAULT_OPTIONS = {
  isDefaultModule: true,
  asLastNode: true,
}

export interface InterfaceOptionsMapMethodsFromSiblingFiles {
  isDefaultModule?: boolean
  asLastNode?: boolean
}

export default (path: string, options: InterfaceOptionsMapMethodsFromSiblingFiles = DEFAULT_OPTIONS) => {
  const _options: InterfaceOptionsMapMethodsFromSiblingFiles = {
    ...DEFAULT_OPTIONS,
    ...options,
  }
  const { isDefaultModule, asLastNode } = _options
  const filenames: string[] = getFilenames(path, { excludeExtension: true })

  return filenames.reduce((acc: any, filename: string) => {
    const methodName: string = asLastNode ? filename.split('.').pop() : filename

    if (methodName !== 'index') {
      const _path = `${path}/${filename}`

      acc[methodName] = isDefaultModule ? require(_path).default : require(_path)
    }

    return acc
  }, {})
}
