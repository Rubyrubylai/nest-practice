import { Controller, Get, Post, Req, Param, Body, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/cats';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filters';

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

    @Get('exception')
    getException() {
        throw new ForbiddenException()
    }

    @Post('exception')
    @UseFilters(HttpExceptionFilter)
    postException() {
        throw new ForbiddenException()
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return id
    }
}
