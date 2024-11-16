import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkRecordService } from './work-record.service';
import { CreateWorkRecordDto } from './dto/create-work-record.dto';
import { UpdateWorkRecordDto } from './dto/update-work-record.dto';

@Controller('work-record')
export class WorkRecordController {
  constructor(private readonly workRecordService: WorkRecordService) {}

  @Post()
  create(@Body() createWorkRecordDto: CreateWorkRecordDto) {
    return this.workRecordService.create(createWorkRecordDto);
  }

  @Get()
  findAll() {
    return this.workRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkRecordDto: UpdateWorkRecordDto) {
    return this.workRecordService.update(+id, updateWorkRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workRecordService.remove(+id);
  }
}
