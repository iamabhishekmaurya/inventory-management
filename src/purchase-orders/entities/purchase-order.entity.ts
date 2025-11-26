import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'purchase_order' })
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'supplier_id' })
  supplierId: number;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 20,
    default: 'Draft',
  })
  status: 'Draft' | 'Approved' | 'Received' | 'Closed' | 'Cancelled';

  @Column({ name: 'expected_date', type: 'datetime', nullable: true })
  expectedDate?: Date | null;

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
