import { SignOutButton, useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function LogoutPage() {
  const { sessionId } = useAuth();
  if (!sessionId) {
    return redirect('/auth/signin');
  }

  return <SignOutButton signOutOptions={{ sessionId }} />;
}
