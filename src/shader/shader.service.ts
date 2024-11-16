import { Injectable } from '@nestjs/common';
import { CreateShaderDto } from './dto/create-shader.dto';
import { UpdateShaderDto } from './dto/update-shader.dto';

@Injectable()
export class ShaderService {
  create(createShaderDto: CreateShaderDto) {
    return 'This action adds a new shader';
  }

  findAll() {
    return `This action returns all shader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shader`;
  }

  update(id: number, updateShaderDto: UpdateShaderDto) {
    return `This action updates a #${id} shader`;
  }

  remove(id: number) {
    return `This action removes a #${id} shader`;
  }
}
