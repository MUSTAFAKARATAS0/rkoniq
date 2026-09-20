import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Mail, Phone, Send, Clock, Users } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Lütfen geçerli bir e-posta adresi girin'),
  company: z.string().min(2, 'Şirket adı en az 2 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır')
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    toast.success('Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.');
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      content: 'rk@rkoniq.com',
      description: 'Bize dilediğiniz zaman e-posta gönderebilirsiniz'
    },
    {
      icon: Phone,
      title: 'Bizi Arayın',
      content: '+90 (542) 387 19 11',
      description: 'Hafta içi 08.00 - 18.00 saatleri arasında'
    },
    // {
    //   icon: MapPin,
    //   title: 'Bizi Ziyaret Edin',
    //   content: 'Adres bilgisi yakında paylaşılacaktır',
    //   description: 'Türkiye'
    // }
  ];

  const stats = [
    { icon: Clock, value: '< 24 saat', label: 'Yanıt Süresi' },
    { icon: Users, value: '10K+', label: 'Memnun Müşteri' },
    { icon: Mail, value: '%99', label: 'Memnuniyet Oranı' }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Başlamaya
            <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent"> hazır mısınız?</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            İşletmenizi nasıl dönüştürebileceğimizi konuşalım. Ekibimizle bugün iletişime geçin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">Bize mesaj gönderin</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className={`w-full px-4 py-4 text-black placeholder:text-black border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-slate-200 focus:border-emerald-500'
                    }`}
                    {...register('name')}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-sm mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <motion.input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className={`w-full px-4 py-4 text-black placeholder:text-black border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-slate-200 focus:border-emerald-500'
                    }`}
                    {...register('email')}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-sm mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="relative">
                <motion.input
                  type="text"
                  placeholder="Şirket Adı"
                  className={`w-full px-4 py-4 text-black placeholder:text-black border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 ${
                    errors.company 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-slate-200 focus:border-emerald-500'
                  }`}
                  {...register('company')}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.company && (
                  <motion.p
                    className="text-red-500 text-sm mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.company.message}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <motion.textarea
                  rows={6}
                  placeholder="Projeniz hakkında bize bilgi verin..."
                  className={`w-full px-4 py-4 text-black placeholder:text-black border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-slate-200 focus:border-emerald-500'
                  }`}
                  {...register('message')}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-sm mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-700 to-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Gönderiliyor...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8">İletişime geçin</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-1">{info.title}</h4>
                      <p className="text-emerald-700 font-medium mb-1">{info.content}</p>
                      <p className="text-zinc-600 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

        

           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;