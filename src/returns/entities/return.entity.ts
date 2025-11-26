import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'return' })
export class Return {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'kind', type: 'varchar', length: 20 })
  kind: 'Supplier' | 'Customer';

  @Column({ name: 'item_id' })
  itemId: number;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'reason', type: 'text' })
  reason: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 20,
    default: 'Requested',
  })
  status: 'Requested' | 'Approved' | 'Rejected' | 'Completed';

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
