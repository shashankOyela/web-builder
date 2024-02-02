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
    if (data?._id?.length > 0) {
      const { _id, ...restOfData } = data;
      const updatedRes = await WebConfigurationModel.findOneAndUpdate(
        { _id: data?._id },
        restOfData
      );
      return NextResponse.json({ data: updatedRes });
    } else {
      const createdRes = await WebConfigurationModel.create(data);
      return NextResponse.json({ data: createdRes });
    }
  } catch (error) {
    console.log("could not add data", error);
  }

  return NextResponse.json({ data });
}
