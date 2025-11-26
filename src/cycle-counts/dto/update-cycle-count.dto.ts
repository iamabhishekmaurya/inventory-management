import { PartialType } from '@nestjs/mapped-types';
import { CreateCycleCountDto } from './create-cycle-count.dto';

export class UpdateCycleCountDto extends PartialType(CreateCycleCountDto) {}
