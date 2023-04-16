import { productsInDb } from "@/mocks/productsResponse";
import { IProductDetails } from "@/types/product";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IProductDetails>>) {
  res.status(201).json(productsInDb);
}
