import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./ProductCard.module.css";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

interface IProductCard {
  id: string;
  title: string;
  price: number;
  imagePath: string;
}

export const ProductCard = ({ id, title, price, imagePath }: IProductCard) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const addProductToCart = () => {
    addToCart(id);
  };

  return (
    <div className={styles.container}>
      <Image src={imagePath} alt="product image" className={styles.image} width={100} height={250} crossOrigin="anonymous"/>
      <div className={styles.infoWrapper}>
        <span onClick={() => router.push(`/product/${id}`)}>{title}</span>
        <span>{price}</span>
      </div>
      <Button variant="contained" onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};
