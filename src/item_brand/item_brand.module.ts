import { Module } from '@nestjs/common';
import { ItemBrandController } from './item_brand.controller';
import { ItemBrandService } from './item_brand.service';
import { ItemBrand } from 'src/common/entity/itemBrand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemBrand])],
  controllers: [ItemBrandController],
  providers: [ItemBrandService]
})
export class ItemBrandModule { }
