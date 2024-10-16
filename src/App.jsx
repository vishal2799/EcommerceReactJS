import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import { useCart } from './context/CartContext';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const { isCartOpen, toggleCart } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      toggleCart();
    }
  }, [location]);

  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
        <ShoppingCart />
        <ScrollRestoration />
      </main>
    </>
  );
}

export default App;
