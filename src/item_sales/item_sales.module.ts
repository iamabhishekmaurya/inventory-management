import { Module } from '@nestjs/common';
import { ItemSalesController } from './item_sales.controller';
import { ItemSalesService } from './item_sales.service';
import { Sale } from 'src/common/entity/sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [ItemSalesController],
  providers: [ItemSalesService]
})
export class ItemSalesModule { }
