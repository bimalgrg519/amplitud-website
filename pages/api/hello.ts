import type { NextApiRequest, NextApiResponse } from "next";

// Fake users data
const users: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default (_req: NextApiRequest, res: NextApiResponse<any[]>) => {
  // Get data from your database
  res.status(200).json(users);
};
