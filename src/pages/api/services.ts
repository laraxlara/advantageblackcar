import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  image1: string;
  image2: string;
}

async function getData(): Promise<Service[]> {
  const filePath = path.join(
    process.cwd(),
    "src/components/services/services.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: Service[] = JSON.parse(jsonData);
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getData();
  res.status(200).json(data);
}
