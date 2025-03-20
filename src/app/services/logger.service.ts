import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogLevel } from '../models/log-level';

/**
 * Logger service for application-wide logging
 * Provides formatted, consistent logging with control over log levels
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private level: LogLevel =
    environment.logLevel ||
    (environment.production ? LogLevel.ERROR : LogLevel.TRACE);

  constructor() {
    this.info('Logger Service', 'Initialized');
  }

  /**
   * Sets the current log level
   * @param level LogLevel to set
   */
  setLogLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Logs error messages
   * @param source Source of the log (class/component name)
   * @param message Message to log
   * @param data Optional data to include
   */
  error(source: string, message: string, data?: any): void {
    this.logWith(LogLevel.ERROR, source, message, data);
  }

  /**
   * Logs warning messages
   * @param source Source of the log (class/component name)
   * @param message Message to log
   * @param data Optional data to include
   */
  warn(source: string, message: string, data?: any): void {
    this.logWith(LogLevel.WARN, source, message, data);
  }

  /**
   * Logs info messages
   * @param source Source of the log (class/component name)
   * @param message Message to log
   * @param data Optional data to include
   */
  info(source: string, message: string, data?: any): void {
    this.logWith(LogLevel.INFO, source, message, data);
  }

  /**
   * Logs debug messages
   * @param source Source of the log (class/component name)
   * @param message Message to log
   * @param data Optional data to include
   */
  debug(source: string, message: string, data?: any): void {
    this.logWith(LogLevel.DEBUG, source, message, data);
  }

  /**
   * Logs trace messages
   * @param source Source of the log (class/component name)
   * @param message Message to log
   * @param data Optional data to include
   */
  trace(source: string, message: string, data?: any): void {
    this.logWith(LogLevel.TRACE, source, message, data);
  }

  /**
   * Internal method to log with specified level
   * @param level Log level
   * @param source Source of the log
   * @param message Message to log
   * @param data Optional data to include
   */
  private logWith(
    level: LogLevel,
    source: string,
    message: string,
    data?: any
  ): void {
    if (this.level < level) {
      return;
    }

    const timestamp = new Date().toISOString();
    const logLevelString = LogLevel[level];
    const formattedMessage = `[${timestamp}] [${logLevelString}] [${source}] ${message}`;

    switch (level) {
      case LogLevel.ERROR:
        if (data) {
          console.error(formattedMessage, data);
        } else {
          console.error(formattedMessage);
        }
        break;
      case LogLevel.WARN:
        if (data) {
          console.warn(formattedMessage, data);
        } else {
          console.warn(formattedMessage);
        }
        break;
      case LogLevel.INFO:
        if (data) {
          console.info(formattedMessage, data);
        } else {
          console.info(formattedMessage);
        }
        break;
      case LogLevel.DEBUG:
      case LogLevel.TRACE:
        if (data) {
          console.log(formattedMessage, data);
        } else {
          console.log(formattedMessage);
        }
        break;
    }
  }
}
