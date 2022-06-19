import { Genre } from './genre.entity';
import { Author } from './author.entity';

export class Book {
  private title: string;
  private author: Author;
  private genre: Genre;
  private publishDate: Date;
}
