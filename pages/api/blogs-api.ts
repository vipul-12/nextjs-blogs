import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readdir("blogData", (error, data) => {
    res.status(200).json(data);
  });
}
