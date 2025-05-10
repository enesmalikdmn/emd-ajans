'use client';

import Header from '../components/Header';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 min-h-screen bg-gray-50">
        <Pricing />
      </div>
    </main>
  );
} 