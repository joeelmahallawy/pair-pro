import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export default withApiAuthRequired(function ProtectedRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession(req, res);
  const user = session.user;
});
