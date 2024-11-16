import { PartialType } from '@nestjs/mapped-types';
import { CreateShaderDto } from './create-shader.dto';

export class UpdateShaderDto extends PartialType(CreateShaderDto) {}
