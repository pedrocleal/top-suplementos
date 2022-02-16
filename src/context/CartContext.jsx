import PropTypes from 'prop-types';

import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

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

    if (clickedItem.counter === 0) {
      return 1;
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

  function handleDeleteCartItem(name) {
    return setCartItems((prevState) => prevState.filter((item) => item.name !== name));
  }

  const cartValues = useMemo(
    () => ({
      cartItems, handleDeleteCartItem, handleNewCartItem, handleItemsCounterPlus, handleItemsCounterMinus,
    }),
    [cartItems, handleDeleteCartItem, handleNewCartItem],
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
