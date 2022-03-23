import PropTypes from 'prop-types';

import {
  createContext, useMemo, useState, useEffect,
} from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const [total, setTotal] = useState('00,00');

  const itemsPrice = cartItems.map((item) => Number(item.price.replace(',', '.') * item.counter));

  // This useEffect is for update the cart items on localStorage every time when cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // This useEffect is for calculate the totalAmount when a new item is add
  useEffect(() => {
    const totalAmount = itemsPrice.reduce((prev, index) => prev + index, 0);
    setTotal(totalAmount.toFixed(2).replace('.', ','));
  }, [cartItems]);

  function handleDeleteCartItem(name) {
    return setCartItems((prevState) => prevState.filter((item) => item.name !== name));
  }

  function handleDeleteCartItemById(id) {
    return setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  }

  function handleItemsCounterPlus(id) {
    return setCartItems((prevState) => prevState.map((item) => (
      item.id === id
        ? {
          ...item,
          counter: item.counter + 1,
        } : item
    )));
  }

  function handleItemsCounterMinus(id) {
    const clickedItem = cartItems.find((item) => item.id === id);

    if (clickedItem.counter === 1) {
      handleDeleteCartItemById(id);
    }
    return setCartItems((prevState) => prevState.map((item) => (
      item.id === id
        ? {
          ...item,
          counter: item.counter - 1,
        } : item
    )));
  }

  function handleNewCartItem(item) {
    const clickedItem = cartItems.find((index) => index.id === item.id);

    if (!clickedItem) {
      setCartItems((prevState) => [
        {
          id: item.id,
          src: item.src,
          name: item.name,
          price: item.price.discountPrice,
          counter: item.counter + 1,
        },
        ...prevState,
      ]);
    } else {
      handleItemsCounterPlus(item.id);
    }
  }

  const cartValues = useMemo(
    () => ({
      cartItems, handleDeleteCartItem, handleNewCartItem, handleItemsCounterPlus, handleItemsCounterMinus, total, setTotal,
    }),
    [cartItems, handleDeleteCartItem, handleNewCartItem, total],
  );

  return (
    <CartContext.Provider value={cartValues}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
