"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = encryptPassword;
const crypto_1 = __importDefault(require("crypto"));
async function encryptPassword(password) {
    return new Promise((resolve, reject) => {
        crypto_1.default.pbkdf2(password, process.env.ENCRYPT_SALT, parseInt(process.env.ENCRYPT_ITERATIONS), parseInt(process.env.ENCRYPT_KEY_LENGTH), process.env.ENCRYPT_DIGEST, (err, hashedInput) => {
            if (err) {
                reject(err);
            }
            return resolve(hashedInput);
        });
    });
}
