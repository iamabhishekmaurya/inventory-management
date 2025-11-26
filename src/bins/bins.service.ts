import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBinDto } from './dto/create-bin.dto';
import { UpdateBinDto } from './dto/update-bin.dto';
import { Bin } from './entities/bin.entity';

@Injectable()
export class BinsService {
  constructor(
    @InjectRepository(Bin)
    private readonly binRepo: Repository<Bin>,
  ) {}

  async create(dto: CreateBinDto) {
    const bin = this.binRepo.create({
      warehouseId: dto.warehouseId,
      code: dto.code,
      zone: dto.zone,
      status: dto.status ?? true,
      createdAt: new Date(),
    });
    return this.binRepo.save(bin);
  }

  findAll() {
    return this.binRepo.find();
  }

  findOne(id: number) {
    return this.binRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateBinDto) {
    await this.binRepo.update(id, {
      ...dto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.binRepo.delete(id);
    return { id };
  }
}
