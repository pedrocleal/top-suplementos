import PropTypes from 'prop-types';

import { createContext, useState } from 'react';

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

  return (
    <CartContext.Provider value={{
      cartItems,
      onAddItemToCart: handleNewCartItem,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
