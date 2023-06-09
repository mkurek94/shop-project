import React, { useMemo } from "react";
import { getAvailabilityStatus } from "@/utils/getAvailabilityStatus";
import { getProductDetails } from "@/utils/getProductDetails";
import style from "./CartItem.module.css";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

interface ICartItemProps {
  productId: string;
  quantity: number;
  price: number;
}

export const CartItem = ({ productId, quantity, price }: ICartItemProps) => {
  const { updateQuantity } = useCart();
  const product = useMemo(() => {
    return getProductDetails(productId);
  }, [productId]);

  return (
    <>
      {product ? (
        <div className={style.container}>
          <div className={style.imageWrapper}>
          <Image
            src={product.imagePath}
            alt={product.title}
            fill
          />
          </div>
          <div className={style.title}>
            <h3>{product.title}</h3>
            <span>{getAvailabilityStatus(product.availability)}</span>
          </div>
          <div className={style.details}>
            <input
              type="number"
              defaultValue={quantity}
              onChange={(e) => {
                updateQuantity(Number(e.target.value), product.id);
              }}
            />
            <h3>{price}</h3>
          </div>
        </div>
      ) : null}
    </>
  );
};
