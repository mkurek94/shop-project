import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface IProductCard {
  id: string;
  title: string;
  price: number;
}

export const ProductCard = ({ id, title, price }: IProductCard) => {
  const router = useRouter();
  return (
    <div>
      <div>Image</div>
      <span onClick={() => router.push(`/product/${id}`)}>{title}</span>
      <span>{price}</span>
      <Button variant="contained">Add to cart</Button>
    </div>
  );
};
