import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import './database.config';
import { DatabaseConfig } from './database.config';
import { initializeSchema, typeOrmModuleOptions } from './orm.config';
import { dotenvLoader, TypedConfigModule } from 'nest-typed-config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        TypedConfigModule.forRoot({
          schema: DatabaseConfig,
          load: dotenvLoader(),
        }),
      ],
      inject: [DatabaseConfig],
      useFactory: async (config: DatabaseConfig) => {
        await initializeSchema(config);
        return typeOrmModuleOptions(config);
      },
    }),
  ],
})
export class DatabaseModule {}
