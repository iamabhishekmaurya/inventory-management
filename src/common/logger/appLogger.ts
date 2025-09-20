// import { Injectable, LoggerService, LogLevel } from '@nestjs/common';
// import { Request } from 'express';
// import { winstonConfig } from './custom.logger';

// @Injectable()
// export class AppLogger implements LoggerService {
//     warn(message: any, ...optionalParams: any[]) {
//         throw new Error('Method not implemented.');
//     }
//     debug?(message: any, ...optionalParams: any[]) {
//         throw new Error('Method not implemented.');
//     }
//     verbose?(message: any, ...optionalParams: any[]) {
//         throw new Error('Method not implemented.');
//     }
//     fatal?(message: any, ...optionalParams: any[]) {
//         throw new Error('Method not implemented.');
//     }
//     setLogLevels?(levels: LogLevel[]) {
//         throw new Error('Method not implemented.');
//     }
//     log(message: string, req?: Request) {
//         winstonConfig.info(message/* , { refId: req?.refId } */);
//     }

//     error(message: string, req?: Request) {
//         winstonConfig.error(message/* , { refId: req?.refId } */);
//     }

//     // Add warn, debug, etc. similarly
// }