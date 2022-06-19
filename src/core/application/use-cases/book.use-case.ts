import { Author } from '../../domain/entities/author.entity';

export interface IBookUseCase {
  create(data: Author): Promise<void>;

  findAll(): Promise<Author[]>;

  findOne(id: string): Promise<Author>;

  update(id: string, data: Partial<Author>): Promise<void>;

  remove(id: string): Promise<void>;
}
