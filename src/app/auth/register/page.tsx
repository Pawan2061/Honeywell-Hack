import { SignUp, useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Page() {
  const { sessionId } = useAuth();

  if (sessionId) {
    return redirect('/dashboard');
  }

  return <SignUp />;
}
