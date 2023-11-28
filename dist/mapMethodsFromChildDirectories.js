"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./Logger"));
const getDirectoryNames_1 = __importDefault(require("./getDirectoryNames"));
exports.default = (path, isDefaultModule = true) => {
    const directoryNames = (0, getDirectoryNames_1.default)(path);
    if (!directoryNames.length) {
        return {};
    }
    return directoryNames.reduce((acc, folderName) => {
        const _path = `${path}/${folderName}`;
        try {
            acc[folderName] = isDefaultModule ? require(_path).default : require(_path);
        }
        catch (err) {
            Logger_1.default.error(`Failed to load dependency at path: ${_path}`);
        }
        return acc;
    }, {});
};
//# sourceMappingURL=mapMethodsFromChildDirectories.js.map