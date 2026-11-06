import { NextResponse } from "next/server";
import { login } from "./command.service";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const result = await login(email, password);

    const response = NextResponse.json({
      user: result.user,
      token: result.token,
    });

    response.cookies.set("token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
