import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCycleCountDto } from './dto/create-cycle-count.dto';
import { UpdateCycleCountDto } from './dto/update-cycle-count.dto';
import { CycleCount } from './entities/cycle-count.entity';

/**
 * Service responsible for managing cycle count definitions.
 *
 * A cycle count represents a scheduled or in-progress stock counting
 * activity at a warehouse and/or bin, with an optional variance value
 * recorded once completed.
 */
@Injectable()
export class CycleCountsService {
  private readonly logger = new Logger(CycleCountsService.name);

  constructor(
    @InjectRepository(CycleCount)
    private readonly cycleRepo: Repository<CycleCount>,
  ) {}

  /**
   * Create a new cycle count definition.
   *
   * @param dto payload describing the cycle count to create
   * @returns the persisted CycleCount entity
   */
  async create(dto: CreateCycleCountDto): Promise<CycleCount> {
    this.logger.log('Creating cycle count', { dto });
    const entity = this.cycleRepo.create({
      warehouseId: dto.warehouseId ?? null,
      binId: dto.binId ?? null,
      scheduledDate: dto.scheduledDate ? new Date(dto.scheduledDate) : null,
      status: dto.status ?? 'Planned',
      variance: dto.variance ?? null,
      createdAt: new Date(),
    });
    const saved = await this.cycleRepo.save(entity);
    this.logger.log('Created cycle count', { id: saved.id });
    return saved;
  }

  /**
   * Retrieve all cycle counts.
   *
   * @returns list of all CycleCount entities
   */
  findAll(): Promise<CycleCount[]> {
    this.logger.log('Fetching all cycle counts');
    return this.cycleRepo.find();
  }

  /**
   * Retrieve a single cycle count by id.
   *
   * @param id numeric identifier of the cycle count
   * @returns the matching CycleCount entity, or null if not found
   */
  findOne(id: number): Promise<CycleCount | null> {
    this.logger.log('Fetching cycle count', { id });
    return this.cycleRepo.findOne({ where: { id } });
  }

  /**
   * Update an existing cycle count.
   *
   * Only fields present in the DTO are updated. The updated entity is
   * read back and returned to the caller.
   *
   * @param id id of the cycle count to update
   * @param dto partial payload with fields to change
   * @returns the updated CycleCount entity
   */
  async update(id: number, dto: UpdateCycleCountDto): Promise<CycleCount | null> {
    this.logger.log('Updating cycle count', { id, dto });
    await this.cycleRepo.update(id, {
      ...dto,
      scheduledDate: dto.scheduledDate
        ? new Date(dto.scheduledDate)
        : dto.scheduledDate === undefined
        ? undefined
        : null,
    });
    return this.findOne(id);
  }

  /**
   * Remove a cycle count.
   *
   * @param id id of the cycle count to delete
   * @returns an object echoing the deleted id
   */
  async remove(id: number): Promise<{ id: number }> {
    this.logger.log('Removing cycle count', { id });
    await this.cycleRepo.delete(id);
    return { id };
  }
}
