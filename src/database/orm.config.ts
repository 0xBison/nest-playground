import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DatabaseConfig } from './database.config';
import { DataSource } from 'typeorm';
import { JsonStoreEntity, CreateJsonStore1710000000000 } from 'nest-json-store';

export const typeOrmModuleOptions = (databaseConfig: DatabaseConfig) => ({
  type: 'postgres' as const,
  host: databaseConfig.SQL_HOST,
  port: databaseConfig.SQL_PORT,
  username: databaseConfig.SQL_USERNAME,
  password: databaseConfig.SQL_PASSWORD,
  database: databaseConfig.SQL_DB,
  migrations: [
    __dirname + '/migrations/**/*{.ts,.js}',
    CreateJsonStore1710000000000,
  ],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  migrationsRun: true,
  subscribers: [],
  schema: databaseConfig.SQL_SCHEMA,
  entities: [__dirname + '/../**/*.entity{.ts,.js}', JsonStoreEntity],
});

export const initializeSchema = async (config: DatabaseConfig) => {
  const dataSource = new DataSource({
    ...typeOrmModuleOptions(config),
    type: 'postgres',
    schema: 'public',
    synchronize: false,
    migrationsRun: false,
    dropSchema: false,
  });

  await dataSource.initialize();
  await dataSource.query(`CREATE SCHEMA IF NOT EXISTS ${config.SQL_SCHEMA};`);
  await dataSource.destroy();
};

export default typeOrmModuleOptions;
