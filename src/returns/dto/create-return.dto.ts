import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReturnDto {
  @IsNotEmpty()
  @IsIn(['Supplier', 'Customer'])
  kind: 'Supplier' | 'Customer';

  @IsNotEmpty()
  @IsNumber()
  itemId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsOptional()
  @IsIn(['Requested', 'Approved', 'Rejected', 'Completed'])
  status?: 'Requested' | 'Approved' | 'Rejected' | 'Completed';

  @IsOptional()
  @IsString()
  notes?: string;
}
