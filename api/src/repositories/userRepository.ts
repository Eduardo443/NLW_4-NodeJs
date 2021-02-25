import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../models/user";

@EntityRepository(User)
class userRepository extends Repository<User> {}

export { userRepository };