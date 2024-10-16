import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import Home from './pages/Home';
import App from './App';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext.jsx'; // Import CartProvider
import Checkout from './pages/Checkout.jsx';
import Blog from './pages/Blog.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import ProductComparison from './pages/ProductComparison.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Blog />,
        path: '/blog',
      },
      {
        element: <Cart />,
        path: '/cart',
      },
      {
        element: <Checkout />,
        path: '/checkout',
      },
      {
        element: <ProductComparison />,
        path: '/comparison',
      },
      {
        element: <Contact />,
        path: '/contact',
      },
      {
        element: <Shop />,
        path: '/shop',
      },
      {
        element: <Product />,
        path: '/shop/:id',
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
