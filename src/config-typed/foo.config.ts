import { IsString } from 'class-validator';

export class FooConfig {
  @IsString()
  foo!: string;
}
export class BazConfig {
  @IsString()
  baz!: string;
}
