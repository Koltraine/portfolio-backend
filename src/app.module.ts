import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { StorageModule } from './storage/storage.module';
import { HealthModule } from './health/health.module';
import { ShaderModule } from './shader/shader.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { WorkRecordModule } from './work-record/work-record.module';

@Module({
  imports: [ HealthModule, ProjectModule, StorageModule, ShaderModule, CurriculumModule, WorkRecordModule],
})
export class AppModule {}
