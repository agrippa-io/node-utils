export default class Logger {
    static error(...messages: any[]): void;
    static info(...messages: any[]): void;
    static debug(...messages: any[]): void;
    static route(...messages: any[]): void;
    static usecase(...messages: any[]): void;
    static warn(...messages: any[]): void;
}
