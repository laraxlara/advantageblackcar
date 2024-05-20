import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const data = await response.json();

  res.status(200).json(data);
};
