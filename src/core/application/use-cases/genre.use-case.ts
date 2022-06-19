import { Genre } from '../../domain/entities/genre.entity';

export interface IGenreUseCase {
  create(data: Genre): Promise<void>;

  findAll(): Promise<Genre[]>;

  findOne(id: string): Promise<Genre | null>;

  update(id: string, data: Partial<Genre>): Promise<void>;

  remove(id: string): Promise<void>;
}
