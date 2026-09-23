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
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> Birlikte </span>

              İşinizi geleceğe hazırlayalım
            </h3>
            <p className="mb-8 text-xl text-zinc-400">
              Teknoloji gündemini takip etmekten fazlası: daha akıllı operasyonlar, daha güvenli kararlar ve ölçülebilir büyüme için seçilmiş içgörüler.
            </p>

            
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
