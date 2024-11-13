import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="container mx-auto py-6">
      <nav className="flex justify-between items-center">
        <div className="flex gap-10">
          <Link href="/">Hem</Link>
          <Link href="/about">Om Oss</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
        <select name="language" id="language" className="px-2 py-1 rounded">
          <option value="se">Swedish</option>
          <option value="en">English</option>
        </select>
      </nav>
    </header>
  );
}
