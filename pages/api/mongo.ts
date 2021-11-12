import { Collection, MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import getPostsThenStoreToDB from "../../helpers/api/getPostsStoreToDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = `mongodb://mongo:${process.env.NEXT_PUBLIC_MONGO_URL}@containers-us-west-2.railway.app:5624`;
    const client = new MongoClient(url);

    await client.connect();
    // Database name 'mydb'
    const db = client.db("test");
    if (!db) throw Error("Could not connect to database");
    const users = db.collection("users");
    // users.deleteMany({});
    // Fetch posts from typeform responses API  then store it to MongoDB
    if (req.method === "POST") getPostsThenStoreToDB(req, res, users);
    if (req.method === "GET") console.log("hi");

    //  getUserFromDB(req, res, users);
  } catch (err: any) {
    res.status(404).json({ err });
  }
};

export default handler;

// async function getUserFromDB(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   DB: Collection
// ) {
//   // const data = await DB.findOne({ _id: req.headers._id });
//   res.json({ data: 1 });
// }
