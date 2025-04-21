import Header from '../components/Header';
import About from '../components/About';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 min-h-screen bg-gray-50">
        <About />
      </div>
    </main>
  );
} 