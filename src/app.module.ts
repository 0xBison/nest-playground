import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestConfigModule } from './config-nest/nest.module';
import { BisonModule } from './config-bison/bison.module';
import { ConfigTypedModule } from './config-typed/typedconfig.module';

@Module({
  imports: [NestConfigModule, BisonModule, ConfigTypedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
