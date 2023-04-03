import React, {
  createContext,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { ICartItem } from "@/types/cart";
import { getProductDetails } from "@/utils/getProductDetails";

interface ICartContextValue {
  cartItems: ICartItem[];
  addToCart: (productId: string) => void;
  deleteProductFromCart: (productId: string) => void;
  updateQuantity: (quantity: number, productId: string) => void;
}

interface CartProviderProps {
  children: ReactElement | ReactElement[];
}

export const CartContext = createContext<ICartContextValue>(
  {} as ICartContextValue
);

export const CartProvier = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = useCallback(
    (productId: string) => {
      const productDetails = getProductDetails(productId);
      const productInCart = cartItems.find(
        (product) => product.id === productId
      );
      if (productDetails) {
        if (productInCart) {
          productInCart.quantity++;
          setCartItems([...cartItems]);
        } else {
          setCartItems([
            ...cartItems,
            { id: productId, quantity: 1, price: productDetails?.price },
          ]);
        }
      }
    },
    [cartItems]
  );

  const updateQuantity = useCallback(
    (quantity: number, productId: string) => {
      const productInCart = cartItems.find(
        (product) => product.id === productId
      );
      if (quantity === 0) {
        deleteProductFromCart(productId);
      } else if (productInCart) {
        productInCart.quantity = quantity;
        setCartItems([...cartItems]);
      }
    },
    [cartItems]
  );

  const deleteProductFromCart = useCallback(
    (productId: string) => {
      const productInCart = cartItems.find(
        (product) => product.id === productId
      );
      setCartItems((prev) =>
        prev.filter((product) => product !== productInCart)
      );
    },
    [cartItems]
  );

  const value = {
    addToCart,
    cartItems,
    updateQuantity,
    deleteProductFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
