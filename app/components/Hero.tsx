'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Office Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute w-full h-full bg-[#000c] z-10 " />
      </div>

      {/* Content */}
      <div className="relative w-full z-20 flex items-center justify-center min-h-screen">
        <div className="text-center w-1/2 px-4">
          <h1 className="text-[96px] md:text-[100px] font-normal text-white mb-6">
            Web Siteniz 14 Gün İçerisinde Hazır!
          </h1>
          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/portfolio"
              className="px-6 py-2 bg-transparent border border-gray-400 text-white text-sm hover:bg-white hover:text-black transition-colors"
            >
              Start now
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-[#4A90E2] text-white text-sm hover:bg-[#00b085] transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 