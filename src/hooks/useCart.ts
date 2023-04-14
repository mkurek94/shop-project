import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error(`useCart must be used within a CartContext`);
  }

  return context;
};
