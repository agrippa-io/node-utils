"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilenames_1 = __importDefault(require("./getFilenames"));
const DEFAULT_OPTIONS = {
    isDefaultModule: true,
    asLastNode: true,
};
exports.default = (path, options = DEFAULT_OPTIONS) => {
    const _options = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    const { isDefaultModule, asLastNode } = _options;
    const filenames = (0, getFilenames_1.default)(path, { excludeExtension: true });
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