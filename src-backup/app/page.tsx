import Hero from '@/components/sections/hero';
import OperatorStory from '@/components/sections/operator-story';
import CaseStudies from '@/components/sections/case-studies';
import Systems from '@/components/sections/systems';
import Process from '@/components/sections/process';
import CTA from '@/components/sections/cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Hero />
      <OperatorStory />
      <CaseStudies />
      <Systems />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
