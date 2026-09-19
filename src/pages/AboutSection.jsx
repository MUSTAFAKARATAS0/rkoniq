import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Video } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { number: '01', text: 'Daha Verimli' },
    { number: '02', text: 'Daha Güvenli' },
    { number: '03', text: 'Daha Akıllı' }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Üst Kart Alanı */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row min-h-[480px]">
          
          {/* Sol Taraf - Metin ve Buton İçeriği */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 bg-white">
            <div className="w-12 h-1 bg-emerald-600 mb-6 rounded-full"></div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Teknolojiyi sadece <br />
              sunmuyoruz. <br />
              <span className="text-emerald-600">İşinize uyarlıyoruz.</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              İhtiyacınızı analiz ediyor, doğru teknolojileri bir araya getiriyor ve uçtan uca dijital dönüşüm çözümleri oluşturuyoruz.
            </p>

            <div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#058a4e] hover:bg-[#047240] text-white font-medium px-8 py-3.5 rounded-xl flex items-center gap-3 transition-colors duration-200 shadow-md"
              >
                <span>Projenizi Konuşalım</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Sağ Taraf - Görsel ve Özellikler Listesi */}
          <div className="w-full lg:w-1/2 relative min-h-[320px] lg:min-h-full flex items-center">
            {/* Arka Plan Görseli */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')`
              }}
            >
              {/* Geçişli Degrade (Fade Efekti) */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:via-white/10"></div>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Arka Plan Üzerindeki İçerik */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full text-white flex flex-col justify-between h-full">
              {/* Sağ Üst Metin */}
              <div>
                <div className="w-10 h-0.5 bg-emerald-400 mb-4"></div>
                <h3 className="text-lg md:text-xl font-semibold tracking-wider uppercase leading-snug">
                  DAHA İYİ <br />
                  YARINLAR İÇİN <br />
                  BUGÜNDEN
                </h3>
              </div>

              {/* Sağ Alt Liste (01, 02, 03) */}
              <div className="mt-12 space-y-4">
                {features.map((item) => (
                  <div key={item.number} className="flex items-center gap-4">
                    <span className="text-emerald-400 font-bold text-sm md:text-base">{item.number}</span>
                    <span className="font-semibold text-base md:text-lg tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Alt Kısım - Güvenilen Teknoloji Ortağı (Bozulmayan Statik Logolar) */}
        <div className="mt-12 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            GÜVENİLEN TEKNOLOJİ ORTAĞI
          </p>

          <div className="flex flex-wrap items-center justify-between gap-8 text-gray-500">
            {/* Microsoft */}
            <div className="flex items-center gap-2 font-semibold text-xl text-gray-700">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <span className="bg-[#f25022]"></span>
                <span className="bg-[#7fba00]"></span>
                <span className="bg-[#00a4ef]"></span>
                <span className="bg-[#ffb900]"></span>
              </div>
              <span>Microsoft</span>
            </div>

            {/* Google Workspace */}
            <div className="flex items-center gap-2 font-medium text-lg text-gray-600">
              <span className="text-blue-500 font-bold">G</span>
              <span className="text-red-500 font-bold">o</span>
              <span className="text-yellow-500 font-bold">o</span>
              <span className="text-blue-500 font-bold">g</span>
              <span className="text-green-500 font-bold">l</span>
              <span className="text-red-500 font-bold">e</span>
              <span className="font-normal text-gray-500 ml-1">Workspace</span>
            </div>

            {/* AWS */}
            <div className="flex items-center gap-1 font-bold text-xl text-gray-800">
              <Cloud className="w-6 h-6 text-orange-500" />
              <span>aws</span>
            </div>

            {/* Fortinet */}
            <div className="flex items-center gap-1.5 font-bold text-lg text-red-700 tracking-wider">
              <Shield className="w-5 h-5 text-red-600" />
              <span>FORTINET</span>
            </div>

            {/* Hikvision */}
            <div className="flex items-center gap-1.5 font-bold text-lg text-red-600 tracking-widest">
              <Video className="w-5 h-5 text-gray-700" />
              <span>HIKVISION</span>
            </div>

            {/* Ve daha fazlası */}
            <span className="text-gray-400 text-sm font-medium italic">
              ve daha fazlası...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;