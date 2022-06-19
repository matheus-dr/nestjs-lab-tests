import { Book } from '../entities/book.entity';

export interface IBookRepository {
  create(data: Book): Promise<void>;

  findAll(): Promise<Book[]>;

  findOne(id: string): Promise<Book | null>;

  update(id: string, data: Partial<Book>): Promise<void>;

  remove(id: string): Promise<void>;
}
