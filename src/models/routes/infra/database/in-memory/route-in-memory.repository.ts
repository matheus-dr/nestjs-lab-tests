import { Route } from '../../../domain/entities/route.entity';
import { IRouteRepository } from '../../../domain/repositories/route.repository';

export class RouteInMemoryRepository implements IRouteRepository {
  items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
