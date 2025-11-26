import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepo: Repository<Transfer>,
  ) {}

  async create(dto: CreateTransferDto) {
    const transfer = this.transferRepo.create({
      fromWarehouseId: dto.fromWarehouseId,
      toWarehouseId: dto.toWarehouseId,
      fromBinId: dto.fromBinId,
      toBinId: dto.toBinId,
      itemId: dto.itemId,
      quantity: dto.quantity,
      notes: dto.notes,
      createdAt: new Date(),
    });
    return this.transferRepo.save(transfer);
  }

  findAll() {
    return this.transferRepo.find();
  }

  findOne(id: number) {
    return this.transferRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateTransferDto) {
    await this.transferRepo.update(id, {
      ...dto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.transferRepo.delete(id);
    return { id };
  }
}
