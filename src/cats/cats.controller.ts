import { Controller, Get, Post, Req, Param, Body, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateCatDto } from './dto/cats';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filters';
import { Cat } from './interfaces/cats';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { ParseIntPipe } from 'src/pipe/parse-int.pipe';
import { RolesGuard } from 'src/gaurd/roles.gaurd';
import { Roles } from 'src/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
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
        console.log('add')
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
