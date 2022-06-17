import { BullModule } from '@nestjs/bull';
import { SequelizeModule } from '@nestjs/sequelize';
import { CacheModule, Module } from '@nestjs/common';

import { Tweet } from './entities/tweet.entity';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TweetCountService } from './tweet-count/tweet-count.service';

@Module({
  imports: [
    CacheModule.register(),
    SequelizeModule.forFeature([Tweet]),
    BullModule.registerQueue({ name: 'emails' }),
  ],
  controllers: [TweetsController],
  providers: [TweetsService, TweetCountService],
})
export class TweetsModule {}
