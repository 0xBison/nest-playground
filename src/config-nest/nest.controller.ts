import { Controller, Get } from '@nestjs/common';
import { NestConfigService } from './nest.service';

@Controller()
export class NestController {
  constructor(private nestConfigService: NestConfigService) {}

  @Get('config-test')
  getTest() {
    return this.nestConfigService.getTestA();
  }
}
