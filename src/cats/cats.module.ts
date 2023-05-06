/* 
module classes cannot be injected as providers due to circular dependency.
Nest encapsulates providers inside the module scope. You aren't able to use a module's providers elsewhere without first importing the encapsulating module.
*/
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService],  // register the service with Nest so that it can perform the injection
    exports: [CatsService],  // share an instance of the CatsService between several other modules
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
