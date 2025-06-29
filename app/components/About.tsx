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

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A2342] text-center mb-8">Misyonumuz</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Modern ve kullanıcı dostu web çözümleri sunarak işletmenizin dijital dünyada öne çıkmasını sağlıyoruz. 
                React, Next.js, Vue.js, Nuxt.js gibi en güncel teknolojileri kullanarak, hızlı, güvenli ve SEO uyumlu 
                web siteleri geliştiriyoruz. Her proje için özel tasarım yaklaşımı benimser, markanızın kimliğini 
                dijital platformda en iyi şekilde yansıtırız.
              </p>
              <p>
                Müşteri memnuniyeti bizim için öncelik. Her adımda şeffaf iletişim kurarak, projelerinizin her aşamasından 
                haberdar olmanızı sağlıyoruz. Haftalık demo sunumları ile ilerlemeyi takip edebilir, geri bildirimlerinizi 
                anında projelerimize entegre edebiliriz. 2 haftalık süreçte planlama, tasarım ve geliştirme aşamalarını 
                titizlikle yürütüyor, zamanında teslimat garantisi veriyoruz.
              </p>
              <p>
                Kalite standartlarımız endüstri normlarının üzerinde. W3C standartlarına uygun kodlama, Google PageSpeed 
                optimizasyonu, mobil uyumluluk testleri ve güvenlik denetimleri her projemizin vazgeçilmez parçası. 
                Teslim sonrası 3 ay ücretsiz teknik destek ve yaşam boyu güncelleme desteği sunarak, uzun vadeli 
                iş ortaklıkları kuruyoruz.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A2342] text-center mb-8">Vizyonumuz</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                2030 yılına kadar Türkiye'nin en güvenilir ve yenilikçi dijital ajansı olmayı hedefliyoruz. 
                Yapay zeka entegrasyonları, Web3 teknolojileri ve metaverse çözümleri ile geleceğin dijital 
                deneyimlerini bugünden şekillendiriyoruz. Her yıl en az 500 başarılı proje teslim ederek, 
                binlerce işletmenin dijital dönüşümüne öncülük etmeyi amaçlıyoruz.
              </p>
              <p>
                İnovasyon bizim DNA'mız. Sürekli araştırma geliştirme faaliyetleri ile sektördeki en güncel 
                trendleri takip ediyor, müşterilerimize her zaman bir adım önde olan çözümler sunuyoruz. 
                Headless CMS yapıları, JAMstack mimarisi, Progressive Web Apps (PWA) ve Server-Side Rendering 
                gibi gelişmiş teknolojilerle performans odaklı projeler geliştiriyoruz.
              </p>
              <p>
                Sürdürülebilir büyüme stratejimiz, kaliteli hizmet ve müşteri memnuniyeti üzerine kurulu. 
                Organik büyüme ile ekibimizi güçlendiriyor, her geçen yıl daha büyük ve karmaşık projeleri 
                başarıyla tamamlayabilen bir yapı oluşturuyoruz. Yerel pazarda liderliğimizi pekiştirirken, 
                uluslararası projelerde de deneyim kazanarak global bir marka olmaya adım adım ilerliyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-6">Değerlerimiz</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz, her projede rehberimiz oluyor.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Şeffaflık",
                description: "Projelerinizin her aşamasında açık iletişim kuruyoruz. Haftalık raporlar, düzenli toplantılar ve şeffaf fiyatlandırma politikamızla güven oluşturuyoruz."
              },
              {
                title: "Kalite",
                description: "Endüstri standartlarının üzerinde kodlama, titiz test süreçleri ve sürekli iyileştirme anlayışıyla mükemmel sonuçlar üretiyoruz."
              },
              {
                title: "İnovasyon",
                description: "Teknolojik gelişmeleri yakından takip ediyor, en güncel çözümleri projelerinize entegre ederek rekabet avantajı sağlıyoruz."
              },
              {
                title: "Güvenilirlik",
                description: "Verdiğimiz sözlerin arkasında duruyoruz. Zamanında teslimat, kaliteli hizmet ve uzun vadeli destek garantisi veriyoruz."
              },
              {
                title: "Müşteri Odaklılık",
                description: "Her projeyi müşterinin gözünden değerlendiriyor, ihtiyaçlarına özel çözümler geliştiriyoruz. Başarınız bizim başarımız."
              },
              {
                title: "Sürekli Öğrenme",
                description: "Sektördeki değişimlere hızla adapte oluyoruz. Ekip olarak sürekli eğitim alarak, size en güncel hizmeti sunuyoruz."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-[#0A2342] mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#0A2342] text-center mb-8">Neden EMD Ajans?</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Türkiye'de web ajansı sektöründe 6 yıllık deneyimimizle, rakiplerimizden farklı olarak sadece 
              template düzenlemesi yapmıyoruz. Her proje için sıfırdan özel tasarım ve kodlama yaparak, 
              markanızın benzersiz kimliğini dijital platformda yansıtıyoruz. Modern teknoloji stack'imiz 
              (React, Next.js, Node.js) ile hem hızlı hem de güvenli web siteleri geliştiriyoruz.
            </p>
            <p>
              2 haftalık hızlı teslimat süreci, sektör ortalamasının çok altında. Çoğu ajans 1-3 ay süren 
              projeleri, aynı kalite standartlarında 14 günde teslim ediyoruz. Bu hızlı süreç, haftalık 
              sprint metodolojisi ve deneyimli ekibimizin verimli çalışma sisteminden kaynaklanıyor. 
              Ayrıca haftalık demo sunumları ile süreç şeffaflığı sağlıyoruz.
            </p>
            <p>
              Teslim sonrası destek hizmetimiz sektörde nadir görülen bir avantaj. 3 ay ücretsiz teknik 
              destek, yaşam boyu güncelleme desteği ve SEO danışmanlığı ile uzun vadeli iş ortaklıkları 
              kuruyoruz. Müşterilerimizin %95'i tekrar bizimle çalışmayı tercih ediyor ve referans ağımızın 
              %80'i mevcut müşterilerimizden geliyor.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Working Principles Section */}
      <section className="bg-gradient-to-br from-[#0A2342] to-[#001f3f] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Çalışma Prensiplerimiz</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p className="text-lg">
                Her projeye stratejik yaklaşım sergiliyoruz. İlk görüşmede işletmenizi, hedef kitlenizi ve 
                sektörünüzü derinlemesine analiz ederek, size özel dijital strateji geliştiriyoruz. 
                Sadece web sitesi yapmıyoruz; dijital varlığınızı güçlendirecek, satışlarınızı artıracak 
                ve markanızı büyütecek çözümler sunuyoruz.
              </p>
              <p>
                Agile metodoloji ile çalışarak, değişen ihtiyaçlarınıza hızla adapte oluyoruz. Her hafta 
                size demo sunum yaparak, projenin gidişatını birlikte değerlendiriyoruz. Geri bildirimlerinizi 
                anında entegre ederek, istediğiniz sonuca en kısa yoldan ulaşıyoruz. Bu yaklaşım sayesinde 
                proje sonunda sürpriz yaşamıyorsunuz.
              </p>
              <p>
                Kalite kontrolü sürecimiz çok katmanlı. Kod kalitesi, performans testleri, güvenlik denetimleri, 
                mobil uyumluluk ve SEO optimizasyonu her projede standart. Teslim öncesi kapsamlı test 
                süreçlerinden geçirdiğimiz projelerimiz, canlı ortamda sorunsuz çalışır. Post-launch 
                izleme ve optimizasyon desteğiyle sitenizin performansını sürekli iyileştiriyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 