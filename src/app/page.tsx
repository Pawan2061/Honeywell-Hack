import { WorldComponent } from '@/components/World';
import { NavBar } from '@/components/common/nav-bar';
import { Features } from '@/components/hero/Features';
import { Footer } from '@/components/hero/footer';
import { MainHero } from '@/components/hero/hero-main';
import { Team } from '@/components/hero/team';

export default function Home() {
  // const { sessionId } = useAuth();

  // if (!sessionId)
  //   return (
  //     <>
  //       <Link href={'/auth/register'}>
  //         <Button>Signup</Button>
  //       </Link>
  //       <Link href={'/auth/signin'}>
  //         <Button>Signin</Button>
  //       </Link>
  //       <Link href={'/auth/logout'}>
  //         <Button>Logout</Button>
  //       </Link>
  //       <UserProfile />
  //     </>
  //   );

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Secion */}
      {/* <MainHero />
      <WorldComponent />
      <Features /> */}
      {/* Github Globe */}
      {/* Team */}
      {/* <Team />
      <Footer /> */}
    </main>
  );
}
