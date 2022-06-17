import { join } from 'path';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';

import { TweetsModule } from './tweets/tweets.module';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, './database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    TweetsModule,
    MailingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
