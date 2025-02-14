import { Module } from '@nestjs/common';
import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { BazConfig, FooConfig } from './foo.config';
import { ConfigTypedController } from './configtyped.contoller';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: FooConfig,
      load: dotenvLoader(),
    }),
    TypedConfigModule.forRoot({
      schema: BazConfig,
      load: dotenvLoader(),
    }),
  ],
  controllers: [ConfigTypedController],
})
export class ConfigTypedModule {}
