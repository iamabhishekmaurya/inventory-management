import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ItemType } from "../entity/itemType.entity";
import { ItemBrand } from "../entity/itemBrand.entity";
import { ItemQuantity } from "../entity/itemQuantity.entity";
import { Item } from "../entity/item.entity";
import { ItemSales } from "../entity/itemSales.entity";

export const inventoryDb: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'inventory_db',
    synchronize: true,
    entities: [ItemType, ItemBrand, ItemQuantity, Item, ItemSales],
}