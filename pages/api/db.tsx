import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

import { NextApiRequest, NextApiResponse } from "next";

type Database = {
  users: object[];
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, "db.json");
    const adapter = new JSONFile<Database>(file);
    const db = new Low<Database>(adapter);
    await db.read();

    db.data = { users: [] };

    await db.write();
    res.status(200).json(db.data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export default handler;
