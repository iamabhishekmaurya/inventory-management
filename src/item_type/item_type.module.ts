import { Module } from '@nestjs/common';
import { ItemTypeService } from './item_type.service';
import { ItemTypeController } from './item_type.controller';
import { ItemType } from 'src/common/entity/itemType.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemType])],
  providers: [ItemTypeService],
  controllers: [ItemTypeController]
})
export class ItemTypeModule { }
