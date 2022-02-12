import PropTypes from 'prop-types';

import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  function handleNewCartItem(item) {
    setCartItems((prevState) => [
      {
        id: item.id,
        src: item.src,
        name: item.name,
        price: item.price.discountPrice,
      },
      ...prevState,
    ]);
  }

  function handleDeleteCartItem(name) {
    return setCartItems((prevState) => prevState.filter((item) => item.name !== name));
  }

  const cartValues = useMemo(
    () => ({ cartItems, handleDeleteCartItem, handleNewCartItem }),
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
