import { Logger, Module } from '@nestjs/common';
import { CreateService } from './create.service';
// import { FileLogger } from 'src/common/logger/fileLogger';

@Module({
  providers: [CreateService, Logger],
  exports: [CreateService]
})
export class CreateModule { }
