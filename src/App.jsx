import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { ToastHost } from './lib/toast.jsx';

const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Solutions = lazy(() => import('./pages/Solutions.jsx'));
const ProductSection = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white text-gray-900 dark:text-gray-50">
        <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Yükleniyor" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cozumler" element={<Solutions />} />
            <Route path="/urunler" element={<ProductSection />} />
            <Route path="/urunler/:productId" element={<ProductDetail />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastHost />
      </main>
    </Router>
  );
}
