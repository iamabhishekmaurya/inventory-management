import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cycle_count' })
export class CycleCount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'warehouse_id', type: 'int', nullable: true })
  warehouseId?: number | null;

  @Column({ name: 'bin_id', type: 'int', nullable: true })
  binId?: number | null;

  @Column({ name: 'scheduled_date', type: 'datetime', nullable: true })
  scheduledDate?: Date | null;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 20,
    default: 'Planned',
  })
  status: 'Planned' | 'InProgress' | 'Completed';

  @Column({ name: 'variance', type: 'decimal', precision: 10, scale: 2, nullable: true })
  variance?: number | null;

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
