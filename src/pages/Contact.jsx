import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import PageLayout from '../components/layout/PageLayout.jsx';
import { toast } from '../lib/toast.js';

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Lütfen geçerli bir e-posta adresi girin'),
  company: z.string().min(2, 'Şirket adı en az 2 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

const contactInfo = [
  {
    icon: Mail,
    title: 'E-posta',
    content: 'rk@rkoniq.com',
    description: 'Bize dilediğiniz zaman e-posta gönderebilirsiniz',
  },
  {
    icon: Phone,
    title: 'Bizi Arayın',
    content: '+90 (542) 387 19 11',
    description: 'Hafta içi 08.00 - 18.00 saatleri arasında',
  },
];

const fieldClass = (hasError) =>
  `w-full px-4 py-4 text-black placeholder:text-black border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 ${
    hasError
      ? 'border-red-300 focus:border-red-500'
      : 'border-slate-200 focus:border-emerald-500'
  }`;

function FieldError({ message }) {
  if (!message) return null;

  return (
    <motion.p
      className="mt-2 text-sm text-red-500"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {message}
    </motion.p>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const selectedProducts = location.state?.selectedProducts || [];

    if (selectedProducts.length > 0) {
      setValue(
        'message',
        `İlgilendiğim ürünler:\n- ${selectedProducts.join(
          '\n- '
        )}\n\nHakkında teklif almak istiyorum.`
      );
    }
  }, [location.state, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkjgbndz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.'
        );
        reset();
      } else {
        toast.error('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      toast.error('Ağ hatası oluştu. Lütfen bağlantınızı kontrol edin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Başlık */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-zinc-900 md:text-5xl">
              Başlamaya
              <span className="bg-gradient-to-r from-emerald-700 to-green-500 bg-clip-text text-transparent">
                {' '}
                hazır mısınız?
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-zinc-600">
              İşletmenizi nasıl dönüştürebileceğimizi konuşalım. Ekibimizle
              bugün iletişime geçin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            {/* İletişim Formu */}
            <motion.div
              className="rounded-3xl bg-white p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-zinc-900">
                Bize mesaj gönderin
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  {/* Ad Soyad */}
                  <div>
                    <motion.input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className={fieldClass(errors.name)}
                      {...register('name')}
                      whileFocus={{ scale: 1.02 }}
                    />

                    <FieldError message={errors.name?.message} />
                  </div>

                  {/* E-posta */}
                  <div>
                    <motion.input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className={fieldClass(errors.email)}
                      {...register('email')}
                      whileFocus={{ scale: 1.02 }}
                    />

                    <FieldError message={errors.email?.message} />
                  </div>

                </div>

                {/* Şirket */}
                <div>
                  <motion.input
                    type="text"
                    placeholder="Şirket Adı"
                    className={fieldClass(errors.company)}
                    {...register('company')}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <FieldError message={errors.company?.message} />
                </div>

                {/* Mesaj */}
                <div>
                  <motion.textarea
                    rows={6}
                    placeholder="Projeniz hakkında bize bilgi verin..."
                    className={`${fieldClass(
                      errors.message
                    )} resize-none`}
                    {...register('message')}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <FieldError message={errors.message?.message} />
                </div>

                {/* Gönder */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-700 to-green-500 py-4 text-lg font-semibold text-white transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                    y: isSubmitting ? 0 : -2,
                  }}
                  whileTap={{
                    scale: isSubmitting ? 1 : 0.98,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Mesaj Gönder
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* İletişim Bilgileri */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-zinc-900">
                İletişime geçin
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  return (
                    <motion.div
                      key={info.title}
                      className="flex items-start rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div>
                        <h4 className="mb-1 font-semibold text-zinc-900">
                          {info.title}
                        </h4>

                        <p className="mb-1 font-medium text-emerald-700">
                          {info.content}
                        </p>

                        <p className="text-sm text-zinc-600">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}