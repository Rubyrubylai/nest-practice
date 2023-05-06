import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cats';

@Controller('another-cats')
export class AnotherCatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll()
    }
}
