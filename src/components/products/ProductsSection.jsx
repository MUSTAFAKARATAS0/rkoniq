import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productCategories, products } from '../../data/products';
import { getProductImage } from '../../data/productImages';

const filters = ['Tümü', ...productCategories.map((category) => category.label)];
const categoryAnchors = Object.fromEntries(
  productCategories.map((category) => [category.label, category.slug])
);

export default function ProductsSection({ limit }) {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === 'Tümü' ? products : products.filter((project) => project.category === activeFilter);
  const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const toggleProductSelection = (productId) => {
    setSelectedProducts((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]
    );
  };

  const selectedProductNames = products
    .filter((product) => selectedProducts.includes(product.id))
    .map((product) => product.title);

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-zinc-900 md:text-5xl">
            Success Stories &
            <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent">
              {' '}
              Case Studies
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-zinc-600">
            See how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-white text-zinc-600 hover:bg-slate-100 hover:text-emerald-700'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Filter className="mr-2 inline h-4 w-4" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {selectedProductNames.length > 0 && (
          <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium tracking-[0.12em] text-emerald-700 uppercase">Seçilen ürünler</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProductNames.map((name) => {
                    const product = products.find((item) => item.title === name);
                    return (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-emerald-100"
                      >
                        {name}
                        <button
                          type="button"
                          onClick={() => product?.id && toggleProductSelection(product.id)}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-200"
                          aria-label={`${name} ürününü seçimden kaldır`}
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/iletisim', { state: { selectedProducts: selectedProductNames } })}
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-emerald-800"
              >
                <Check className="mr-2 h-4 w-4" />
                Teklif al
              </button>
            </div>
          </div>
        )}

        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence>
            {visibleProjects.map((project) => {
              const isSelected = selectedProducts.includes(project.id);
              const isCategoryAnchor =
                products.findIndex((item) => item.category === project.category) === products.indexOf(project);

              return (
                <motion.div
                  key={project.id}
                  id={isCategoryAnchor ? categoryAnchors[project.category] : undefined}
                  className={`group cursor-pointer overflow-hidden rounded-2xl border shadow-lg transition-all duration-200 ${
                    isSelected ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-200' : 'border-slate-200 bg-white'
                  }`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => navigate(`/urunler/${project.id}`, { state: { project } })}
                  aria-pressed={isSelected}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getProductImage(project)}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleProductSelection(project.id);
                      }}
                      className={`absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold shadow-md transition-all duration-200 ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-700 text-white shadow-emerald-200 ring-2 ring-emerald-100'
                          : 'border-white/90 bg-white/95 text-zinc-700 hover:bg-white hover:shadow-lg'
                      }`}
                      aria-label={isSelected ? `${project.title} ürününü seçimden kaldır` : `${project.title} ürününü seç`}
                    >
                      {isSelected ? '✓' : '+'}
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="absolute right-4 bottom-4 left-4">
                        <div className="flex items-center text-white">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          <span className="font-medium">Detay</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      {project.category}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors duration-200 group-hover:text-emerald-700">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-zinc-600">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-emerald-600">{project.results}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <motion.button
            type="button"
            onClick={() => navigate('/urunler')}
            className="mx-auto mt-12 block rounded-full bg-emerald-700 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-emerald-800"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Daha fazlasını görüntüle
          </motion.button>
        )}
      </div>
    </section>
  );
}
