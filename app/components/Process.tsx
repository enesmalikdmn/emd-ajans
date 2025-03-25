'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Plan',
    description: 'We create detailed technical specifications and project guidelines through comprehensive documentation. Our planning phase ensures clear communication and client approval on all project aspects before proceeding.'
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our design team creates visually appealing and user-friendly interfaces that align with your brand identity. We focus on creating intuitive layouts, selecting appropriate color schemes, and ensuring a consistent design language throughout your project.'
  },
  {
    number: 3,
    title: 'Develop',
    description: 'Our development team brings the designs to life using modern technologies and best practices. We ensure clean, maintainable code while implementing all required functionality, followed by thorough testing and optimization.'
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
        <h2 className="text-2xl font-normal text-center mb-12">Process</h2>
        
        <div className="flex flex-col gap-8">
          {/* Steps with Progress Line */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center">
            {processSteps.map((step, index) => (
              <>
                <div 
                  key={step.number}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center border-2 
                      ${index <= currentStep ? 'border-[#001f3f]' : 'border-gray-300'}`}
                    >
                      <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-sm
                        ${index <= currentStep ? 'bg-[#001f3f] text-white' : 'bg-transparent text-gray-400'}`}
                      >
                        {step.number}
                      </div>
                    </div>
                    <span className={`mt-4 font-medium text-center ${index <= currentStep ? 'text-[#001f3f]' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="flex items-center h-[2px] min-w-[100px] md:min-w-[200px]">
                    <div 
                      className={`h-full w-full transition-all duration-300 ${
                        index < currentStep ? 'bg-[#001f3f]' : 'bg-gray-200'
                      }`} 
                    />
                  </div>
                )}
              </>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto w-full mt-8">
            <div className="flex items-center gap-4 min-h-[200px]">
              <IconButton 
                onClick={handlePrevStep}
                className="text-[#001f3f] hover:bg-[#001f3f]/10 self-center"
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <div className="flex-1 px-4 flex flex-col justify-center h-full">
                <div className="h-[40px] flex items-center justify-center">
                  <h3 className="text-xl font-medium text-center">
                    {processSteps[currentStep].title}
                  </h3>
                </div>
                <div className="h-[120px] flex items-center justify-center overflow-y-auto">
                  <div className="w-full max-w-[600px] mx-auto px-4">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {processSteps[currentStep].description}
                    </p>
                  </div>
                </div>
              </div>

              <IconButton 
                onClick={handleNextStep}
                className="text-[#001f3f] hover:bg-[#001f3f]/10 self-center"
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