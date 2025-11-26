import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "item_quantity" })
export class ItemQuantity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "item_id" })
    itemId: number;
    @Column({ name: "quantity" })
    quantity: number;
    @Column({ name: "quantity_remains", default: 0 })
    quantityRemains: number;
    @Column({ name: "lot_number", type: 'varchar', length: 255, nullable: true })
    lotNumber?: string | null;
    @Column({ name: "expiry_date", type: 'date', nullable: true })
    expiryDate?: Date | null;

    @Column({ name: "inventory_id", unique: true })
    inventoryId: number;
    @Column({ name: "purchase_price", type: 'decimal' })
    purchasePrice: number;
    @Column({ default: true })
    status: boolean;
    @Column({ name: "created_at" })
    createdAt: Date;
    @Exclude()
    @Column({ name: "created_by", default: "admin" })
    createdBy: string;
    @Exclude()
    @Column({ name: "updated_at", default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
    @Exclude()
    @Column({ name: "updated_by", default: "admin" })
    updatedBy: string;
}