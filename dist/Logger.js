"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ENVIRONMENT = process.env.NODE_ENV;
const NODE_ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    TEST: 'test',
};
const isProduction = ENVIRONMENT === NODE_ENV.PRODUCTION;
const isTest = ENVIRONMENT === NODE_ENV.TEST;
const shouldLog = !isProduction && !isTest;
class Logger {
    static error(...messages) {
        if (!isTest) {
            console.log(`ERROR - `, ...messages);
        }
    }
    static info(...messages) {
        if (shouldLog) {
            console.log(`INFO  - `, ...messages);
        }
    }
    static debug(...messages) {
        if (shouldLog) {
            console.log(`DEBUG - `, ...messages);
        }
    }
    static route(...messages) {
        if (shouldLog) {
            console.log(`ROUTE - `, ...messages);
        }
    }
    static usecase(...messages) {
        if (shouldLog) {
            console.log(`USECASE - `, ...messages);
        }
    }
    static warn(...messages) {
        if (shouldLog) {
            console.log(`WARN  - `, ...messages);
        }
    }
}
exports.default = Logger;
//# sourceMappingURL=Logger.js.map