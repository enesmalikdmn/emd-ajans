'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WhatsAppButton = () => {
  const whatsappNumber = "905444124080"; // Telefon numarasını buraya ekleyin (başında ülke kodu ile)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
        className="block bg-[#25D366] p-3.5 rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors duration-300"
        tabIndex={0}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-7 h-7 text-white"
          fill="currentColor"
        >
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93a7.9 7.9 0 0 0 1.07 3.98L4 20l4.18-1.1a7.93 7.93 0 0 0 3.87 1h.04c4.37 0 7.92-3.55 7.92-7.93a7.87 7.87 0 0 0-2.4-5.65zM12.05 18.29h-.03a6.59 6.59 0 0 1-3.35-.92l-.24-.14-2.48.65.66-2.4-.15-.25a6.56 6.56 0 0 1-1.01-3.49c0-3.64 2.97-6.6 6.6-6.6a6.58 6.58 0 0 1 6.6 6.6c0 3.65-2.96 6.55-6.6 6.55zm3.65-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.42 5.42 0 0 1-2.66-2.33c-.2-.35.2-.32.57-1.08a.37.37 0 0 0-.02-.35c-.04-.1-.45-1.09-.62-1.5-.17-.38-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01s-.35.05-.53.25c-.18.2-.7.69-.7 1.67 0 .99.72 1.94.83 2.08.1.14 1.48 2.26 3.59 3.17.5.21.9.35 1.2.45.51.16.97.14 1.33.08.4-.06 1.25-.51 1.43-1 .18-.5.18-.92.13-1a.97.97 0 0 0-.44-.25z"/>
        </svg>
      </Link>
    </motion.div>
  );
};

export default WhatsAppButton; 