import { ArrowRight, ShieldCheck, Network, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  { icon: ShieldCheck, title: 'Güvenilir İş Ortağı' },
  { icon: Network, title: 'Uçtan Uca Çözümler' },
  { icon: Users, title: 'Uzman Ekip' },
  { icon: TrendingUp, title: 'Sürdürülebilir Büyüme' },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-20 pb-12">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="z-20 text-left lg:col-span-6">
            <span className="mb-4 inline-block text-xs font-bold tracking-widest text-zinc-400 uppercase md:text-sm">
              DAHA AKILLI • DAHA GÜVENLİ • DAHA VERİMLİ
            </span>

            <h1 className="mb-6 text-4xl leading-[1.12] font-bold text-zinc-900 sm:text-5xl lg:text-6xl">
              İşinizi Geleceğe <br />
              <span className="text-emerald-700">Taşıyan Teknolojiler</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
              <strong className="mb-2 block font-semibold text-zinc-800">
                Dijital dönüşümün ihtiyaç duyduğu tüm teknolojiler, tek noktada.
              </strong>
              Buluttan siber güvenliğe, yapay zekâ destekli görüntü işleme çözümlerine kadar işletmenizin
              verimliliğini, güvenliğini ve rekabet gücünü artıran yeni nesil teknolojiler sunuyoruz.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/urunler')}
                className="group flex items-center rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-700"
              >
                Çözümleri Keşfet
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/iletisim')}
                className="rounded-xl border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-700 transition-all hover:border-emerald-600 hover:text-emerald-600"
              >
                Teklif Al
              </button>
            </div>
          </div>

          <div className="relative flex justify-end lg:col-span-6">
            <div className="relative h-[480px] w-full max-w-[580px] md:h-[540px]">
              <div
                className="relative h-full w-full overflow-hidden bg-emerald-800 shadow-2xl"
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 35%)',
                  borderRadius: '0 0 0 80px',
                }}
              >
                <img
                  src="/hero.webp"
                  alt="Teknoloji"
                  width="580"
                  height="540"
                  fetchPriority="high"
                  decoding="sync"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent" />
                <div className="absolute top-8 right-8 space-y-1 text-right text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                  <p className="text-xs font-bold tracking-widest uppercase">TEKNOLOJİ</p>
                  <p className="text-xs font-bold tracking-widest text-white uppercase">SINIR TANIMAZ</p>
                  <p className="text-xs font-bold tracking-widest text-white/85 uppercase">FIRSATLAR YARATIR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-100 pt-8 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-center space-x-3">
                <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-zinc-700">{feature.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
