import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateRouteDto } from './domain/dto/create-route.dto';
import { CreateRouteUseCase } from './use-cases/create-route.use-case';
import { ListAllRoutesUseCase } from './use-cases/list-all-routes.use-case';

@Controller('routes')
export class RoutesController {
  constructor(
    private createRouteUseCase: CreateRouteUseCase,
    private listAllRoutesUseCase: ListAllRoutesUseCase
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createRouteUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllRoutesUseCase.execute();
  }
}
