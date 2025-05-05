'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Planlama',
    description: 'Web sitenizin ihtiyaçlarını analiz ediyor, hedef kitlenizi belirliyor ve projenin kapsamını netleştiriyoruz. Sitenin yapısını, sayfalarını ve içeriklerini planlayarak, başarılı bir proje için sağlam bir temel oluşturuyoruz.'
  },
  {
    number: 2,
    title: 'Tasarım',
    description: 'Markanıza uygun, modern ve kullanıcı dostu bir tasarım oluşturuyoruz. Renk şeması, tipografi ve görsel öğelerle markanızın kimliğini yansıtırken, kullanıcı deneyimini en üst düzeye çıkarıyoruz.'
  },
  {
    number: 3,
    title: 'Geliştirme',
    description: 'En güncel teknolojileri kullanarak web sitenizi hayat geçiriyoruz. SEO dostu, mobil uyumlu, hızlı ve güvenli bir site sunuyoruz. Son olarak detaylı testler yaparak sitenin sorunsuz çalışmasını sağlıyoruz.'
  }
];

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-normal text-center mb-12">
          Süreç
        </h2>
        
        <div className="flex flex-col gap-8">
          {/* Steps with Progress Line */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center">
            {processSteps.map((step, index) => (
              <React.Fragment key={`step-${step.number}`}>
                <div 
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center border-2 
                      ${index <= currentStep ? 'border-[#001f3f]' : 'border-gray-300'}`}
                    >
                      <div className={`w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full flex items-center justify-center text-sm
                        ${index <= currentStep ? 'bg-[#001f3f] text-white' : 'bg-transparent text-gray-400'}`}
                      >
                        {step.number}
                      </div>
                    </div>
                    <span className={`mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center ${index <= currentStep ? 'text-[#001f3f]' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="flex items-center h-[2px] min-w-[80px] md:min-w-[140px] sm:min-w-[120px]">
                    <div 
                      className={`h-full w-full transition-all duration-300 ${
                        index < currentStep ? 'bg-[#001f3f]' : 'bg-gray-200'
                      }`} 
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto w-full mt-4 sm:mt-6 md:mt-8">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
              <IconButton 
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className={`self-center ${
                  currentStep === 0 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#001f3f] hover:bg-[#001f3f]/10'
                }`}
                aria-label="Önceki adım"
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: {
                      xs: '1rem',
                      sm: '1.25rem',
                      md: '1.5rem',
                      lg: '1.75rem'
                    }
                  }
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <div 
                className="flex-1 px-2 sm:px-3 md:px-4 flex flex-col justify-center h-full"
                id={`step-${processSteps[currentStep].number}-content`}
                role="tabpanel"
                aria-labelledby={`step-${processSteps[currentStep].number}`}
              >
                <div className="h-[30px] sm:h-[35px] md:h-[40px] flex items-center justify-center">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600">
                    {processSteps[currentStep].title}
                  </h3>
                </div>
                <div className="h-[120px] sm:h-[140px] md:h-[160px] flex items-center justify-center overflow-y-auto">
                  <div className="w-full max-w-[600px] mx-auto px-2 sm:px-3 md:px-4">
                    <p className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                      {processSteps[currentStep].description}
                    </p>
                  </div>
                </div>
              </div>

              <IconButton 
                onClick={handleNextStep}
                disabled={currentStep === processSteps.length - 1}
                className={`self-center ${
                  currentStep === processSteps.length - 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#001f3f] hover:bg-[#001f3f]/10'
                }`}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 