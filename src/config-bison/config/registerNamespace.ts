import {
  ConfigFactory,
  ConfigObject,
  registerAs as nestRegisterAs,
} from '@nestjs/config';

interface IConfigSchema {
  [key: string]: any;
}

interface IRegisteredConfigNamespaces {
  [key: string]: {
    schema: IConfigSchema;
    configValue: ConfigFactory<ConfigObject>;
  };
}

export const registeredConfigNamespaces: IRegisteredConfigNamespaces = {};

export const registerConfigAs = <T extends IConfigSchema>(
  key: string,
  schema: T,
  configValue: ConfigFactory<ConfigObject>,
) => {
  const registerMetadata = nestRegisterAs(key, configValue);
  registeredConfigNamespaces[key] = {
    schema,
    configValue: registerMetadata,
  };
  return registerMetadata;
};
