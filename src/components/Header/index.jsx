import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';

import logo from '../../assets/images/icons/Logo.svg';
import cartIcon from '../../assets/images/icons/Carrinho.svg';
import searchIcon from '../../assets/images/icons/Search.svg';

import {
  Container, SearchContainer, SearchInput, CartContainer,
} from './styles';

import Cart from '../Cart';

import { CartContext } from '../../context/CartContext';

export default function Header() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(false);

  let navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  const itemsCounter = cartItems.length;

  function handleSearchClick() {
    if (!search) {
      return;
    }
    let path = `/search/${search}`;
    navigate(path);
  }

  return (
    <>
      <Cart isOpen={cart} setCart={setCart} />
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <SearchContainer>
          <SearchInput
            placeholder="Encontre um suplemento"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button onClick={handleSearchClick} type="button" disabled={!search}>
            <img src={searchIcon} alt="Pesquisar" />
          </button>
        </SearchContainer>

        <CartContainer onClick={() => setCart((prevState) => !prevState)}>
          <img src={cartIcon} alt="Carrinho" />
          <span>{itemsCounter}</span>
        </CartContainer>
      </Container>
    </>
  );
}
