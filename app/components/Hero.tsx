'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen" aria-label="Hero section">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Modern ofis ortamı"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute w-full h-full bg-[#000c] z-10" />
      </div>

      {/* Content */}
      <div className="relative w-full z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6"
            >
              Web Siteniz 14 Gün İçerisinde Hazır!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.4
              }}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Modern ve kullanıcı dostu web çözümleri ile
              <br />
              web sitenizi oluşturuyor ve yönetimini sağlıyoruz.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 