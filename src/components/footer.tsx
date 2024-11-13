import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 w-full p-10 flex justify-between text-xs">
      <>Copyright &copy; {year}</>
      <div className="flex gap-4">
        <Link href="/privacy">Privacy</Link>
        <Link href="/legal">Legal</Link>
      </div>
    </footer>
  );
}
