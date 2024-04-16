import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import MobileNavbarDrawer from './mobile-nav';
import { buttonVariants } from '../ui/button';
import { BookIcon } from 'lucide-react';
import { NavItems } from './nav-icons';
import { Logo } from './logo';

export const NavBar = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        <div className="p-2 flex gap-2 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="ml-auto items-center">
            <div className={buttonVariants({})}>
              <SignInButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
      <div className="p-2 flex gap-2 items-center">
        <span className="md:hidden ml-2">
          <MobileNavbarDrawer />
        </span>
        <Link href="/">
          <Logo />
        </Link>
        <NavItems />
        <div className="ml-auto flex items-center"></div>
        <span>
          <UserButton afterSignOutUrl="/" />
        </span>
      </div>
    </div>
  );
};
