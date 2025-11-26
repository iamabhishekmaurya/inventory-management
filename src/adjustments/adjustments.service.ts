import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateAdjustmentDto } from './dto/update-adjustment.dto';
import { Adjustment } from './entities/adjustment.entity';

@Injectable()
export class AdjustmentsService {
  constructor(
    @InjectRepository(Adjustment)
    private readonly adjRepo: Repository<Adjustment>,
  ) {}

  create(dto: CreateAdjustmentDto) {
    const entity = this.adjRepo.create({
      itemId: dto.itemId,
      quantity: dto.quantity,
      reason: dto.reason,
      approved: dto.approved ?? false,
      createdAt: new Date(),
    });
    return this.adjRepo.save(entity);
  }

  findAll() {
    return this.adjRepo.find();
  }

  findOne(id: number) {
    return this.adjRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateAdjustmentDto) {
    await this.adjRepo.update(id, {
      ...dto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.adjRepo.delete(id);
    return { id };
  }
}
