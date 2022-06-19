import { Author } from '../entities/author.entity';

export interface IAuthorRepository {
  create(data: Author): Promise<void>;

  findAll(): Promise<Author[]>;

  findOne(id: string): Promise<Author | null>;

  update(id: string, data: Partial<Author>): Promise<void>;

  remove(id: string): Promise<void>;
}
