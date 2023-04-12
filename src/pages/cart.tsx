import styles from "@/styles/Cart.module.css";
import { useContext, useMemo } from "react";
import { CartContext } from "@/providers/CartProvider";
import { CartItem } from "@/components/Cart/CartItem/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const finalPrice = useMemo(() => {
    let finalPrice = 0;
    cartItems.forEach((product) => {
      finalPrice += product.price * product.quantity;
    });
    return finalPrice;
  }, [cartItems]);


  return (
    <div className={styles.container}>
      <h1>Your cart</h1>

      <div className={styles.cartItemsContainer}>
        {cartItems.length ? cartItems.map((product) => (
          <CartItem
            productId={product.id}
            key={product.id}
            quantity={product.quantity}
            price={product.price}
          />
        )) : (<h3>No items in cart</h3>)}
      </div>

      <h3>Final price: <span data-testid="final-price">{finalPrice}</span></h3>
    </div>
  );
};

export default Cart;
