import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from './LayoutHeader';
import Footer from './LayoutFooter';
import { products } from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const { state } = useLocation();
  const product = state?.project || products.find((item) => String(item.id) === productId);

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center px-4 pt-24">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-zinc-900">Ürün bulunamadı</h1>
            <Link to="/urunler" className="text-emerald-700 hover:text-emerald-800">
              Ürünlere dön
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white px-4 pb-24 pt-32 sm:px-6 lg:px-8">
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
                src={product.image}
                alt={product.title}
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
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-600">
                  {product.description}
                </p>
              )}

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
      </main>
      <Footer />
    </>
  );
}
