'use client';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 min-h-screen bg-gray-50">
        <Contact />
      </div>
    </main>
  );
} 