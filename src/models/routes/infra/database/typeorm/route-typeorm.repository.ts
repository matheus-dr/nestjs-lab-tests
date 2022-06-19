import { Repository } from 'typeorm';

import { Route } from '../../../domain/entities/route.entity';
import { IRouteRepository } from '../../../domain/repositories/route.repository';

export class RouteTypeOrmRepository implements IRouteRepository {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(await this.ormRepo.create(route));
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}
