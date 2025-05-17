'use client';

import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Link from 'next/link';
// import Image from 'next/image';

const packages = [
  {
    title: 'Başlangıç Paketi',
    price: '₺7.999',
    description: 'Küçük işletmeler ve girişimler için ideal başlangıç çözümü',
    features: [
      '5 Sayfa Tasarım',
      'Mobil Uyumlu Tasarım',
      'İletişim Formu',
      'SEO Temel Optimizasyon',
      'Sosyal Medya Entegrasyonu',
      'İlk Yıl Ücretsiz Hosting',
      'İlk Yıl Ücretsiz Domain',
      'SSL Sertifikası',
      'Temel İçerik Yönetimi',
      'Haftalık Yedekleme'
    ],
    recommended: false
  },
  {
    title: 'Kurumsal Paket',
    price: '₺12.999',
    description: 'Orta ölçekli işletmeler için profesyonel web çözümü',
    features: [
      '10 Sayfa Tasarım',
      'Mobil Uyumlu Tasarım',
      'Gelişmiş İletişim Formu',
      'SEO Optimizasyonu',
      'Sosyal Medya Entegrasyonu',
      'İlk Yıl Ücretsiz Hosting',
      'İlk Yıl Ücretsiz Domain',
      'Gelişmiş İçerik Yönetimi',
      'Google Analytics Entegrasyonu',
      'SSL Sertifikası',
      'Haftalık Yedekleme'
    ],
    recommended: true
  },
  {
    title: 'Premium Paket',
    price: '₺17.999',
    description: 'Büyük işletmeler için kapsamlı dijital çözüm',
    features: [
      'Sınırsız Sayfa Tasarım',
      'Mobil Uyumlu Tasarım',
      'Özel Tasarım',
      'Gelişmiş SEO Optimizasyonu',
      'Sosyal Medya Entegrasyonu',
      'İlk Yıl Ücretsiz Hosting',
      'İlk Yıl Ücretsiz Domain',
      'Gelişmiş İçerik Yönetimi',
      'Google Analytics Entegrasyonu',
      'SSL Sertifikası',
      'E-posta Pazarlama Entegrasyonu',
      'Çoklu Dil Desteği',
      'Özel Animasyonlar',
      '7/24 Teknik Destek',
      'Haftalık Yedekleme'
    ],
    recommended: false
  },
  {
    title: 'E-Ticaret Paketi',
    price: '₺24.999',
    description: 'Ürün satışı yapmak isteyen işletmeler için kapsamlı e-ticaret çözümü',
    features: [
      'Sınırsız Ürün ve Kategori',
      'Güvenli Ödeme Entegrasyonu',
      'Sipariş ve Stok Yönetimi',
      'Mobil Uyumlu Tasarım',
      'SEO Optimizasyonu',
      'Kargo Entegrasyonu',
      'Kampanya ve Kupon Yönetimi',
      'Gelişmiş Raporlama',
      'SSL Sertifikası',
      'Sosyal Medya Entegrasyonu',
      'Google Analytics Entegrasyonu',
      '7/24 Teknik Destek',
      'Haftalık Yedekleme'
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-[#707070] text-lg font-medium">Paketlerimiz</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] leading-tight">
              Size Özel Paketler
            </h1>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[120px] md:h-[160px] lg:h-[200px]"
          >
            <Image
              src="/images/pricing-illustration.png"
              alt="Pricing Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div> */}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full ${
                pkg.recommended ? 'ring-2 ring-[#087E8B] transform scale-105' : ''
              }`}
            >
              {pkg.recommended && (
                <div className="bg-[#087E8B] text-white text-center py-2 text-sm font-medium">
                  En Çok Tercih Edilen
                </div>
              )}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-2">{pkg.title}</h3>
                  <div className="text-2xl md:text-3xl font-bold text-[#087E8B] mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-[#087E8B] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href={`/contact?paket=${encodeURIComponent(pkg.title)}`} passHref>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: 1,
                        textTransform: 'none',
                        backgroundColor: '#087E8B !important',
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#357ABD'
                        }
                      }}
                    >
                      Hemen Başlayın
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing; 