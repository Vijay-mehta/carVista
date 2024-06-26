import User from "@/models/userModel";
import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import path from "path";
import bcrypt from "bcryptjs";
import fs from "fs";

mongoConnect();

export async function POST(req) {
  try {
    const reqBody = await req.formData();
    const username = reqBody.get("username");
    const email = reqBody.get("email");
    const password = reqBody.get("password");
    const userprofile = reqBody.get("userprofile"); 

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

    const fileName = `${Date.now()}-${userprofile.name}`;
    const dirPath = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(dirPath, fileName);


    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const fileBuffer = Buffer.from(await userprofile.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);


    const newUser = new User({
      userprofile: filePath,
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User successfully registered",
      success: true,
      response: {
        username: savedUser.username,
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
