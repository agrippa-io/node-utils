"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getController = void 0;
const change_case_1 = require("change-case");
const getFilenames_1 = __importDefault(require("./getFilenames"));
function getController(path, isDefaultModule = true) {
    const filenames = (0, getFilenames_1.default)(path, { excludeExtension: true });
    return filenames.reduce((acc, filename) => {
        if (filename !== 'index') {
            const _path = `${path}/${filename}`;
            const methodName = (0, change_case_1.camelCase)(filename);
            acc[methodName] = isDefaultModule ? require(_path).default : require(_path);
        }
        return acc;
    }, {});
}
exports.getController = getController;
//# sourceMappingURL=getController.js.map