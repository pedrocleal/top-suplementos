import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import Home from './pages/Home';

export default function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
}
