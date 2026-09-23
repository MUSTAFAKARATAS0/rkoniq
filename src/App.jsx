import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/layout/Footer.jsx';
import ToastHost from './components/ui/ToastHost.jsx';

const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Solutions = lazy(() => import('./pages/Solutions.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Yükleniyor" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cozumler" element={<Solutions />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/urunler/:productId" element={<ProductDetail />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <ToastHost />
      </div>
    </Router>
  );
}
