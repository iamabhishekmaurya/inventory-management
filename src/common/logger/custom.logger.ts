// import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
// import * as winston from 'winston';
// import 'winston-daily-rotate-file';
// import * as path from 'path';

// function getStackInfo(stackIndex = 2) {
//     const stacklist = new Error().stack?.split('\n').slice(3);
//     const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
//     const stackReg2 = /at\s+(.*):(\d*):(\d*)/i;

//     const s = stacklist?.[stackIndex] || '';
//     const sp = stackReg.exec(s) || stackReg2.exec(s);

//     if (sp) {
//         return {
//             method: sp[1],
//             file: path.basename(sp[2]),
//             line: sp[3],
//         };
//     }
//     return {};
// }

// const customFormat = winston.format.printf(({ level, message, timestamp, refId }) => {
//     const stackInfo = getStackInfo();
//     const location = stackInfo.file ? `${stackInfo.file}:${stackInfo.line}` : 'unknown';
//     return `${timestamp} [${level}] [${location}]${refId ? ` [refId: ${refId}]` : ''} ${message}`;
// });

// export const winstonConfig = winston.createLogger({
//     level: 'info',
//     format: winston.format.combine(
//         winston.format.timestamp(),
//         customFormat
//     ),
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.DailyRotateFile({
//             dirname: 'logs',
//             filename: 'app-%DATE%.log',
//             datePattern: 'YYYY-MM-DD',
//             zippedArchive: true,
//             maxSize: '20m',
//             maxFiles: '14d',
//         }),
//     ],
// });