import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transfer' })
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'from_warehouse_id' })
  fromWarehouseId: number;

  @Column({ name: 'to_warehouse_id' })
  toWarehouseId: number;

  @Column({ name: 'from_bin_id', type: 'int', nullable: true })
  fromBinId?: number | null;

  @Column({ name: 'to_bin_id', type: 'int', nullable: true })
  toBinId?: number | null;

  @Column({ name: 'item_id', type: 'int', nullable: true })
  itemId?: number | null;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'notes', type: 'text', nullable: true })
  notes?: string | null;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Exclude()
  @Column({ name: 'created_by', default: 'admin' })
  createdBy: string;

  @Exclude()
  @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Exclude()
  @Column({ name: 'updated_by', default: 'admin' })
  updatedBy: string;
}
