import { useState } from 'react';
import { ArrowLeft, Check, CheckCircle2 } from 'lucide-react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout.jsx';
import { products } from '../data/products';
import { getProductImage } from '../data/productImages';

const SELECTED_PRODUCTS_KEY = 'rkoniq-selected-products';

export default function ProductDetail() {
  const { productId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.project || products.find((item) => String(item.id) === productId);
  const [isSelected, setIsSelected] = useState(() => {
    try {
      const selectedProducts = JSON.parse(sessionStorage.getItem(SELECTED_PRODUCTS_KEY) || '[]');
      return Boolean(product && selectedProducts.includes(product.id));
    } catch {
      return false;
    }
  });

  const toggleProductSelection = () => {
    setIsSelected((selected) => {
      const storedProducts = JSON.parse(sessionStorage.getItem(SELECTED_PRODUCTS_KEY) || '[]');
      const nextSelected = selected
        ? storedProducts.filter((id) => id !== product.id)
        : [...new Set([...storedProducts, product.id])];

      sessionStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(nextSelected));
      return !selected;
    });
  };

  if (!product) {
    return (
      <PageLayout mainClassName="flex min-h-screen items-center justify-center px-4 pt-24">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-zinc-900">Ürün bulunamadı</h1>
          <Link to="/urunler" className="text-emerald-700 hover:text-emerald-800">
            Ürünlere dön
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout mainClassName="bg-white px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/urunler"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          <ArrowLeft size={17} />
          Ürünlere dön
        </Link>

        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/10">
          {product.image && (
            <img
              src={getProductImage(product)}
              alt={product.title}
              width="1200"
              height="600"
              fetchPriority="high"
              decoding="async"
              className="h-72 w-full object-cover sm:h-96"
            />
          )}
          <div className="p-6 sm:p-10">
            {product.category && (
              <span className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                {product.category}
              </span>
            )}
            <h1 className="mb-5 text-3xl font-bold text-zinc-900 sm:text-5xl">{product.title}</h1>
            {product.description && (
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-600">{product.description}</p>
            )}

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={toggleProductSelection}
                className={`inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-colors ${
                  isSelected
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-emerald-700 text-white hover:bg-emerald-800'
                }`}
              >
                {isSelected && <Check className="mr-2 h-5 w-5" />}
                {isSelected ? 'Ürün seçildi' : 'Ürünü seç'}
              </button>

              <button
                type="button"
                disabled={!isSelected}
                onClick={() =>
                  navigate('/iletisim', {
                    state: { selectedProducts: [product.title] },
                  })
                }
                className="inline-flex items-center rounded-xl border border-emerald-700 px-6 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
              >
                Teklif al
              </button>
            </div>

            {product.results && product.tech && (
              <div className="grid gap-8 border-t border-slate-100 pt-8 sm:grid-cols-2">
                <div>
                  <h2 className="mb-3 text-lg font-semibold text-zinc-900">Öne çıkan sonuç</h2>
                  <p className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={18} />
                    {product.results}
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-lg font-semibold text-zinc-900">Teknolojiler</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span key={tech} className="rounded bg-slate-100 px-3 py-1 text-sm text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
