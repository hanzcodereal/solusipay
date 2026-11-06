import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { UserTokenPayload } from "@utils/auth";
import { Users } from "@/app/database/entities";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ isLogin: false }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!,
      ) as UserTokenPayload;

      const user = await Users.findOne({
        where: { Id: decoded.id, DeletedAt: null },
        attributes: ["Id", "Name", "Username", "Email"],
        raw: true,
      });

      if (!user) {
        return NextResponse.json({ isLogin: false }, { status: 401 });
      }

      return NextResponse.json({
        isLogin: true,
        user: {
          name: user.Name,
        },
      });
    } catch {
      return NextResponse.json({ isLogin: false }, { status: 401 });
    }
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
