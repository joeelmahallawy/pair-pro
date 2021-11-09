import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = `mongodb://mongo:${process.env.NEXT_PUBLIC_MONGO_URL}@containers-us-west-2.railway.app:5624`;
    const client = new MongoClient(url);

    await client.connect();
    // Database name 'mydb'
    const db = client.db("mydb");
    if (!db) throw Error("Could not connect to database");
    // Select collection to edit
    const users = db.collection("users");
    users.insertOne({ firstName: "John", lastName: "Doe" });

    res.status(200).json(db);
  } catch (err: any) {
    res.status(404).json(err);
  }
};

export default handler;
