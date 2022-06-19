import { Module } from '@nestjs/common';

import { ModelsModule } from './models/models.module';
import { MySqlConfigurationModule } from './config/database/mysql/configuration.module';
import { MySqlDatabaseProviderModule } from './providers/database/mysql/provider.module';

@Module({
  imports: [
    MySqlConfigurationModule,
    MySqlDatabaseProviderModule,
    ModelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
