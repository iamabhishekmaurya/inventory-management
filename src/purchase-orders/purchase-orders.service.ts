import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrder } from './entities/purchase-order.entity';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly poRepo: Repository<PurchaseOrder>,
  ) {}

  async create(dto: CreatePurchaseOrderDto) {
    const po = this.poRepo.create({
      supplierId: dto.supplierId,
      status: dto.status ?? 'Draft',
      expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
      notes: dto.notes,
      createdAt: new Date(),
    });
    return this.poRepo.save(po);
  }

  findAll() {
    return this.poRepo.find();
  }

  findOne(id: number) {
    return this.poRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdatePurchaseOrderDto) {
    await this.poRepo.update(id, {
      ...dto,
      expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : undefined,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.poRepo.delete(id);
    return { id };
  }
}
