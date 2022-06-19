import { Route } from '../entities/route.entity';

export interface IRouteRepository {
  insert(route: Route): Promise<void>;

  findAll(): Promise<Route[]>;
}
