import { Module } from '@nestjs/common';
import { WorkRecordService } from './work-record.service';
import { WorkRecordController } from './work-record.controller';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [WorkRecordController],
  providers: [WorkRecordService],
})
export class WorkRecordModule {}
