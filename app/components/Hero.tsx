'use client';

import Image from 'next/image';
import { Button } from '@mui/material';
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
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Modern ve kullanıcı dostu web çözümleri ile
              <br />
              web sitenizi oluşturuyor ve yönetimini sağlıyoruz.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.5
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                href="/contact"
                sx={{ 
                  borderRadius: 1,
                  textTransform: 'none',
                  py: 1.5,
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#357ABD'
                  }
                }}
                aria-label="Bize ulaşın"
              >
                Bize Ulaşın
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                href="/services"
                sx={{ 
                  borderRadius: 1,
                  textTransform: 'none',
                  py: 1.5,
                  px: 4,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#357ABD',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                aria-label="Hizmetlerimizi görüntüle"
              >
                Hizmetlerimiz
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 