import { Module } from '@nestjs/common';

import { RoutesController } from './routes.controller';
import { CreateRouteUseCase } from './use-cases/create-route.use-case';
import { IRouteRepository } from './domain/repositories/route.repository';
import { ListAllRoutesUseCase } from './use-cases/list-all-routes.use-case';
import { RouteInMemoryRepository } from './infra/database/in-memory/route-in-memory.repository';

@Module({
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: IRouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: IRouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class RoutesModule {}
