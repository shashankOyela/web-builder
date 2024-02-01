import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import WebConfigurationModel from "../../models/WebConfiguration";
import { connectToMongo } from "@/mongo";

export async function GET() {
  await connectToMongo();
  try {
    const data = await WebConfigurationModel.find();
    return NextResponse.json({ data });
  } catch (error) {
    console.log("could not add data", error);
  }
}

export async function POST(request: Request, res: NextResponse) {
  const data = await request.json();

  try {
    console.log("resdfsflk request", request.body);
    await WebConfigurationModel.create(data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log("could not add data", error);
  }

  return NextResponse.json({ data });
}
