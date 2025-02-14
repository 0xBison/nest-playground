import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { BaseEnvironmentVariables } from './base.config';

export function validateConfig(
  variablesClass: ClassConstructor<BaseEnvironmentVariables>,
  config: Record<string, unknown>,
) {
  const validatedConfig = plainToClass(variablesClass, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
