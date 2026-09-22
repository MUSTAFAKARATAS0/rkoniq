import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import officeImage from '../../assets/remote/office.webp';

const highlights = [
  { number: '01', text: 'Daha Verimli' },
  { number: '02', text: 'Daha Güvenli' },
  { number: '03', text: 'Daha Akıllı' },
];

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex min-h-[480px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row">
          <div className="z-10 flex w-full flex-col justify-center bg-white p-8 md:p-12 lg:w-1/2 lg:p-16">
            <div className="mb-6 h-1 w-12 rounded-full bg-emerald-600" />
            <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Teknolojiyi sadece <br />
              sunmuyoruz. <br />
              <span className="text-emerald-600">İşinize uyarlıyoruz.</span>
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              İhtiyacınızı analiz ediyor, doğru teknolojileri bir araya getiriyor ve uçtan uca dijital dönüşüm
              çözümleri oluşturuyoruz.
            </p>
            <motion.button
              type="button"
              onClick={() => navigate('/iletisim')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-xl bg-[#058a4e] px-8 py-3.5 font-medium text-white shadow-md transition-colors duration-200 hover:bg-[#047240]"
            >
              <span>Projenizi Konuşalım</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="relative flex min-h-[320px] w-full items-center lg:min-h-full lg:w-1/2">
            <div className="absolute inset-0">
              <img
                src={officeImage}
                alt="Modern teknoloji ofisi"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:via-white/10" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 text-white md:p-12 lg:p-16">
              <div>
                <div className="mb-4 h-0.5 w-10 bg-emerald-400" />
                <h3 className="text-lg leading-snug font-semibold tracking-wider uppercase md:text-xl">
                  DAHA İYİ <br />
                  YARINLAR İÇİN <br />
                  BUGÜNDEN
                </h3>
              </div>
              <div className="mt-12 space-y-4">
                {highlights.map((item) => (
                  <div key={item.number} className="flex items-center gap-4">
                    <span className="text-sm font-bold text-emerald-400 md:text-base">{item.number}</span>
                    <span className="text-base font-semibold tracking-wide md:text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
