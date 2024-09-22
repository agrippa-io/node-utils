import Logger from './Logger'
import getDirectoryNames from './getDirectoryNames'

export default async (path: string, isDefaultModule = true) => {
  const directoryNames: string[] = getDirectoryNames(path)

  if (!directoryNames.length) {
    return {}
  }

  return directoryNames.reduce(async (acc: any, folderName: string) => {
    const _path = `${path}/${folderName}`

    try {
      const module = await import(_path)
      acc[folderName] = isDefaultModule ? module.default : module
    } catch (err) {
      Logger.error(`Failed to load dependency at path: ${_path}`)
    }

    return acc
  }, {})
}
