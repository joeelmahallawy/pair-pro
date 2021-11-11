import { Collection, MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

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

    if (req.method === "POST") postUserToDB(req, res, users);
    if (req.method === "GET") getUserFromDB(req, res, users);
  } catch (err: any) {
    res.status(404).json(err);
  }
};

export default handler;

async function getUserFromDB(
  req: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const data = await DB.findOne({ _id: req.headers._id });
  res.json({ data });
}
// TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
function postUserToDB(
  request: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const data = JSON.parse(request.body);
  DB.insertOne({ ...data, bare: 1 });
  res.json({ Status: "Success" });
}

// switch (req.method) {
//   case 'GET': {
//       return getPosts(req, res);
//   }

//   case 'POST': {
//       return addPost(req, res);
//   }

//   case 'PUT': {
//       return updatePost(req, res);
//   }

//   case 'DELETE': {
//       return deletePost(req, res);
//   }
// }
