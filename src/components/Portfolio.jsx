import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ExternalLink, Filter } from 'lucide-react';

    const Portfolio = () => {
      const [activeFilter, setActiveFilter] = useState('Tümü');
      const [selectedProject, setSelectedProject] = useState(null);

      const filters = ['Tümü', 'Akıllı Fabrika & Operasyon', 'Bulut & Dijital Çalışma', 'Siber Güvenlik', 'Finansal & Tahsilat Çözümleri', 'İş, Süreç & Müşteri Yönetimi'];

      const projects = [
        {
          id: 1,
          title: 'Görüntü İşleme Teknolojileri',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'Görüntü işleme ve yapay zekâ ile üretim süreçlerini optimize eden bir çözüm.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center',
          results: 'RK verecek',
          tech: ['React', 'Node.js', 'AI/ML']
        },
        {
          id: 2,
          title: 'RFID Stok ve Depo Yönetimi',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'RFID tabanlı stok ve depo yönetimi çözümü',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center',
          results: '50% reduction in administrative time',
          tech: ['Vue.js', 'Python', 'HIPAA Compliant']
        },
        {
          id: 3,
          title: 'Akıllı Fabrika Çözümleri',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'IoT tabanlı akıllı fabrika yönetim sistemi',
          image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&crop=center',
          results: '99.9% uptime with real-time data',
          tech: ['Angular', 'Java', 'WebSocket']
        },
        {
          id: 4,
          title: 'Enerji Yönetim Modülleri',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'Enerji tüketimini optimize eden akıllı enerji yönetim modülleri',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center',
          results: '200% faster data processing',
          tech: ['React', 'GraphQL', 'Machine Learning']
        },
        {
          id: 5,
          title: 'Dijital Etiket',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'Dijital etiketleme ve ürün takibi için IoT tabanlı çözüm',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
          results: '40% reduction in inventory costs',
          tech: ['Next.js', 'PostgreSQL', 'AI Optimization']
        },
        {
          id: 6,
          title: 'Araç Takip',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'IoT tabanlı araç takip sistemi',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 7,
          title: 'Güvenli Sürüş',
          category: 'Akıllı Fabrika & Operasyon',
          description: 'IoT tabanlı güvenli sürüş sistemleri',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 8,
          title: 'PDKS',
          category: 'İş, Süreç & Müşteri Yönetimi',
          description: 'Personel Devam Kontrol Sistemi ile iş süreçlerini optimize eden çözüm',
          image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 9,
          title: 'İK Yazılımları',
          category: 'İş, Süreç & Müşteri Yönetimi',
          description: 'İnsan kaynakları yönetimini dijitalleştiren yazılım çözümleri',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 10,
          title: 'Microsoft Ürünleri',
          category: 'Bulut & Dijital Çalışma',
          description: 'Microsoft 365 ve Azure tabanlı bulut çözümleri ile iş süreçlerini optimize eden platform',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 11,
          title: 'Google Workspace Ürünleri',
          category: 'Bulut & Dijital Çalışma',
          description: 'Google Workspace tabanlı bulut çözümleri ile iş süreçlerini optimize eden platform  ',
          image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 12,
          title: 'Bulut Ürünleri',
          category: 'Bulut & Dijital Çalışma',
          description: 'Bulut tabanlı çözümler ile iş süreçlerini optimize eden platform',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 13,
          title: 'Siber Güvenlik Ürünleri',
          category: 'Siber Güvenlik',
          description: 'İleri düzey siber güvenlik çözümleri',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
         {
          id: 14,
          title: 'Güvenlik / erişim / veri koruma çözümleri',
          category: 'Siber Güvenlik',
          description: 'İleri düzey siber güvenlik çözümleri',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
        {
          id: 15,
          title: 'CRM Modülleri',
          category: 'İş, Süreç & Müşteri Yönetimi',
          description: 'Müşteri ilişkilerini yönetmek ve satış süreçlerini optimize etmek için CRM modülleri',
          image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
        {
          id: 16,
          title: 'Ödeme Yönetimi',
          category: 'Finansal & Tahsilat Çözümleri',
          description: 'Güvenli ve etkili ödeme süreçlerini yönetmek için çözümler',
          image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
        {
          id: 17,
          title: 'Siber Güvenlik Ürünleri',
          category: 'Siber Güvenlik',
          description: 'İleri düzey siber güvenlik çözümleri',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
        {
          id: 18,
          title: 'Siber Güvenlik Ürünleri',
          category: 'Siber Güvenlik',
          description: 'İleri düzey siber güvenlik çözümleri',
          image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        },
        
      ];

      const filteredProjects = activeFilter === 'Tümü' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

      return (
        <section id="portfolio" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-emerald-700 text-white shadow-lg'
                      : 'bg-white text-zinc-600 hover:bg-slate-100 hover:text-emerald-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                      <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
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

            {/* Project Modal */}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                        {selectedProject.title}
                      </h3>
                      <p className="text-zinc-600 mb-6">
                        {selectedProject.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-zinc-900 mb-2">Results:</h4>
                        <p className="text-emerald-600 font-medium">{selectedProject.results}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-zinc-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-full bg-emerald-700 text-white py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      );
    };

    export default Portfolio;