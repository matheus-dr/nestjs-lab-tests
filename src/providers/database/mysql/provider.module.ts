import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MySqlConfigService } from '../../../config/database/mysql/configuration.service';
import { MySqlConfigurationModule } from '../../../config/database/mysql/configuration.module';
import { Author } from '../../../models/author/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigurationModule],
      useFactory: async (mySqlConfigService: MySqlConfigService) => {
        return {
          type: 'mysql',
          host: mySqlConfigService.host,
          port: mySqlConfigService.port,
          username: mySqlConfigService.username,
          password: mySqlConfigService.password,
          database: mySqlConfigService.databaseName,
          entities: [Author],
        };
      },
      inject: [MySqlConfigService],
    }),
  ],
})
export class MySqlDatabaseProviderModule {}
