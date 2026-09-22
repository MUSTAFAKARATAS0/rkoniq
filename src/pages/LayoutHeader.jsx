import { useState, useEffect } from 'react';
import { ChevronDown, House, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/rklogo.webp';
import { productCategories, products } from '../data/products';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionItems = productCategories.map((category) => ({
    label: category.label,
    href: `/urunler#${category.slug}`
  }));

  const productDropdownItems = productCategories.map((category) => ({
    label: category.label,
    href: `/urunler#${category.slug}`,
    products: products.filter((product) => product.category === category.label)
  }));

  const navItems = [
    { label: 'Home', href: '/', icon: House },
    { label: 'Çözümler', href: '/cozumler', items: solutionItems },
    { label: 'Ürünler', href: '/urunler', items: productDropdownItems },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-7xl rounded-2xl border transition-colors duration-200 ${
        isScrolled
          ? 'border-slate-200 bg-white shadow-xl shadow-slate-900/5'
          : 'border-slate-200/80 bg-white shadow-lg shadow-slate-900/5'
      }`}>
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link to="/">
              <div className="flex-shrink-0">
            <img src={logo} alt="RKONIQ" width="200" height="40" decoding="async" className="h-10 w-50 object-contain" />
              </div>
            </Link>

          <nav className="hidden md:block">
            <div className="flex items-center gap-1 rounded-xl border border-slate-200/70 bg-slate-100/80 p-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.items && setOpenDropdown(null)}
                >
                  <div className="relative overflow-hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-white hover:text-emerald-700 sm:px-4">
                    <Link to={item.href} className="relative z-10 flex items-center gap-2">
                      {item.icon && <item.icon size={16} strokeWidth={2.2} />}
                      <span>{item.label}</span>
                      {item.items && <ChevronDown size={14} strokeWidth={2.2} />}
                    </Link>
                  </div>

                  {item.items && openDropdown === item.label && (
                    <div
                      className={`absolute top-full z-50 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 ${item.label === 'Ürünler' ? 'left-1/2 w-[min(90vw,900px)] -translate-x-1/2' : 'left-0 w-72'}`}
                    >
                      {item.label === 'Ürünler' ? (
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {item.items.map((category) => (
                            <div key={category.href} className="rounded-lg bg-slate-50 p-3">
                              <Link
                                to={category.href}
                                className="mb-2 block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {category.label}
                              </Link>
                              <div className="grid grid-cols-2 gap-1">
                                {category.products.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={`/urunler/${product.id}`}
                                    className="rounded px-2 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-white hover:text-emerald-700"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {product.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Link to="/iletisim">
              <button
              className="rounded-xl bg-emerald-700 px-5 py-2.5 font-medium text-white shadow-lg shadow-emerald-700/20 transition-colors duration-200 hover:bg-emerald-800"
            >
              Teklif Al
            </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-900 hover:text-emerald-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:bg-slate-100 hover:text-emerald-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon size={17} strokeWidth={2.2} />}
                    {item.label}
                    {item.items && <ChevronDown size={15} className="ml-auto" />}
                  </Link>
                  {item.items && (
                    <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">
                      {item.items.map((subItem) => (
                        <div key={subItem.href}>
                          <Link
                            to={subItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                          {subItem.products && (
                            <div className="grid grid-cols-2 gap-1 pl-3">
                              {subItem.products.map((product) => (
                                <Link
                                  key={product.id}
                                  to={`/urunler/${product.id}`}
                                  className="rounded px-2 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {product.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/iletisim" className="mt-4 block w-full rounded-xl bg-emerald-700 px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-emerald-800">
                Teklif Al
              </Link>
            </div>
          </div>
      )}
    </header>
  );
};

export default Header;
