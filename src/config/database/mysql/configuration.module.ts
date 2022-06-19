import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MySqlConfigService } from './configuration.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(3306),
        DB_USERNAME: Joi.string().default('root'),
        DB_PASSWORD: Joi.string().default(''),
        DB_NAME: Joi.string().default('database'),
      }),
    }),
  ],
  providers: [ConfigService, MySqlConfigService],
  exports: [ConfigService, MySqlConfigService],
})
export class MySqlConfigurationModule {}
