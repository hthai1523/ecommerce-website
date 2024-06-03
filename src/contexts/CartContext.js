import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevItems) => {
      if (prevItems.find((prevItem) => prevItem.id === product.id) != null) return [...prevItems];
      return [...prevItems, { id: product?.id, quantity: 1, price: product?.price, title: product?.title, image: product?.image, rate: product?.rating?.rate }];
    });
  };

  const getItemQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (productId) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === productId) == null) {
        return [...currentItems, { productId, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (productId) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === productId)?.quantity === 1) {
        return currItems.filter((item) => item.id !== productId);
      } else {
        return currItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
