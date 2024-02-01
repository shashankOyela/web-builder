import mongoose from "mongoose";

const customApiPost = async ({ endPoint, bodyData }: any) => {
  try {
    const response = await fetch(`/${endPoint}`, {
      method: "POST",
      body: JSON.stringify(bodyData),
    });

    const resResponse = await response.json();

    return resResponse;
  } catch (error) {
    console.log("custom api error", error);
  }
};

const customApiGet = async ({ endPoint }: any) => {
  try {
    const response = await fetch(`/${endPoint}`, {
      method: "GET",
    });

    const resResponse = await response.json();

    return resResponse;
  } catch (error) {
    console.log("custom api error", error);
  }
};

const connectToMongo = async () => {
  const MONGODB_URI = process.env.MONGO_URI || "";
  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db could not be connected", error);
  }
};

export { customApiPost, customApiGet, connectToMongo };
