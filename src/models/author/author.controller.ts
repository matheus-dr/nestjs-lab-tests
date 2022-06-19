import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() data: CreateAuthorDto) {
    await this.authorService.create(data);
  }

  @Get()
  async findAll() {
    return this.authorService.findAll();
  }

  @Get()
  async findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Put()
  async update(@Param('id') id: string, @Body() data: UpdateAuthorDto) {
    await this.authorService.update(id, data);
  }

  @Delete()
  async remove(@Param('id') id: string) {
    await this.authorService.remove(id);
  }
}
