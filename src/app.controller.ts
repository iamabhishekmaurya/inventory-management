import { Controller, Get } from '@nestjs/common';
import { CreateService } from './create/create.service';

@Controller()
export class AppController {
  constructor(private readonly cerateService: CreateService) {}

  @Get()
  getHello(): string {
    return this.cerateService.getHello();
  }
}
