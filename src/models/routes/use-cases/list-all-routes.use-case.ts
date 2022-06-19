import { LatLng } from '../domain/entities/route.entity';
import { IRouteRepository } from '../domain/repositories/route.repository';

export class ListAllRoutesUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(): Promise<CreateRouteOutput> {
    const routes = await this.routeRepo.findAll();
    return routes.map(r => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
}[];
