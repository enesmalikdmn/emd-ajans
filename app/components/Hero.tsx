'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
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
          <h1 className="text-[96px] md:text-[100px] font-normal text-[#fff] mb-6">
            Web Siteniz 14 Gün İçerisinde Hazır!
          </h1>
          <div className="flex gap-4 justify-center mt-8">
            <Button 
              variant="contained" 
              color="primary"
              size="small"
              href="/contact"
              sx={{ 
                ml: 2,
                borderRadius: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#357ABD'
                }
              }}
            >
              Bize Ulaşın
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 