import { Controller, Get, Inject } from '@nestjs/common';
import bisonConfig, { BisonConfigType } from './bison.config';
import { ConfigType } from '@nestjs/config';

@Controller('config-bison')
export class BisonController {
  constructor(
    @Inject(bisonConfig.KEY)
    private config: ConfigType<BisonConfigType>,
  ) {}

  @Get()
  getTest() {
    return this.config.bisonTestNumber;
  }
}
