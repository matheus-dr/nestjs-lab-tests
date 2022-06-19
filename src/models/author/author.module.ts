import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './author.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService],
})
export class AuthorModule {}
