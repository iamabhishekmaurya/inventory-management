import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReturnDto } from './dto/create-return.dto';
import { UpdateReturnDto } from './dto/update-return.dto';
import { Return } from './entities/return.entity';

@Injectable()
export class ReturnsService {
  constructor(
    @InjectRepository(Return)
    private readonly returnRepo: Repository<Return>,
  ) {}

  async create(dto: CreateReturnDto) {
    const entity = this.returnRepo.create({
      kind: dto.kind,
      itemId: dto.itemId,
      quantity: dto.quantity,
      reason: dto.reason,
      status: dto.status ?? 'Requested',
      notes: dto.notes,
      createdAt: new Date(),
    });
    return this.returnRepo.save(entity);
  }

  findAll() {
    return this.returnRepo.find();
  }

  findOne(id: number) {
    return this.returnRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateReturnDto) {
    await this.returnRepo.update(id, {
      ...dto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.returnRepo.delete(id);
    return { id };
  }
}
