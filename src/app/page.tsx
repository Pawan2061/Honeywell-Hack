import { WorldComponent } from '@/components/World';
import { Features } from '@/components/hero/Features';
import { MainHero } from '@/components/hero/hero-main';

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
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Nav Bar */}
      {/* Hero Secion */}
      <MainHero />
      <WorldComponent />
      <Features />
      {/* Github Globe */}
    </main>
  );
}
