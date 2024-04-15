import { Button } from '@/components/ui/button';
import { ClerkLoading, UserButton, UserProfile } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href={'/auth/register'}>
        <Button>Signup</Button>
      </Link>
      <Link href={'/auth/signin'}>
        <Button>Signin</Button>
      </Link>
      <Link href={'/auth/logout'}>
        <Button>Logout</Button>
      </Link>
      <UserProfile />
    </>
  );
}
