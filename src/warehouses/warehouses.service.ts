import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './entities/warehouse.entity';

@Injectable()
export class WarehousesService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepo: Repository<Warehouse>,
  ) {}

  async create(dto: CreateWarehouseDto) {
    const wh = this.warehouseRepo.create({
      name: dto.name,
      code: dto.code,
      status: dto.status ?? true,
      createdAt: new Date(),
    });
    return this.warehouseRepo.save(wh);
  }

  findAll() {
    return this.warehouseRepo.find();
  }

  findOne(id: number) {
    return this.warehouseRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateWarehouseDto) {
    await this.warehouseRepo.update(id, {
      ...dto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.warehouseRepo.delete(id);
    return { id };
  }
}
