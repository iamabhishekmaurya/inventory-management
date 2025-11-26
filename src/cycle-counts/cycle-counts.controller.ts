import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CycleCountsService } from './cycle-counts.service';
import { CreateCycleCountDto } from './dto/create-cycle-count.dto';
import { UpdateCycleCountDto } from './dto/update-cycle-count.dto';

@Controller('cycle-counts')
export class CycleCountsController {
  constructor(private readonly cycleCountsService: CycleCountsService) {}

  @Post()
  create(@Body() createCycleCountDto: CreateCycleCountDto) {
    return this.cycleCountsService.create(createCycleCountDto);
  }

  @Get()
  findAll() {
    return this.cycleCountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cycleCountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCycleCountDto: UpdateCycleCountDto) {
    return this.cycleCountsService.update(+id, updateCycleCountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cycleCountsService.remove(+id);
  }
}
