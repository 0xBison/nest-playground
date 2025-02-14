import { Module } from '@nestjs/common';
import { BisonController } from './bison.controller';
import { BisonConfig } from './bison.config';
import { createConfigModule } from 'src/config-bison/config/config.module.config';
import './config/base.config';

@Module({
  imports: [createConfigModule()],
  controllers: [BisonController],
  providers: [BisonConfig],
})
export class BisonModule {}
