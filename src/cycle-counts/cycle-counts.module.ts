import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CycleCountsService } from './cycle-counts.service';
import { CycleCountsController } from './cycle-counts.controller';
import { CycleCount } from './entities/cycle-count.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CycleCount])],
  controllers: [CycleCountsController],
  providers: [CycleCountsService],
})
export class CycleCountsModule {}
