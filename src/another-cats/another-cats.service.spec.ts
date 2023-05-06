import { Test, TestingModule } from '@nestjs/testing';
import { AnotherCatsService } from './another-cats.service';

describe('AnotherCatsService', () => {
  let service: AnotherCatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnotherCatsService],
    }).compile();

    service = module.get<AnotherCatsService>(AnotherCatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
