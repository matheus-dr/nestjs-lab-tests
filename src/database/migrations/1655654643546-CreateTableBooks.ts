import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableBooks1655654643546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id_book',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'id_author',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'id_genre',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'publish_date',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'authors_books_FK',
            referencedTableName: 'authors',
            columnNames: ['id_author'],
            referencedColumnNames: ['id_author'],
          },
          {
            name: 'books_genre_FK',
            referencedTableName: 'genres',
            columnNames: ['id_genre'],
            referencedColumnNames: ['id_genre'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
