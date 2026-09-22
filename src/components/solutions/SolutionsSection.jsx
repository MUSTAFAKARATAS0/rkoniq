import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { solutions } from '../../data/solutions';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

export default function SolutionsSection() {
  const navigate = useNavigate();

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-zinc-900 md:text-5xl">
            İşiniz İçin
            <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent">
              {' '}
              Tam Kapsamlı Çözümler
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.slug}
                id={feature.slug}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-lg transition-all duration-200"
                variants={itemVariants}
              >
                <div className="relative h-[330px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="600"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-slate-900/40 to-emerald-900/20" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-2xl leading-tight font-bold">{feature.title}</h3>
                    <p className="max-w-xs text-sm leading-relaxed text-white/85 md:text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <motion.button
            type="button"
            onClick={() => navigate('/urunler')}
            className="rounded-full bg-gradient-to-r from-emerald-700 to-green-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:shadow-xl"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Tüm Çözümlerimizi Keşfedin
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
