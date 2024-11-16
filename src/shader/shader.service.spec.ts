import { Test, TestingModule } from '@nestjs/testing';
import { ShaderService } from './shader.service';

describe('ShaderService', () => {
  let service: ShaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShaderService],
    }).compile();

    service = module.get<ShaderService>(ShaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
