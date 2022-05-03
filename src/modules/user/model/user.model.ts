import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  second: string;
}
