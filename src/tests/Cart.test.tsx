import { expect, it, vitest, describe } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Cart from "../pages/cart";
import { CartContext } from "@/providers/CartProvider";

describe("Cart", () => {
  it("should calculate final price correctly", () => {
    const mockedValues = {
      addToCart: vitest.fn(),
      updateQuantity: () => vitest.fn(),
      deleteProductFromCart: vitest.fn(),
      cartItems: [{ id: "123", quantity: 2, price: 29.99 }, { id: "321", quantity: 1, price: 45.74 }],
    };

    render(
      <CartContext.Provider value={mockedValues}>
        <Cart />
      </CartContext.Provider>
    );

    const finalPrice = screen.queryByTestId("final-price");
    expect(finalPrice?.textContent).to.have.equal("105.72");
  });

  it("should display correct info, when cart is empty", async () => {
    const mockedValues = {
      addToCart: vitest.fn(),
      updateQuantity: () => vitest.fn(),
      deleteProductFromCart: vitest.fn(),
      cartItems: [],
    };

    render(
      <CartContext.Provider value={mockedValues}>
        <Cart />
      </CartContext.Provider>
    );

    const info = await screen.findByText("No items in cart")
    expect(info).toBeInTheDocument();
  });
});
