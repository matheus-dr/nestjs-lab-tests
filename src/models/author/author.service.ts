import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './author.repository';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async create(data: CreateAuthorDto) {
    await this.authorRepository.create(data);
  }

  async findAll() {
    return this.authorRepository.findAll();
  }

  async findOne(id: string) {
    const author = await this.authorRepository.findOne(id);

    if (!author) {
      throw new Error('Author not found');
    }

    return author;
  }

  async update(id: string, data: UpdateAuthorDto) {
    await this.authorRepository.update(id, data);
  }

  async remove(id: string) {
    await this.authorRepository.remove(id);
  }
}
