import { camelCase } from 'change-case';
import getFilenames from './getFilenames';
export function getController(path, isDefaultModule = true) {
    const filenames = getFilenames(path, { excludeExtension: true });
    return filenames.reduce((acc, filename) => {
        if (filename !== 'index') {
            const _path = `${path}/${filename}`;
            const methodName = camelCase(filename);
            acc[methodName] = isDefaultModule ? require(_path).default : require(_path);
        }
        return acc;
    }, {});
}
//# sourceMappingURL=getController.js.map