"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import style from "./navbar.module.scss";
import LogButtons from "./LogButtons";
import SmLinks from "./SmLinks";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const hasNav = ["/login", "/Signup"].includes(pathname);

  function handleSignIn(path: string) {
    const to = `/${path}`;
    return () => {
      router.push(to);
    };
  }

  return (
    !hasNav && (
      <nav className={`${style.nav_container} bg-secondary`}>
        <header className="font-geo font-extrabold text-3xl">
          <Link href="/">BetterAsk</Link>
        </header>
        <SmLinks />
        {/* <LogButtons handleSignIn={handleSignIn} /> */}
      </nav>
    )
  );
}
