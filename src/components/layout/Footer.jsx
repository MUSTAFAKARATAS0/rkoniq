import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { toast } from '../../lib/toast.js';
import { footerLinks } from '../../data/navigation';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get('email')?.toString().trim() || '';

    if (!EMAIL_PATTERN.test(email)) {
      setEmailError('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Bültenimize başarıyla abone oldunuz!');
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-zinc-800 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Güncel Kalın:
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> RKONIQ</span>
            </h3>
            <p className="mb-8 text-xl text-zinc-400">
              En güncel gelişmeleri, ipuçlarını ve içgörüleri e-posta kutunuzdan takip edin.
            </p>

            <form onSubmit={onSubmit} className="mx-auto max-w-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta adresinizi girin"
                    className={`w-full rounded-full border-2 bg-zinc-800 px-6 py-4 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                      emailError ? 'border-red-400 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
                    }`}
                  />
                  {emailError && <p className="mt-2 text-left text-sm text-red-400">{emailError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 font-semibold text-white transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Abone Ol
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <h2 className="mb-4 font-mono text-3xl font-bold text-emerald-400">RKONIQ</h2>
              <p className="mb-6 leading-relaxed text-zinc-400">
                Yapay zekâ destekli çözümlerimizle iş süreçlerinizi dönüştürün. Kurumsal düzeyde güvenlik ve
                performansla işletmenizi sınırların ötesine taşıyın.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 font-semibold text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-zinc-400 transition-colors duration-200 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-zinc-800 py-8 md:flex-row">
          <div className="mb-4 text-sm text-zinc-400 md:mb-0">© 2026 RKONIQ Tüm hakları saklıdır.</div>
        </div>
      </div>
    </footer>
  );
}
