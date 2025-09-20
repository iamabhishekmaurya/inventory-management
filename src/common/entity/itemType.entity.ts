import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "item_type" })
export class ItemType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    type: string;
    @Column({ default: true })
    status: boolean;
    @Column({ name: "created_at" })
    createdAt: Date;
    @Exclude()
    @Column({ name: "created_by", nullable: true })
    createdBy: string;
    @Exclude()
    @Column({ name: "updated_at" })
    updatedAt: Date;
    @Exclude()
    @Column({ name: "updated_by", nullable: true })
    updatedBy: string;
}