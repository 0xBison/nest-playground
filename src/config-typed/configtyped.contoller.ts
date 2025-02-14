import { Controller, Get } from '@nestjs/common';
import { FooConfig, BazConfig } from './foo.config';

@Controller('config-typed')
export class ConfigTypedController {
  constructor(
    private fooConfig: FooConfig,
    private bazConfig: BazConfig,
  ) {}

  @Get()
  getTest() {
    return this.fooConfig.foo + ', ' + this.bazConfig.baz;
  }
}
