import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bin' })
export class Bin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'warehouse_id' })
  warehouseId: number;

  @Column({ name: 'code' })
  code: string;

  @Column({ name: 'zone', type: 'varchar', length: 100, nullable: true })
  zone?: string | null;

  @Column({ default: true })
  status: boolean;

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
