import { Users } from "@/app/database/entities";
import { LoginRequest } from "../interfaces";

export class AuthRepository {
  async findByCondition(data: LoginRequest) {
    const user = await Users.findOne({
      where: {
        Email: data.email,
        DeletedAt: null,
      },
      raw: true,
    });

    return user;
  }
}
