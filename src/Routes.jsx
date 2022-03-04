import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound/NotFound';
import Checkout from './pages/Checkout';

export default function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
