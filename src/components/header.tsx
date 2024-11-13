import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="container mx-auto py-6">
      <nav className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
