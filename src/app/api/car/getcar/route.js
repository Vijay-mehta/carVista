import { mongoConnect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Cars from "@/models/carModel";

mongoConnect();

export async function GET(request) {
  try {
    const response = await Cars.find();

    // Create a new response object to add CORS headers
    const corsResponse = NextResponse.json({ response, status: 200 });
    corsResponse.headers.set('Access-Control-Allow-Origin', '*');
    corsResponse.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    corsResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return corsResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}
