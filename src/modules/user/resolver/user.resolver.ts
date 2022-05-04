import { Ctx, Query, Resolver, Arg, Mutation } from "type-graphql";
import { UserModel } from "../model/user.model";
import { RegisterInput } from "../inputs/register.input";

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => UserModel, { nullable: true })
  getUser(@Arg("input") input: RegisterInput, @Ctx("currentUser") user) {
    return {
      id: "4656",
      firstName: "Ahmed",
      second: "Shawareb",
    };
  }

  @Mutation(() => UserModel, { nullable: true })
  register(@Arg("input") input: RegisterInput) {
    return null;
  }
}
