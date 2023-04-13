import type { NextApiRequest, NextApiResponse } from "next";
import { fullListPoc } from "@/mockup/test";

export default (_req: NextApiRequest, res: NextApiResponse<any>) => {
  res.status(200).json(fullListPoc);
};
