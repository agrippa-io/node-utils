import getFilenames from './getFilenames';
const DEFAULT_OPTIONS = {
    isDefaultModule: true,
    asLastNode: true,
};
export default (path, options = DEFAULT_OPTIONS) => {
    const _options = {
        ...DEFAULT_OPTIONS,
        ...options,
    };
    const { isDefaultModule, asLastNode } = _options;
    const filenames = getFilenames(path, { excludeExtension: true });
    return filenames.reduce((acc, filename) => {
        const methodName = asLastNode ? filename.split('.').pop() : filename;
        if (methodName !== 'index') {
            const _path = `${path}/${filename}`;
            acc[methodName] = isDefaultModule ? require(_path).default : require(_path);
        }
        return acc;
    }, {});
};
//# sourceMappingURL=mapMethodsFromSiblingFiles.js.map