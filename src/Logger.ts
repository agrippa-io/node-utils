const ENVIRONMENT = process.env.NODE_ENV
const NODE_ENV = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
}

const isProduction = ENVIRONMENT === NODE_ENV.PRODUCTION
const isTest = ENVIRONMENT === NODE_ENV.TEST
const shouldLog = !isProduction && !isTest

export default class Logger {
  static error(...messages: any[]) {
    if (!isTest) {
      console.log(`ERROR - `, ...messages)
    }
  }

  static info(...messages: any[]) {
    if (shouldLog) {
      console.log(`INFO  - `, ...messages)
    }
  }

  static debug(...messages: any[]) {
    if (shouldLog) {
      console.log(`DEBUG - `, ...messages)
    }
  }

  static route(...messages: any[]) {
    if (shouldLog) {
      console.log(`ROUTE - `, ...messages)
    }
  }

  static usecase(...messages: any[]) {
    if (shouldLog) {
      console.log(`USECASE - `, ...messages)
    }
  }

  static warn(...messages: any[]) {
    if (shouldLog) {
      console.log(`WARN  - `, ...messages)
    }
  }
}
