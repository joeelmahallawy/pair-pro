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
    const matches = db.collection("matches");
    // users.deleteMany({});
    // Fetch posts from typeform responses API  then store it to MongoDB
    if (req.method === "POST") getPostsThenStoreToDB(req, res, users);
    if (req.method === "GET") getUserFromDB(req, res, users);
    if (req.method === "PUT") updateUser(req, res, users);
  } catch (err: any) {
    res.status(404).json({ err });
  }
};
export default handler;

async function getUserFromDB(
  req: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const { user } = req.headers;
  const data = await DB.findOne({ id: user });
  res.json({ data });
}

async function updateUser(
  req: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const { prefs } = JSON.parse(req.body);
  // DB.deleteOne({ id: prefs.id });
  // DB.deleteOne({})
  // DB.findOneAndReplace
  // DB.findOneAndDelete({ id: prefs.id });
  const data = await DB.findOneAndReplace({ id: prefs.id }, { prefs });
  // DB.insertOne({ ...prefs });
  res.send(data);
}
