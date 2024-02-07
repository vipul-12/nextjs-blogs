import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default async function handlEr(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let blogs: Object[] = [];
    let files = await fs.promises.readdir("blogData");
    for (let i = 0; i < files.length; i++) {
      const item = files[i];
      let blogContent = await fs.promises.readFile(`blogData/${item}`, "utf-8");
      let blog = JSON.parse(blogContent);

      blogs.push(blog);
    }
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
