import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/photo1.png"
            width={500}
            height={38}
            alt="GatherEase Logo"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex md:justify-between md:items-center hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full bg-purple-900" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button asChild className="rounded-full bg-purple-900" size="lg">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
