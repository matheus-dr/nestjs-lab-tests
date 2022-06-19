import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('database.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('database.host'));
  }

  get username(): string {
    return this.configService.get<string>('database.username');
  }

  get password(): string {
    return this.configService.get<string>('database.password');
  }

  get databaseName(): string {
    return this.configService.get<string>('database.databaseName');
  }
}
