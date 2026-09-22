import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-7xl font-bold text-emerald-500">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Sayfa bulunamadı</h1>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
