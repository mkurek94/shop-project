import React from "react";
import { Button } from "@mui/material";
import styles from "./ProductCard.module.css";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  id: string;
  title: string;
  price: number;
  imagePath: string;
  key: string;
}

export const ProductCard = ({ id, title, price, imagePath, key }: IProductCard) => {
  const { addToCart } = useCart();

  const addProductToCart = () => {
    addToCart(id);
  };

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt="product image"
          className={styles.image}
          fill
          crossOrigin="anonymous"
        />
      </div>
      <Link href={`/product/${id}`}>{title}</Link>
      <span>{price}</span>
      <Button variant="contained" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};
