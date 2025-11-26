import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  @IsNumber()
  fromWarehouseId: number;

  @IsNotEmpty()
  @IsNumber()
  toWarehouseId: number;

  @IsOptional()
  @IsNumber()
  fromBinId?: number;

  @IsOptional()
  @IsNumber()
  toBinId?: number;

  @IsOptional()
  @IsNumber()
  itemId?: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
