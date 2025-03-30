'use client';

import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Hızlı Teslimat',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Web sitenizi 4 hafta içinde teslim ediyor, projenizi hızla hayata geçiriyoruz.',
      delay: 0.2
    },
    {
      title: 'Kullanıcı Dostu Arayüz',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      description: 'Modern ve kullanıcı odaklı tasarımlarla ziyaretçilerinize mükemmel deneyim sunuyoruz.',
      delay: 0.3
    },
    {
      title: 'Düzenli İletişim',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: 'Haftalık test sürümleri ve düzenli güncellemelerle projenizin her aşamasından haberdar olun.',
      delay: 0.4
    },
    {
      title: '4 Haftalık Süreç',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Planlama, tasarım ve geliştirme süreçlerini 4 hafta içinde tamamlıyoruz.',
      delay: 0.5
    },
    {
      title: 'Test ve Optimizasyon',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Haftalık test sürümleriyle sitenizin kalitesini sürekli iyileştiriyoruz.',
      delay: 0.6
    },
    {
      title: 'Yayına Hazır',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      description: 'Projeniz tamamlandığında hemen yayına alınmaya hazır olacak şekilde teslim ediyoruz.',
      delay: 0.7
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-normal text-center mb-16 text-[#001f3f]"
        >
          Neden Biz?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: service.delay,
                ease: "easeOut"
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative bg-white rounded-lg p-6 pt-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-[#001f3f]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="relative flex justify-center items-center mb-6 w-16 h-16 mx-auto bg-[#001f3f] rounded-lg shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ 
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 20,
                    damping: 12,
                    mass: 1,
                    delay: service.delay
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: service.delay + 0.2,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-lg font-medium text-center mb-4 text-[#001f3f]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: service.delay + 0.2 }}
              >
                {service.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: service.delay + 0.3 }}
                className="relative z-10"
              >
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              <motion.div 
                className="absolute inset-x-4 bottom-2 h-[2px] bg-[#001f3f] opacity-10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 