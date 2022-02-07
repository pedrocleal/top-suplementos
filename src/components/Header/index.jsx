import { useState } from 'react';
import logo from '../../assets/images/Logo.svg';
import cart from '../../assets/images/Carrinho.svg';
import searchIcon from '../../assets/images/Search.svg';
import {
  Container, SearchContainer, SearchInput, Cart,
} from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>

      <SearchContainer>
        <SearchInput
          placeholder="Encontre um suplemento"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <Link to={`/search/${search}`}>
          <img src={searchIcon} alt="Pesquisar" />
        </Link>
      </SearchContainer>

      <Cart>
        <img src={cart} alt="Carrinho" />
      </Cart>
    </Container>
  );
}
