import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  async create(@Body() data: CreateTweetDto) {
    return this.tweetsService.create(data);
  }

  @Get()
  async findAll() {
    return this.tweetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tweetsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTweetDto) {
    return this.tweetsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tweetsService.remove(+id);
  }
}
