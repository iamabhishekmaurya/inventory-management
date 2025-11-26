import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePurchaseOrderDto {
  @IsNotEmpty()
  @IsNumber()
  supplierId: number;

  @IsOptional()
  @IsIn(['Draft', 'Approved', 'Received', 'Closed', 'Cancelled'])
  status?: 'Draft' | 'Approved' | 'Received' | 'Closed' | 'Cancelled';

  @IsOptional()
  @IsString()
  expectedDate?: string; // ISO date string

  @IsOptional()
  @IsString()
  notes?: string;
}
