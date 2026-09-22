import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productCategories, products } from '../data/products';
import { getProductImage } from '../data/productImages';

    const ProductSection = ({ limit }) => {
      const [activeFilter, setActiveFilter] = useState('Tümü');
      const [selectedProducts, setSelectedProducts] = useState([]);
      const navigate = useNavigate();

      const filters = ['Tümü', ...productCategories.map((category) => category.label)];
      const projects = products;

      const filteredProjects = activeFilter === 'Tümü' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
      const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

      const categoryAnchors = Object.fromEntries(
        productCategories.map((category) => [category.label, category.slug])
      );

      const toggleProductSelection = (productId) => {
        setSelectedProducts((current) =>
          current.includes(productId)
            ? current.filter((id) => id !== productId)
            : [...current, productId]
        );
      };

      const selectedProductNames = projects
        .filter((product) => selectedProducts.includes(product.id))
        .map((product) => product.title);

      return (
        <section id="portfolio" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Success Stories &
                <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent"> Case Studies</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                See how we've helped businesses transform their operations and achieve remarkable results.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-emerald-700 text-white shadow-lg'
                      : 'bg-white text-zinc-600 hover:bg-slate-100 hover:text-emerald-700'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            {selectedProductNames.length > 0 && (
              <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-emerald-700">
                      Seçilen ürünler
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProductNames.map((name) => {
                        const product = projects.find((item) => item.title === name);
                        const productId = product?.id;

                        return (
                          <span
                            key={name}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-emerald-100"
                          >
                            {name}
                            <button
                              type="button"
                              onClick={() => productId && toggleProductSelection(productId)}
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
                    onClick={() =>
                      navigate('/iletisim', {
                        state: { selectedProducts: selectedProductNames }
                      })
                    }
                    className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-emerald-800"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Teklif al
                  </button>
                </div>
              </div>
            )}

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              <AnimatePresence>
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    id={projects.findIndex((item) => item.category === project.category) === projects.indexOf(project) ? categoryAnchors[project.category] : undefined}
                    className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-200 cursor-pointer border ${
                      selectedProducts.includes(project.id)
                        ? 'border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50/40'
                        : 'border-slate-200 bg-white'
                    }`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ y: 0, scale: 1 }}
                    onClick={() => navigate(`/urunler/${project.id}`, { state: { project } })}
                    aria-pressed={selectedProducts.includes(project.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={getProductImage(project)}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-200"
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
                        className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition-all duration-200 shadow-md ${
                          selectedProducts.includes(project.id)
                            ? 'border-emerald-700 bg-emerald-700 text-white shadow-emerald-200 ring-2 ring-emerald-100'
                            : 'border-white/90 bg-white/95 text-zinc-700 hover:bg-white hover:shadow-lg'
                        }`}
                        aria-label={
                          selectedProducts.includes(project.id)
                            ? `${project.title} ürününü seçimden kaldır`
                            : `${project.title} ürününü seç`
                        }
                      >
                        {selectedProducts.includes(project.id) ? '✓' : '+'}
                      </button>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center text-white">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            <span className="font-medium">Detay</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 mb-3 transition-colors duration-200 group-hover:text-emerald-700">
                        {project.title}
                      </h3>

                      <p className="text-zinc-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm font-semibold text-emerald-600">
                        {project.results}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
    };

    export default ProductSection;