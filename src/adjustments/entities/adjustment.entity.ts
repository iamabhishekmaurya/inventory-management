import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'adjustment' })
export class Adjustment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'item_id' })
  itemId: number;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'reason', type: 'text' })
  reason: string;

  @Column({ name: 'approved', type: 'bool', default: false })
  approved: boolean;

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
