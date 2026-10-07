import AnnouncementBar from './components/common/AnnouncementBar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Hero from './components/Hero';
import About from './components/About';
import OurOffice from './components/OurOffice';
import OurTechnology from './components/OurTechnology';
import Invisalign from './components/Invisalign';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <AnnouncementBar />
      <Header />
      <Hero />
      <About />
      <OurOffice />
      <OurTechnology />
      <Invisalign />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}