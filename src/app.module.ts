import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { inventoryDb } from './common/config/db.config';
import { CreateModule } from './create/create.module';
import { ItemModule } from './item/item.module';
import { ItemBrandModule } from './item_brand/item_brand.module';
import { ItemSalesModule } from './item_sales/item_sales.module';
import { ItemTypeModule } from './item_type/item_type.module';
import { ItemQuantityModule } from './item_quantity/item_quantity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(inventoryDb),
    CreateModule,
    ItemTypeModule,
    ItemBrandModule,
    ItemModule,
    ItemSalesModule,
    ItemQuantityModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(RefIdMiddleware).forRoutes('*');
  // }

}
