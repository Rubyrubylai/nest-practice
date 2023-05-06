import { Controller, Get, Post, Req, Param, Body, UseFilters, UseGuards, SetMetadata } from '@nestjs/common';
import { CreateCatDto } from './dto/cats';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filters';
import { Cat } from './interfaces/cats';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { ParseIntPipe } from 'src/validation/parse-int.pipe';
import { RolesGuard } from 'src/gaurd/roles.gaurd';
import { Roles } from 'src/decorator/roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(@Req() request: Request): string {
        return 'return cats'
    }

    @Post()
    @Roles('admin', 'user')
    create(@Body(new ValidationPipe()) createCatDto: CreateCatDto): string {
        this.catsService.create(createCatDto)
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
    findOne(@Param('id', new ParseIntPipe()) id: number): Cat {
        return this.catsService.findOne(id)
    }
}
