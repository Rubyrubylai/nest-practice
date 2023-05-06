import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { AnotherCatsController } from './another-cats.controller';

@Module({
    controllers: [AnotherCatsController],
    imports: [CatsModule],  // import shared module
})
export class AnotherCatsModule {}
