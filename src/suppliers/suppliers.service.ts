import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepo: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const supplier = this.supplierRepo.create({
      ...createSupplierDto,
      status: createSupplierDto.status ?? true,
      createdAt: new Date(),
    });
    return this.supplierRepo.save(supplier);
  }

  findAll() {
    return this.supplierRepo.find();
  }

  findOne(id: number) {
    return this.supplierRepo.findOne({ where: { id } });
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    await this.supplierRepo.update(id, {
      ...updateSupplierDto,
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.supplierRepo.delete(id);
    return { id };
  }
}
