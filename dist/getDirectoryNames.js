import { readdirSync } from 'fs';
export default (source) => {
    return readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
};
//# sourceMappingURL=getDirectoryNames.js.map