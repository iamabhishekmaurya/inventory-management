import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "item_sale" })
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "item_quantity_id" })
    itemQuantityId: number;
    @Column({ name: "inventory_id", unique: true })
    inventoryId: number;
    @Column({ name: "sale_price", type: 'decimal' })
    salePrice: number;
    @Column({ default: true })
    status: boolean;
    @Column({ name: "created_at" })
    createdAt: Date;
    @Exclude()
    @Column({ name: "created_by", default: "admin" })
    createdBy: string;
    @Exclude()
    @Column({ name: "updated_at", default: new Date() })
    updatedAt: Date;
    @Exclude()
    @Column({ name: "updated_by", default: "admin" })
    updatedBy: string;
}