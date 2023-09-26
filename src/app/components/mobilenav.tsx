"use client";
import Image from "next/image";
import Link from "next/link";
import { Drawer, IconButton, Button } from "../exportfile";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useState } from "react";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="flex justify-between items-center mt-5 md:hidden">
      <Link href="/" className="flex gap-3 items-center font-bold text-2xl">
        <Image src="/svg/logo.svg" alt="logo" height={40} width={40} />
        <h2>GoRealtor</h2>
      </Link>
      <IconButton onClick={openDrawer} variant="outlined" className=" border-2">
        <CgMenuRight size={20} />
      </IconButton>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 flex flex-col justify-between"
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/svg/logo.svg" alt="logo" height={40} width={40} />
          </Link>
          <IconButton
            variant="outlined"
            onClick={closeDrawer}
            className=" border-2"
          >
            <CgClose size={20} />
          </IconButton>
        </div>
        <div className="flex flex-col gap-5 text-xl">
          <Link href="/about">About Us</Link>
          <Link href="/property">Properties</Link>
          <Link href="/agent">Agent</Link>
        </div>
        <Button className="w-full bg-primary">Get Started</Button>
      </Drawer>
    </div>
  );
};

export default MobileNav;
