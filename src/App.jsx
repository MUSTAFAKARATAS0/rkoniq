    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Home from './pages/Home.jsx';
    import NotFound from './pages/NotFound.jsx';
    import Solutions from './pages/Solutions.jsx';
    import ProductSection from './pages/Products.jsx';
    import ProductDetail from './pages/ProductDetail.jsx';
    import About from './pages/About.jsx';
    import ContactPage from './pages/ContactPage.jsx';

    export default function App() {
      return (
        <Theme appearance="inherit" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen bg-white text-gray-900  dark:text-gray-50">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cozumler" element={<Solutions />} />
                <Route path="/urunler" element={<ProductSection />} />
                <Route path="/urunler/:productId" element={<ProductDetail />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/iletisim" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
              />
            </main>
          </Router>
        </Theme>
      );
    }