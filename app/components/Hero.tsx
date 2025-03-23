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
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-6">
            We plan, design and develop digital products.
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
              className="px-6 py-2 bg-[#00c896] text-white text-sm hover:bg-[#00b085] transition-colors"
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