import { Cache } from 'cache-manager';
import { Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Inject, Injectable } from '@nestjs/common';

import { Tweet } from '../entities/tweet.entity';

@Injectable()
export class TweetCountService {
  private readonly limit = 10;

  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
    @Inject('CACHE_MANAGER')
    private cache: Cache
  ) {}

  @Interval(5000)
  async countTweets() {
    let offset = await this.cache.get<number>('tweet-offset');

    if (typeof offset === 'undefined') {
      offset = 0;
    }

    const tweets = await this.tweetModel.findAll({ offset, limit: this.limit });

    console.log(`${tweets.length} tweets found`);

    if (tweets.length === this.limit) {
      await this.cache.set('tweet-offset', offset + this.limit, {
        ttl: 1 * 60 * 10,
      });

      console.log(
        `Found ${this.limit} tweets, updating offset to ${offset + this.limit}`
      );
    }
  }
}
