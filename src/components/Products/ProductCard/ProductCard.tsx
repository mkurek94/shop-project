import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./ProductCard.module.css";
import { CartContext } from "@/providers/CartProvider";

interface IProductCard {
  id: string;
  title: string;
  price: number;
}

export const ProductCard = ({ id, title, price }: IProductCard) => {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const addProductToCart = () => {
    addToCart(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>Image</div>
      <div className={styles.infoWrapper}>
        <span onClick={() => router.push(`/product/${id}`)}>{title}</span>
        <span>{price}</span>
      </div>
      <Button variant="contained" onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};
