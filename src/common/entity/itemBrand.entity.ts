import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "item_brand" })
export class ItemBrand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'brand_name', unique: true })
    brandName: string;
    @Column({ name: "item_type_id" })
    itemTypeId: number;
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