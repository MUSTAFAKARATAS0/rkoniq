import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productCategories, products } from '../data/products';

    const Portfolio = ({ limit }) => {
      const [activeFilter, setActiveFilter] = useState('Tümü');
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
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-200 cursor-pointer"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ y: 0, scale: 1 }}
                    onClick={() => navigate(`/urunler/${project.id}`, { state: { project } })}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-200"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center text-white">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            <span className="font-medium">View Details</span>
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

    export default Portfolio;