import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Tweet } from './entities/tweet.entity';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TweetCountService } from './tweet-count/tweet-count.service';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService, TweetCountService],
})
export class TweetsModule {}
