'use client';
import Header from '../components/Header';
import Contact from '../components/Contact';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 min-h-screen bg-gray-50">
        <Suspense fallback={<div className="text-center py-12">Yükleniyor...</div>}>
          <Contact />
        </Suspense>
      </div>
    </main>
  );
} 