import { Test, TestingModule } from '@nestjs/testing';
import { ShaderController } from './shader.controller';
import { ShaderService } from './shader.service';

describe('ShaderController', () => {
  let controller: ShaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShaderController],
      providers: [ShaderService],
    }).compile();

    controller = module.get<ShaderController>(ShaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
