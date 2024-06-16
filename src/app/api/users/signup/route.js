import User from "@/models/userModel";
import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
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
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // const existName = await User.findOne({ username });
    // if (existName) {
    //   return NextResponse.json(
    //     { error: "Username already exists" },
    //     { status: 409 }
    //   );
    // }

    const fileName = `${Date.now()}-${userprofile.name}`;
    const filePath = path.join(process.cwd(), "Uploads", fileName);

   

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const isValidEmail = emailPattern.test(email);

    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const saveUserName=JSON.parse(username)


    const newUser = new User({
      userprofile: filePath,
      username:saveUserName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();


    return NextResponse.json({
      message: "User successfully registered",
      success: true,
      response: {
        username:savedUser.username,
        email: savedUser.email,
        userprofile: filePath,
      },
      id: savedUser._id,
      status: 200,
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    return NextResponse.json({
      error: "Something went wrong",
      status: 500,
    });
  }
}
