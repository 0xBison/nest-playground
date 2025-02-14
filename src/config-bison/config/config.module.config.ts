import { ConfigModule } from '@nestjs/config';
import { registeredConfigNamespaces } from './registerNamespace';
import { validateConfig } from './validateConfig';

export const createConfigModule = () =>
  ConfigModule.forRoot({
    load: Object.values(registeredConfigNamespaces).map((e) => e.configValue),
    validate: (config: Record<string, unknown>): Record<string, unknown> => {
      Object.values(registeredConfigNamespaces).forEach((e) =>
        // @ts-ignore TODO: type this
        validateConfig(e.schema, config),
      );
      return config;
    },
    envFilePath: process.env.NODE_ENV === 'test' ? ['.env.test'] : undefined,
    isGlobal: true,
  });
