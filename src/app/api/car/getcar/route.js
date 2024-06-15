import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Cars from "@/models/carModel";
mongoConnect();

export async function GET() {
  try {
    const response = await Cars.find();

    return NextResponse.json({ response ,status:200});
  } catch (error) {
    console.log(error);
    console.log("Something want to wrong");
  }
}
