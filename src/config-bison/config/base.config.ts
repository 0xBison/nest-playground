import { IsNumber, IsString } from 'class-validator';
import { registerConfigAs } from './registerNamespace';

export class BaseEnvironmentVariables {
  @IsString()
  BASE_STRING: string;

  @IsNumber()
  BASE_NUMBER: number;
}

export const configFunction = () => ({
  baseString: process.env.BASE_STRING,
  baseNumber: Number(process.env.BASE_NUMBER),
});

export type environmentVariablesExampleType = typeof configFunction;

export default registerConfigAs(
  'base',
  BaseEnvironmentVariables,
  configFunction,
);
