import connectToDatabase from "@/mongo";
import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import React from "react";
import WebConfigurationSchema from "../../models/WebConfiguration";

export async function GET() {
  return NextResponse.json({ hello: "world" });
}

export async function POST(request: Request, res: NextResponse) {
  const MONGODB_URI = process.env.MONGO_URI || "";
  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db could not be connected");
  }

  const data = await request.json();
  console.log("data", data);

  try {
    await WebConfigurationSchema.create(data);
    console.log("data added");
    return NextResponse.json({ message: "data added", data });
  } catch (error) {
    console.log("could not add data");
  }

  return NextResponse.json({ data });
}

// export async function handler(req: any, res: any) {
//   try {
//     const { client, db } = await connectToDatabase();
//     // Perform database operations using 'db'
//     console.log("dsflkjkdjfslk", client);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// }

// mongoose
//   .connect(
//     "mongodb+srv://shashankverma:JVwfOU4BHYtrTpM8@bookstore.n3ctzdc.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     const PORT = process.env.PORT || 5000;
//     console.log("database connected");
//     app.listen(PORT, () => {
//       console.log(`listening on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("database could not be connected", error);
//   });
