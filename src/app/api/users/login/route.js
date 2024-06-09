import User from "@/models/userModel";
import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";

mongoConnect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 409 });
    } else if (!password) {
      return NextResponse.json(
        { error: "password is required" },
        { status: 409 }
      );
    }

    const userNotExist = await User.findOne({ email });
    if (!userNotExist) {
      return NextResponse.json({ error: "User Not Found" }, { status: 400 });
    }

    const newUser = User({
      email,
      password,
    });
    const saveUser = await newUser.save();

    return NextResponse.json({
      message: "User Login Successfully",
      success: true,
      response: {
        email: saveUser.email,
        status: 200,
      },
    });
  } catch (error) {
    console.log(`something want to wrong ${error}`);
    return NextResponse.json({
      error: "Something want to wrong ",
      status: 500,
    });
  }
}
