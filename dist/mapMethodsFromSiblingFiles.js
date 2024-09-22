import getFilenames from './getFilenames';
const DEFAULT_OPTIONS = {
    isDefaultModule: true,
    asLastNode: true,
};
export default async (path, options = DEFAULT_OPTIONS) => {
    const _options = {
        ...DEFAULT_OPTIONS,
        ...options,
    };
    const { isDefaultModule, asLastNode } = _options;
    const filenames = getFilenames(path, { excludeExtension: true });
    return filenames.reduce(async (acc, filename) => {
        const methodName = asLastNode ? filename.split('.').pop() : filename;
        if (methodName !== 'index') {
            const _path = `${path}/${filename}`;
            const module = await import(_path);
            acc[methodName] = isDefaultModule ? module.default : module;
        }
        return acc;
    }, {});
};
//# sourceMappingURL=mapMethodsFromSiblingFiles.js.map