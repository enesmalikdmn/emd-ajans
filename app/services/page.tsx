import Header from '../components/Header';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 min-h-screen bg-gray-50">
        <Services />
      </div>
    </main>
  );
} 