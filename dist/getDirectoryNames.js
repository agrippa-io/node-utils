"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (source) => {
    return (0, fs_1.readdirSync)(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
};
//# sourceMappingURL=getDirectoryNames.js.map