import { WorldComponent } from '@/components/World';
import { Features } from '@/components/hero/Features';
import { Footer } from '@/components/hero/footer';
import { MainHero } from '@/components/hero/hero-main';
import { Team } from '@/components/hero/team';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <MainHero />
      <WorldComponent />
      <Features />
      <Team />
      <Footer />
    </main>
  );
}
