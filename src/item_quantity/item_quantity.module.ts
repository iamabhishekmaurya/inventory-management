import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemQuantity } from 'src/common/entity/itemQuantity.entity';
import { ItemQuantityController } from './item_quantity.controller';
import { ItemQuantityService } from './item_quantity.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemQuantity])],
  providers: [ItemQuantityService],
  controllers: [ItemQuantityController]
})
export class ItemQuantityModule { }
