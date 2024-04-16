import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import MobileNavbarDrawer from './mobile-nav';
import { buttonVariants } from '../ui/button';
import { BookIcon } from 'lucide-react';
import { NavItems } from './nav-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export const NavBar = async () => {
  console.log('----------------------------------------------');
  const user = await currentUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        <div className="p-2 flex gap-2 items-center">
          <Link href="/">
            {/* <Icons.roadmapai className="h-[40px] w-[120px]" /> */}
            <BookIcon size={40} />
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
          <BookIcon size={40} color="black" />
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