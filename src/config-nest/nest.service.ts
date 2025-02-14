import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NestConfigService {
  constructor(private configService: ConfigService) {}

  getTestA() {
    return this.configService.get<boolean>('TEST_A');
  }
}
