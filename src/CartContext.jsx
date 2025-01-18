import { createContext, useState } from "react";
import data from "./data/data.json";

export const CartContext = createContext({
  items: [],
  getQuantity: () => {},
  addToCart: () => {},
  decrementQuantity: () => {},
  removeItemFromCart: () => {},
  totalPriceOfTheCart: () => {},
  totalNumOfItems: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function getQuantity(id) {
    const quantity = cartProducts.find(
      (dessert) => dessert.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    } else {
      return quantity;
    }
  }

  function addToCart(id, dessert) {
    const quantity = getQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          ...dessert,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((dessert) =>
          dessert.id === id
            ? { ...dessert, quantity: dessert.quantity + 1 }
            : dessert
        )
      );
    }
  }
  function decrementQuantity(id) {
    const quantity = getQuantity(id);

    if (quantity == 1) {
      removeItemFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((dessert) =>
          dessert.id === id
            ? { ...dessert, quantity: dessert.quantity - 1 }
            : dessert
        )
      );
    }
  }

  function removeItemFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function totalPriceOfTheCart() {
    let totalcost = 0;
    cartProducts.map((dessert) => {
      totalcost += dessert.price * dessert.quantity;
    });
    return totalcost;
  }
  function totalNumOfItems() {
    const numOfItems = cartProducts.reduce(
      (sum, products) => sum + products.quantity,
      0
    );
    return numOfItems;
  }
  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        getQuantity,
        addToCart,
        decrementQuantity,
        removeItemFromCart,
        totalPriceOfTheCart,
        totalNumOfItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
