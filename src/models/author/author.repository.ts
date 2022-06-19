import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Author } from './entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    private repository: Repository<Author>
  ) {}

  async create(data: CreateAuthorDto) {
    await this.repository.save(await this.repository.create(data));
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: string, data: UpdateAuthorDto) {
    await this.repository.update(id, data);
  }

  async remove(id: string) {
    await this.repository.delete(id);
  }
}
