"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEncryptPasswordMatch = isEncryptPasswordMatch;
const crypto_1 = __importDefault(require("crypto"));
const encryptPassword_1 = require("../encrypt/encryptPassword");
async function isEncryptPasswordMatch(rawPassword, encryptedPassword) {
    const rawPasswordEncrypted = await (0, encryptPassword_1.encryptPassword)(rawPassword);
    return crypto_1.default.timingSafeEqual(rawPasswordEncrypted, encryptedPassword);
}
