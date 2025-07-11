'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WebDevelopmentInAction from './components/WebDevelopmentInAction';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Process />
      <Services simpleHeader />
      <WebDevelopmentInAction />
    </main>
  );
}
