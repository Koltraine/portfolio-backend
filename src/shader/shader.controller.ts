import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShaderService } from './shader.service';
import { CreateShaderDto } from './dto/create-shader.dto';
import { UpdateShaderDto } from './dto/update-shader.dto';

@Controller('shader')
export class ShaderController {
  constructor(private readonly shaderService: ShaderService) {}

  @Post()
  create(@Body() createShaderDto: CreateShaderDto) {
    return this.shaderService.create(createShaderDto);
  }

  @Get()
  findAll() {
    return this.shaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shaderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShaderDto: UpdateShaderDto) {
    return this.shaderService.update(+id, updateShaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shaderService.remove(+id);
  }
}
