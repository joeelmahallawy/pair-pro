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
    // if(req.method=='GET')
    // if (req.method == "POST") postUserToDB(req, users);
    const data = await req.body;
    res.status(200).json({ ...data });
  } catch (err: any) {
    res.status(404).json(err);
  }
};

export default handler;

// function getUserFromDB(req,res){

// }
async function postUserToDB(request: NextApiRequest, DB: Collection) {
  const data = await request.body;
  // const userId: ObjectId = request.body.id;
  // DB.insertOne({ _id: userId });
  DB.insertOne({ _id: data.id });
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
