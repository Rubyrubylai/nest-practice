/*
provider can be injected as a dependency
provider – services, repositories, factories, helpers...
*/
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats';

@Injectable()  // Service 屬於 抽象 的概念
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat) {
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }
}
