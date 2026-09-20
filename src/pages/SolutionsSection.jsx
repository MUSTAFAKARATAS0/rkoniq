    import { motion } from 'framer-motion';
    import { Zap, Shield, BarChart3, Users, Rocket, Brain } from 'lucide-react';

    const Features = () => {
      const features = [
        {
          icon: Brain,
          title: 'AI ve Görüntü Teknolojileri',
          slug: 'ai-ve-goruntu-teknolojileri',
          description: 'Yapay zekâ destekli görsel analiz ve otomasyon ile işletmenizin karar süreçlerini hızlandırır.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80'
        },
        {
          icon: Zap,
          title: 'IOT ve Akıllı Operasyonlar',
          slug: 'iot-ve-akilli-operasyonlar',
          description: 'Sensörler, akıllı cihazlar ve otomasyon ile operasyonlarınızı gerçek zamanlı izleyin.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
        },
        {
          icon: Shield,
          title: 'Bulut & Siber Güvenlik',
          slug: 'bulut-ve-siber-guvenlik',
          description: 'Verilerinizi koruyan güvenli altyapı ve gelişmiş güvenlik çözümleriyle riskleri azaltın.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80'
        },
        {
          icon: BarChart3,
          title: 'İş Yazılımları',
          slug: 'is-yazilimlari',
          description: 'İş süreçlerinizi tek panodan yöneterek daha hızlı ve verimli kararlar alın.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
        },
        {
          icon: Users,
          title: 'Fintech ve Dijital Ticaret',
          slug: 'fintech-ve-dijital-ticaret',
          description: 'Ölçeklenebilir finans ve e-ticaret çözümleriyle müşteri deneyimini ve satışları artırın.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
        },
        {
          icon: Rocket,
          title: 'Dijital Deneyim',
          slug: 'dijital-deneyim',
          description: 'Markanızın dijital temas noktalarını yeniden tasarlayıp kullanıcı sadakatini yükseltin.',
          color: 'from-emerald-700 to-emerald-900',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
            ease: "easeOut"
          }
        }
      };

      return (
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                İşiniz İçin 
                <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent"> Tam Kapsamlı Çözümler</span>
              </h2>
             
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  id={feature.slug}
                  className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-200 border border-slate-100 bg-slate-900"
                  variants={itemVariants}
                  whileHover={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-[330px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-transform duration-200"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-slate-900/40 to-emerald-900/20" />

                    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ rotate: 0 }}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-2 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <motion.button
                className="bg-gradient-to-r from-emerald-700 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.01, y: 0 }}
                whileTap={{ scale: 0.99 }}
              >
                Tüm Çözümlerimizi Keşfedin
              </motion.button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Features;