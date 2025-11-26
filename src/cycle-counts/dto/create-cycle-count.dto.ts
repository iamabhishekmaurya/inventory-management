import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCycleCountDto {
  @IsOptional()
  @IsNumber()
  warehouseId?: number;

  @IsOptional()
  @IsNumber()
  binId?: number;

  // ISO datetime string (will be converted to Date in the service)
  @IsOptional()
  @IsString()
  scheduledDate?: string;

  @IsOptional()
  @IsIn(['Planned', 'InProgress', 'Completed'])
  status?: 'Planned' | 'InProgress' | 'Completed';

  @IsOptional()
  @IsNumber()
  variance?: number;
}
