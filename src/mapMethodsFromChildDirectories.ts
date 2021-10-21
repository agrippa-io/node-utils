import Logger from './Logger'
import getDirectoryNames from './getDirectoryNames'

export default (path: string, isDefaultModule = true) => {
  const directoryNames: string[] = getDirectoryNames(path)

  if (!directoryNames.length) {
    return {}
  }

  return directoryNames.reduce((acc: any, folderName: string) => {
    const _path = `${path}/${folderName}`

    try {
      acc[folderName] = isDefaultModule ? require(_path).default : require(_path)
    } catch (err) {
      Logger.error(`Failed to load dependency at path: ${_path}`)
    }

    return acc
  }, {})
}
