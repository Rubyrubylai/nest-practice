import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/cats';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(@Req() request: Request): string {
        return 'return cats'
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return 'add cats'
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return id
    }
}
