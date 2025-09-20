import { Injectable, Logger } from '@nestjs/common';
// import { FileLogger } from 'src/common/logger/fileLogger';

@Injectable()
export class CreateService {
    constructor(private readonly logger: Logger) { }
    getHello(): string {
        this.logger.log("this from create service" )
        return "Hello from create service."
    }
}
