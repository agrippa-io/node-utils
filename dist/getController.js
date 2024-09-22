import { camelCase } from 'change-case';
import getFilenames from './getFilenames';
export async function getController(path, isDefaultModule = true) {
    const filenames = getFilenames(path, { excludeExtension: true });
    return filenames.reduce(async (acc, filename) => {
        if (filename !== 'index') {
            const _path = `${path}/${filename}`;
            const methodName = camelCase(filename);
            const module = await import(_path);
            acc[methodName] = isDefaultModule ? module.default : module;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=getController.js.map