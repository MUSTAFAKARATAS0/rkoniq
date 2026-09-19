import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { z } from 'zod';
    import { toast } from 'react-toastify';
    import { 
      ArrowRight
    } from 'lucide-react';

    const newsletterSchema = z.object({
      email: z.string().email('Lütfen geçerli bir e-posta adresi girin')
    });

    const Footer = () => {
      const [isSubmitting, setIsSubmitting] = useState(false);

      const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        resolver: zodResolver(newsletterSchema)
      });

      const onSubmit = async (data) => {
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Newsletter subscription:', data);
        toast.success('Bültenimize başarıyla abone oldunuz!');
        reset();
        setIsSubmitting(false);
      };

      const footerLinks = {
        Ürün: [
          { name: 'Özellikler', href: '#features' },
          { name: 'Fiyatlandırma', href: '#pricing' },
          { name: 'API Dokümantasyonu', href: '#' },
          { name: 'Entegrasyonlar', href: '#' },
          { name: 'Değişiklik Günlüğü', href: '#' }
        ],
        Şirket: [
          { name: 'Hakkımızda', href: '#' },
          { name: 'Kariyer', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Basın Kiti', href: '#' },
          { name: 'İletişim', href: '#contact' }
        ],
        Kaynaklar: [
          { name: 'Yardım Merkezi', href: '#' },
          { name: 'Topluluk', href: '#' },
          { name: 'Eğitimler', href: '#' },
          { name: 'Web seminerleri', href: '#' },
          { name: 'Başarı Hikâyeleri', href: '#portfolio' }
        ],
        Yasal: [
          { name: 'Gizlilik Politikası', href: '#' },
          { name: 'Hizmet Kullanım Koşulları', href: '#' },
          { name: 'Çerez Politikası', href: '#' },
          { name: 'KVKK', href: '#' },
          { name: 'Güvenlik', href: '#' }
        ]
      };

      

      return (
        <footer className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Newsletter Section */}
            <motion.div
              className="py-16 border-b border-zinc-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Güncel Kalın:
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> RKONIQ</span>
                </h3>
                <p className="text-xl text-zinc-400 mb-8">
                  En güncel gelişmeleri, ipuçlarını ve içgörüleri e-posta kutunuzdan takip edin.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <motion.input
                        type="email"
                        placeholder="E-posta adresinizi girin"
                        className={`w-full px-6 py-4 bg-zinc-800 border-2 rounded-full focus:outline-none focus:ring-0 transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-zinc-700 focus:border-emerald-500'
                        }`}
                        {...register('email')}
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.email && (
                        <motion.p
                          className="text-red-400 text-sm mt-2 text-left"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Abone Ol
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Main Footer Content */}
            <div className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {/* Brand Section */}
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-3xl font-bold text-emerald-400 font-mono mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    RKONIQ
                  </motion.h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Yapay zekâ destekli çözümlerimizle iş süreçlerinizi dönüştürün.
                    Kurumsal düzeyde güvenlik ve performansla işletmenizi sınırların ötesine taşıyın.
                  </p>

                  {/* Social Links */}
                  
                </motion.div>

                {/* Footer Links */}
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold text-white mb-4">{category}</h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <motion.a
                            href={link.href}
                            className="text-zinc-400 hover:text-white transition-colors duration-200"
                            whileHover={{ x: 4 }}
                          >
                            {link.name}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div
              className="py-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-zinc-400 text-sm mb-4 md:mb-0">
                © 2026 RKONIQ Tüm hakları saklıdır.
              </div>

             
            </motion.div>
          </div>
        </footer>
      );
    };

    export default Footer;