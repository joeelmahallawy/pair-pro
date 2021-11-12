import { Collection } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const getPostsThenStoreToDB = async (
  request: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) => {
  try {
    const data = JSON.parse(request.body);
    DB.insertOne(data);
    res.status(200).json({});
  } catch (err) {
    res.status(404).json({ err: 1 });
  }
};

export default getPostsThenStoreToDB;
