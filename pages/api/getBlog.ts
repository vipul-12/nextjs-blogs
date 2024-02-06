// Endpoint => http://localhost:8000/api/getBlog?slug=Batman

import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (error, data) => {
    if (error) {
      res.status(500).json({ error: "Blog doesn't exist" });
    }

    res.status(200).json(JSON.parse(data));
  });
}
