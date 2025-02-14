import { IsNumber, IsString } from 'class-validator';
import { registerConfigAs } from 'src/config-bison/config/registerNamespace';

export class BisonConfig {
  @IsNumber()
  BISON_TEST_NUMBER: number;

  @IsString()
  BISON_TEST_STRING: string;
}

const configFunction = () => ({
  bisonTestNumber: Number(process.env.BISON_TEST_NUMBER),
  bisonTestString: process.env.BISON_TEST_STRING,
});

export const bisonConfigKey = 'bison';

export default registerConfigAs(bisonConfigKey, BisonConfig, configFunction);

export type BisonConfigType = typeof configFunction;
