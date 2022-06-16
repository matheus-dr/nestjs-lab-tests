import { join } from 'path';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleModule } from '@nestjs/schedule';

import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, './database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    TweetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
