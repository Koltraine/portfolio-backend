import { Module } from '@nestjs/common';
import { ShaderService } from './shader.service';
import { ShaderController } from './shader.controller';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [ShaderController],
  providers: [ShaderService],
})
export class ShaderModule {}
