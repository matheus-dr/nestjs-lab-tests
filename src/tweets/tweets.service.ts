import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Tweet } from './entities/tweet.entity';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet
  ) {}

  async create(data: CreateTweetDto) {
    await this.tweetModel.create(data as any);
  }

  async findAll() {
    return this.tweetModel.findAll();
  }

  async findOne(id: number) {
    const tweet = await this.tweetModel.findOne({ where: { id } });

    if (!tweet) {
      throw new Error('Tweet not found');
    }

    return tweet;
  }

  async update(id: number, data: UpdateTweetDto) {
    await this.tweetModel.update(data, { where: { id } });
  }

  async remove(id: number) {
    await this.tweetModel.destroy({ where: { id } });
  }
}
