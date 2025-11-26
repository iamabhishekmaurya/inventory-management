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
import { SuppliersModule } from './suppliers/suppliers.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { BinsModule } from './bins/bins.module';
import { TransfersModule } from './transfers/transfers.module';
import { ReturnsModule } from './returns/returns.module';
import { CycleCountsModule } from './cycle-counts/cycle-counts.module';
import { AdjustmentsModule } from './adjustments/adjustments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(inventoryDb),
    CreateModule,
    ItemTypeModule,
    ItemBrandModule,
    ItemModule,
    ItemSalesModule,
    ItemQuantityModule,
    SuppliersModule,
    PurchaseOrdersModule,
    WarehousesModule,
    BinsModule,
    TransfersModule,
    ReturnsModule,
    CycleCountsModule,
    AdjustmentsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(RefIdMiddleware).forRoutes('*');
  // }

}
