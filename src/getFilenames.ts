import * as fs from 'fs'

interface InterfaceGetFilenamesOptions {
  excludeExtension: boolean
}

const DEFAULT_OPTIONS: InterfaceGetFilenamesOptions = { excludeExtension: false }

export default (source: string, options: InterfaceGetFilenamesOptions = DEFAULT_OPTIONS) => {
  const dirents: fs.Dirent[] = fs.readdirSync(source, { withFileTypes: true })

  const allFilenames: string[] = dirents
    .filter((dirent: fs.Dirent) => !dirent.isDirectory())
    .map((dirent: fs.Dirent) => dirent.name)

  const removedSourceMaps: string[] = allFilenames.filter((filename) => !filename.match(/.map$/))

  const resultFilenames: string[] = options.excludeExtension
    ? removedSourceMaps.map(removeExtension)
    : removedSourceMaps

  return resultFilenames
}

function removeExtension(str: string) {
  const extensions: string[] = str.split('.')

  if (extensions.length > 1) {
    extensions.pop()
  }

  return extensions.join('.')
}
