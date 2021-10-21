"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const DEFAULT_OPTIONS = { excludeExtension: false };
exports.default = (source, options = DEFAULT_OPTIONS) => {
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