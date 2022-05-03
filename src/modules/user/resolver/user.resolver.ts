import { Ctx, Query, Resolver } from "type-graphql";
import { UserModel } from "../model/user.model";

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => String)
  getUser(@Ctx("currentUser") user) {
    return "test query";
  }
}
