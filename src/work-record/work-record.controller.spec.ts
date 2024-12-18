import { Test, TestingModule } from '@nestjs/testing';
import { WorkRecordController } from './work-record.controller';
import { WorkRecordService } from './work-record.service';

describe('WorkRecordController', () => {
  let controller: WorkRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkRecordController],
      providers: [WorkRecordService],
    }).compile();

    controller = module.get<WorkRecordController>(WorkRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
