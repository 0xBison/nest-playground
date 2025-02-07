import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitInfoModule } from 'nest-git-info';

@Module({
  imports: [
    GitInfoModule.register({
      // Controller configuration
      routePath: 'version', // Custom endpoint path (default: 'git-info')
      swaggerTag: 'Version Info', // Custom Swagger documentation tag (default: 'git-info')

      // Feature flags
      disableSwagger: false, // Disable Swagger documentation (default: false)
      disableController: false, // Disable the controller entirely (default: false)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
