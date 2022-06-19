import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { RoutesModule } from './models/routes/routes.module';
import { RouteSchema } from './models/routes/infra/database/typeorm/route.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, 'database.sqlite'),
      synchronize: true,
      entities: [RouteSchema],
    }),
    RoutesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
