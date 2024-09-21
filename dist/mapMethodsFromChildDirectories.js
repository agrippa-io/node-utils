import Logger from './Logger';
import getDirectoryNames from './getDirectoryNames';
export default (path, isDefaultModule = true) => {
    const directoryNames = getDirectoryNames(path);
    if (!directoryNames.length) {
        return {};
    }
    return directoryNames.reduce((acc, folderName) => {
        const _path = `${path}/${folderName}`;
        try {
            acc[folderName] = isDefaultModule ? require(_path).default : require(_path);
        }
        catch (err) {
            Logger.error(`Failed to load dependency at path: ${_path}`);
        }
        return acc;
    }, {});
};
//# sourceMappingURL=mapMethodsFromChildDirectories.js.map