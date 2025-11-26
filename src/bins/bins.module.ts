import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BinsService } from './bins.service';
import { BinsController } from './bins.controller';
import { Bin } from './entities/bin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bin])],
  controllers: [BinsController],
  providers: [BinsService],
})
export class BinsModule {}
