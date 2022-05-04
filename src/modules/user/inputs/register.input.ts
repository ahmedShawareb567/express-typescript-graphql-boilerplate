import { InputType, Field, Int } from "type-graphql";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class RegisterInput {
  @IsNotEmpty()
  @MinLength(6)
  @Field(() => String)
  firstName: string;

  @MinLength(6)
  @IsNotEmpty()
  @Field(() => String)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @Field(() => String)
  phone: string;

  @IsNotEmpty()
  @Field(() => String)
  password: string;

  @IsNotEmpty()
  @Field(() => Int)
  age: number;

  @IsNotEmpty()
  @Field(() => String)
  profilePicture: number;
}
