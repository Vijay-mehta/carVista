import User from "@/models/userModel";
import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import path from "path";
import bcrypt from "bcryptjs";

mongoConnect();
export async function POST(req) {
  try {
    const reqBody = await req.formData();
    const userprofile = reqBody.get("userprofile");
    const username = reqBody.get("username");
    const email = reqBody.get("email");
    const password = reqBody.get("password");

    const fields = {
      userprofile,
      username,
      email,
      password,
    };

    for (const [field, value] of Object.entries(fields)) {
      if (!value) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 409 }
      );
    }

    const existName = await User.findOne({ username });
    if (existName) {
      return NextResponse.json(
        { error: "username already exist" },
        { status: 409 }
      );
    }
    const fileName = `${Date.now()}-${userprofile.name}`;
    const filePath = path.join(process.cwd(), "Uploads", fileName);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gamil\.(com|\.)$/;
    const isValidEmail = emailPattern.test(email);

    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);

    const hasPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userprofile: filePath,
      username,
      email,
      password: hasPassword,
    });

    const savedUser = await newUser.save();
    let parsename = JSON.parse(savedUser.username);
    return NextResponse.json({
      message: "user successfully register",
      success: true,
      response: {
        username: parsename,
        email: savedUser.email,
        userprofile: filePath,
      },
      id: savedUser._id,
      status: 200,
    });
  } catch (error) {
    console.log(`Something want to wrong ${error}`);
    return NextResponse.json({
      error: "Something want to wrong",
      status: 500,
    });
  }
}
