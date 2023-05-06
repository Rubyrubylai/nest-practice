import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AnotherCatsModule } from './another-cats/another-cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({  // provides metadata that Nest makes use of to organize the application structure.
  imports: [CatsModule, AnotherCatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
