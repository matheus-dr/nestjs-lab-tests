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

  public async create(data: CreateTweetDto) {
    await this.tweetModel.create(data as any);
  }

  public async findAll() {
    return this.tweetModel.findAll();
  }

  public async findOne(id: number) {
    return this.tweetModel.findOne({ where: { id } });
  }

  public async update(id: number, data: UpdateTweetDto) {
    // await this.prisma.tweet.update({ where: { id }, data });
    await this.tweetModel.update(data, { where: { id } });
  }

  public async remove(id: number) {
    // await this.prisma.tweet.delete({ where: { id } });
    await this.tweetModel.destroy({ where: { id } });
  }
}
