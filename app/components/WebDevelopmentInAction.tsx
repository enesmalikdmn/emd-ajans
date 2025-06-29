'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MockupElement {
  type: string;
  width: string;
  height: string;
}

interface Mockup {
  title: string;
  color: string;
  elements: MockupElement[];
}

interface TechIcon {
  name: string;
  delay: number;
}

const WebDevelopmentInAction = () => {
  const [currentMockup, setCurrentMockup] = useState(0);
  
  const mockups: Mockup[] = [
    {
      title: "E-Commerce Platform",
      color: "bg-gradient-to-br from-blue-400 to-purple-600",
      elements: [
        { type: "header", width: "w-full", height: "h-2" },
        { type: "nav", width: "w-3/4", height: "h-1" },
        { type: "product-grid", width: "w-full", height: "h-8" },
        { type: "sidebar", width: "w-1/4", height: "h-6" }
      ]
    },
    {
      title: "Corporate Website",
      color: "bg-gradient-to-br from-green-400 to-blue-500",
      elements: [
        { type: "hero", width: "w-full", height: "h-4" },
        { type: "services", width: "w-full", height: "h-6" },
        { type: "about", width: "w-2/3", height: "h-3" },
        { type: "contact", width: "w-1/2", height: "h-2" }
      ]
    },
    {
      title: "Code Editor",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      elements: [
        { type: "code-line", width: "w-full", height: "h-1" },
        { type: "code-line", width: "w-4/5", height: "h-1" },
        { type: "code-line", width: "w-3/4", height: "h-1" },
        { type: "code-line", width: "w-5/6", height: "h-1" },
        { type: "code-line", width: "w-2/3", height: "h-1" }
      ]
    }
  ];

  const techIcons: TechIcon[] = [
    { name: "React", delay: 0 },
    { name: "Vue", delay: 0.1 },
    { name: "Next", delay: 0.2 },
    { name: "Nuxt", delay: 0.3 },
    { name: "JavaScript", delay: 0.4 },
    { name: "CSS3", delay: 0.5 },
    { name: "Tailwind", delay: 0.6 },
    { name: "SEO", delay: 0.7 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mockups.length]);

  return (
    <section className="py-4 md:py-8 !pb-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-6">
            Modern Web Teknolojileriyle Projelerinizi Hayata Geçiriyoruz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern teknolojiler ve güncel, yaratıcı tasarım anlayışıyla projelerinizi hayata geçiriyoruz. Yapay zeka ve AI ile projelerinizi daha iyi hale getiriyoruz.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto">

          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 flex justify-center items-center"
          >
            <div className="relative">
              {/* Laptop SVG */}
              <LaptopSVG />
              
              {/* Screen Content */}
              <div className="absolute top-[8%] left-[12%] right-[12%] bottom-[20%] rounded-t-lg rounded-b-lg overflow-hidden">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full h-full ${mockups[currentMockup].color} p-2`}
                >
                  <MockupContent mockup={mockups[currentMockup]} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mockup Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {mockups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMockup(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMockup ? 'bg-[#001f3f]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tech Icons Strip Below Laptop */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {techIcons.map((icon) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: icon.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5
                }}
                className="cursor-pointer"
              >
                <TechIconSVG name={icon.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Laptop SVG Component
const LaptopSVG = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full max-w-2xl h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Screen */}
    <rect
      x="50"
      y="20"
      width="300"
      height="180"
      rx="8"
      fill="#1a1a1a"
      stroke="#333"
      strokeWidth="2"
    />
    
    {/* Screen Inner */}
    <rect
      x="58"
      y="28"
      width="284"
      height="164"
      rx="4"
      fill="#000"
    />
    
    {/* Base */}
    <ellipse
      cx="200"
      cy="220"
      rx="180"
      ry="12"
      fill="#e5e5e5"
    />
    
    {/* Keyboard Base */}
    <rect
      x="30"
      y="205"
      width="340"
      height="20"
      rx="10"
      fill="#f0f0f0"
      stroke="#ddd"
      strokeWidth="1"
    />
    
    {/* Trackpad */}
    <rect
      x="180"
      y="210"
      width="40"
      height="8"
      rx="4"
      fill="#ddd"
    />
  </svg>
);

// Tech Icon SVG Component
const TechIconSVG = ({ name }: { name: string }) => {
  const baseClasses = "w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:drop-shadow-lg";
  
  switch (name) {
    case 'React':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#61DAFB">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" fill="none" stroke="#61DAFB" strokeWidth="0.5"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      );
    
    case 'Vue':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#4FC08D">
          <path d="M2,3L12,17L22,3H18.5L12,13.5L5.5,3H2Z"/>
          <path d="M6.5,3L12,11L17.5,3H14.5L12,7L9.5,3H6.5Z" fill="#35495E"/>
        </svg>
      );
    
    case 'Next':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#000000">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M9,7V17H11V11L17,17H19V7H17V13L11,7H9Z"/>
        </svg>
      );
    
    case 'Nuxt':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#00C58E">
          <path d="M6.6,3L12,13.2L17.4,3H21L12,20.4L3,3H6.6M8.4,5L12,11.4L15.6,5H18L12,17.4L6,5H8.4Z"/>
        </svg>
      );
    
    case 'JavaScript':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#F7DF1E">
          <rect width="24" height="24" fill="#F7DF1E" rx="3"/>
          <path d="M7.5,18.5C7.5,19.6 8.4,20.5 9.5,20.5C10.6,20.5 11.5,19.6 11.5,18.5V12H9.5V18.5M16.5,20.5C18.4,20.5 19.5,19.3 19.5,17.5C19.5,15.9 18.7,15.1 17.2,14.4L16.7,14.2C16,13.9 15.7,13.6 15.7,13.1C15.7,12.7 16,12.4 16.5,12.4C17,12.4 17.3,12.7 17.3,13.1H19.5C19.5,11.3 18.4,10.5 16.5,10.5C14.8,10.5 13.7,11.6 13.7,13.1C13.7,14.6 14.5,15.4 15.8,16L16.3,16.2C17.1,16.5 17.5,16.8 17.5,17.4C17.5,17.9 17.1,18.3 16.5,18.3C15.8,18.3 15.4,17.9 15.4,17.4H13.2C13.2,19.2 14.4,20.5 16.5,20.5Z" fill="#000"/>
        </svg>
      );
    
    case 'CSS3':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"/>
        </svg>
      );
    
    case 'Tailwind':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12,6C9.33,6 7.67,7.33 7,10C8,8.67 9.17,8.17 10.5,8.5C11.26,8.67 11.81,9.22 12.41,9.83C13.39,10.81 14.56,12 17,12C19.67,12 21.33,10.67 22,8C21,9.33 19.83,9.83 18.5,9.5C17.74,9.33 17.19,8.78 16.59,8.17C15.61,7.19 14.44,6 12,6M7,12C4.33,12 2.67,13.33 2,16C3,14.67 4.17,14.17 5.5,14.5C6.26,14.67 6.81,15.22 7.41,15.83C8.39,16.81 9.56,18 12,18C14.67,18 16.33,16.67 17,14C16,15.33 14.83,15.83 13.5,15.5C12.74,15.33 12.19,14.78 11.59,14.17C10.61,13.19 9.44,12 7,12Z"/>
        </svg>
      );
    
    case 'SEO':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="#4285F4">
          <path d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M10.5,11.5H8.5V10.5H11.5V9.5H8V8.5H11.5V7.5H7V12.5H10.5V11.5Z"/>
        </svg>
      );
    
    default:
      return null;
  }
};

// Mockup Content Component
const MockupContent = ({ mockup }: { mockup: Mockup }) => {
  if (mockup.title === "Code Editor") {
    return (
      <div className="space-y-1 p-2">
        {mockup.elements.map((el, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${el.height} bg-green-400 opacity-80 rounded`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-2">
      {mockup.elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className={`${el.width} ${el.height} bg-white bg-opacity-30 rounded`}
        />
      ))}
    </div>
  );
};

export default WebDevelopmentInAction;