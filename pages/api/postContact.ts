import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from "fs";

// name
// phoneNo
// email
// message



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data = JSON.stringify(req.body);
        console.log(data);
        fs.writeFile(`contactData/${req.body.name}.json`, data, (err) => {
            if (err) {
                res.status(500).json({ Message: "INTERNAL SERVER ERROR" })
            } else {
                res.status(200).json({ Message: "RECEIVED" });
            }
        });

    } else {
        res.status(200).json({ Message: "Send POST request" });
    }
}