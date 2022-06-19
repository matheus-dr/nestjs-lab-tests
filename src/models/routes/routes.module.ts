import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';

import { Route } from './domain/entities/route.entity';
import { RoutesController } from './routes.controller';
import { RouteSchema } from './infra/database/typeorm/route.schema';
import { CreateRouteUseCase } from './use-cases/create-route.use-case';
import { IRouteRepository } from './domain/repositories/route.repository';
import { ListAllRoutesUseCase } from './use-cases/list-all-routes.use-case';
import { RouteInMemoryRepository } from './infra/database/in-memory/route-in-memory.repository';
import { RouteTypeOrmRepository } from './infra/database/typeorm/route-typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: IRouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: IRouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}
