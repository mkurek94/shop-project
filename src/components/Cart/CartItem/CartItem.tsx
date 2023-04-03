import React, { useMemo, useContext } from "react";
import { IProductDetails } from "@/types/product";
import { getAvailabilityStatus } from "@/utils/getAvailabilityStatus";
import { getProductDetails } from "@/utils/getProductDetails";
import style from "./CartItem.module.css";
import { CartContext } from "@/providers/CartProvider";

interface ICartItemProps {
  productId: string;
  quantity: number;
  price: number;
}

export const CartItem = ({ productId, quantity, price }: ICartItemProps) => {
  const { updateQuantity } = useContext(CartContext);
  const product = useMemo(() => {
    return getProductDetails(productId);
  }, [productId]);

  return (
    <>
      {product ? (
        <div className={style.container}>
          <img
            src={product.image}
            alt={product.title}
            className={style.image}
          />
          <div className={style.title}>
            <h3>{product.title}</h3>
            <span>{getAvailabilityStatus(product.availibility)}</span>
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
