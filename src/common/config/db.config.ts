import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ItemType } from "../entity/itemType.entity";
import { ItemBrand } from "../entity/itemBrand.entity";
import { ItemQuantity } from "../entity/itemQuantity.entity";
import { Item } from "../entity/item.entity";
import { Sale } from "../entity/sale.entity";

import { Supplier } from "../../suppliers/entities/supplier.entity";
import { PurchaseOrder } from "../../purchase-orders/entities/purchase-order.entity";
import { Warehouse } from "../../warehouses/entities/warehouse.entity";
import { Bin } from "../../bins/entities/bin.entity";
import { Transfer } from "../../transfers/entities/transfer.entity";
import { Return } from "../../returns/entities/return.entity";
import { CycleCount } from "../../cycle-counts/entities/cycle-count.entity";
import { Adjustment } from "../../adjustments/entities/adjustment.entity";

export const inventoryDb: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'inventory_db',
    synchronize: true,
    entities: [ItemType, ItemBrand, ItemQuantity, Item, Sale, Supplier, PurchaseOrder, Warehouse, Bin, Transfer, Return, CycleCount, Adjustment],
}