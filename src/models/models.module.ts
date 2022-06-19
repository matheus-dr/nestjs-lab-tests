import { Module } from '@nestjs/common';

import { AuthorModule } from './author/author.module';

@Module({
  imports: [AuthorModule],
  providers: [],
  exports: [AuthorModule],
})
export class ModelsModule {}
