import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "item" })
export class Item {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'item_name', unique: true })
    itemName: string;
    @Column({ name: "item_brand_id" })
    itemBrandId: number;
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