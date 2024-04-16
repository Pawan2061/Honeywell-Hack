import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const MobileNavbarDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="mr-2 h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className=" h-full flex flex-col items-center justify-center gap-4"
      >
        <SheetClose asChild>
          <Link href="/chat">Chat</Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbarDrawer;
