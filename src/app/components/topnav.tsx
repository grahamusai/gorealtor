import { Button } from "../exportfile";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="hidden md:flex justify-between items-center mt-5">
      <Link href="/" className="flex gap-3 items-center font-bold text-2xl">
        <Image src="/svg/logo.svg" alt="logo" height={40} width={40} />
        <h2>GoRealtor</h2>
      </Link>
      <div className=" flex gap-5 items-center justify-center ">
        <Link href="/about">About Us</Link>
        <Link href="/property">Properties</Link>
        <Link href="/agent">Agent</Link>
        <Button className="rounded-full bg-primary" size="sm">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
