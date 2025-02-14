import { ConfigModule } from '@nestjs/config';
import { NestController } from './nest.controller';
import { NestConfigService } from './nest.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule],
  providers: [NestConfigService],
  controllers: [NestController],
})
export class NestConfigModule {}
