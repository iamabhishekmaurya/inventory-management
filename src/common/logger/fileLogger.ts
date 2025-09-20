// // src/common/logger/file-logger.ts
// import { ConsoleLogger, Injectable } from '@nestjs/common';
// import * as fs from 'fs';
// import * as path from 'path';

// @Injectable()
// export class FileLogger extends ConsoleLogger {
//     private logFilePath: string;

//     constructor(context?: string) {
//         super(context ?? "AppLogger");
//         const logDir = path.resolve(__dirname, '../../../logs');
//         if (!fs.existsSync(logDir)) {
//             fs.mkdirSync(logDir, { recursive: true });
//         }

//         const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
//         this.logFilePath = path.join(logDir, `app-${date}.log`);
//     }

//     private writeToFile(level: string, message: string) {
//         const timestamp = new Date().toISOString();
//         const logLine = `${timestamp} [${level}] ${message}\n`;
//         fs.appendFileSync(this.logFilePath, logLine);
//     }

//     log(message: string) {
//         this.writeToFile('LOG', message);
//     }

//     error(message: string, trace?: string) {
//         this.writeToFile('ERROR', `${message} ${trace ?? ''}`);
//     }

//     warn(message: string) {
//         this.writeToFile('WARN', message);
//     }

//     debug(message: string) {
//         this.writeToFile('DEBUG', message);
//     }

//     verbose(message: string) {
//         this.writeToFile('VERBOSE', message);
//     }
// }