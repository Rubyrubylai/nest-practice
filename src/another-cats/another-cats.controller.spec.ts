import { Test, TestingModule } from '@nestjs/testing';
import { AnotherCatsController } from './another-cats.controller';

describe('AnotherCatsController', () => {
  let controller: AnotherCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnotherCatsController],
    }).compile();

    controller = module.get<AnotherCatsController>(AnotherCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
