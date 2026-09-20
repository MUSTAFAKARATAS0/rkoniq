import { ArrowRight, ShieldCheck, Network, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/dunya.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const features = [
    { icon: ShieldCheck, title: 'Güvenilir İş Ortağı' },
    { icon: Network, title: 'Uçtan Uca Çözümler' },
    { icon: Users, title: 'Uzman Ekip' },
    { icon: TrendingUp, title: 'Sürdürülebilir Büyüme' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SOL TARAF: Metin Alanı */}
          <div className="lg:col-span-6 text-left z-20">
            <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">
              DAHA AKILLI • DAHA GÜVENLİ • DAHA VERİMLİ
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.12] mb-6">
              İşinizi Geleceğe <br />
              <span className="text-emerald-700">Taşıyan Teknolojiler</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
              <strong className="text-zinc-800 font-semibold block mb-2">
                Dijital dönüşümün ihtiyaç duyduğu tüm teknolojiler, tek noktada.
              </strong>
              Buluttan siber güvenliğe, yapay zekâ destekli görüntü işleme 
              çözümlerine kadar işletmenizin verimliliğini, güvenliğini ve 
              rekabet gücünü artıran yeni nesil teknolojiler sunuyoruz.
            </p>

            {/* Butonlar */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => navigate('/urunler')}
                className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-emerald-700 transition-all shadow-md flex items-center group"
              >
                Çözümleri Keşfet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className="border border-zinc-300 text-zinc-700 hover:border-emerald-600 hover:text-emerald-600 px-8 py-3.5 rounded-xl font-semibold text-base transition-all bg-white"
              >
                Teklif Al
              </button>
            </div>
          </div>

          {/* SAĞ TARAF: Özel Geometrik Şekilli Görsel Alanı */}
          <div className="lg:col-span-6 relative flex justify-end">
            {/* Şekilli Görsel Konteyneri */}
            <div className="relative w-full max-w-[580px] h-[480px] md:h-[540px]">
              
              {/* Resimdeki Gibi Açılı Yeşil/Görsel Çerçeve */}
              <div 
                className="w-full h-full bg-emerald-800 overflow-hidden relative shadow-2xl"
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 35%)',
                  borderRadius: '0 0 0 80px', // Sol alt köşedeki kavis
                }}
              >
                {/* Ana Görsel */}
                <img
                  src={heroImage}
                  alt="Teknoloji"
                  className="w-full h-full object-cover object-center"
                />

                {/* Görsel Üzerindeki Yumuşak Yeşil Geçiş (Overlay) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Görsel Üzerindeki Sağ Üst Yazı */}
                <div className="absolute top-8 right-8 text-right text-white space-y-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                  <p className="text-xs font-bold tracking-widest uppercase">
                    TEKNOLOJİ
                  </p>
                  <p className="text-xs font-bold tracking-widest text-white uppercase">
                    SINIR TANIMAZ
                  </p>
                  <p className="text-xs font-bold tracking-widest text-white/85 uppercase">
                    FIRSATLAR YARATIR
                  </p>
                </div>

                {/* Sağ Taraf Sayfa İndikatörü (01, 02, 03) */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 text-xs font-semibold text-zinc-500">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full inline-block"></span> 01
                  </span>
                  <span>02</span>
                  <span>03</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ALT KISIM: İkonlar */}
        <div className="mt-12 pt-8 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-zinc-700 text-sm">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;