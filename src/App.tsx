import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sermons } from './components/Sermons';
import { WorshipInfo } from './components/WorshipInfo';
import { NewsGallery } from './components/NewsGallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-sans text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Sermons />
        <WorshipInfo />
        <NewsGallery />
      </main>
      <Footer />
    </div>
  );
}
