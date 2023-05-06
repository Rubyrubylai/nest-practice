import { Controller, Get, Post, Req, Param, Body, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/cats';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filters';
import { Cat } from './interfaces/cats';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { ParseIntPipe } from 'src/validation/parse-int.pipe';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(@Req() request: Request): string {
        return 'return cats'
    }

    @Post()
    create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
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
    findOne(@Param('id', new ParseIntPipe()) id: number): Cat {
        return this.catsService.findOne(id)
    }
}
