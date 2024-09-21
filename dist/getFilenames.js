import * as fs from 'fs';
const DEFAULT_OPTIONS = { excludeExtension: false };
export default (source, options = DEFAULT_OPTIONS) => {
    const dirents = fs.readdirSync(source, { withFileTypes: true });
    const allFilenames = dirents
        .filter((dirent) => !dirent.isDirectory())
        .map((dirent) => dirent.name);
    const removedSourceMaps = allFilenames.filter((filename) => !filename.match(/.map$/));
    const resultFilenames = options.excludeExtension
        ? removedSourceMaps.map(removeExtension)
        : removedSourceMaps;
    return resultFilenames;
};
function removeExtension(str) {
    const extensions = str.split('.');
    if (extensions.length > 1) {
        extensions.pop();
    }
    return extensions.join('.');
}
//# sourceMappingURL=getFilenames.js.map