'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-[#707070] text-lg font-medium">Hakkımızda</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] leading-tight">
              Yeni Ürün Geliştirme Ekibi
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[120px] md:h-[160px] lg:h-[200px]"
          >
            <Image
              src="/images/about-page-illustrator.png"
              alt="Product Development Team Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/about-us.jpg"
            alt="EMD Agency Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0A2342]">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern ve kullanıcı dostu web çözümleri sunarak işletmenizin dijital dünyada öne çıkmasını sağlıyoruz. 14 gün içinde profesyonel web sitenizi teslim ediyoruz.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0A2342]">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Türkiye&apos;nin önde gelen web ajansı olarak, müşterilerimize en yenilikçi ve etkili dijital çözümleri sunmayı hedefliyoruz. Her projede mükemmelliği arıyoruz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 