"use client";
import Link from "next/link";
import { Flame, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="container-px flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-px-orange" />
          <span className="font-bold tracking-wide">ProjectX</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/kits" className="opacity-90 hover:opacity-100">Kits</Link>
          <Link href="/#programs" className="opacity-90 hover:opacity-100">Programs</Link>
          <Link href="/#why" className="opacity-90 hover:opacity-100">Why ProjectX</Link>
          <Link
            href="/#contact"
            className="rounded-xl2 bg-px-orange px-4 py-2 font-medium text-black shadow-soft hover:scale-[1.02] active:scale-[0.99] transition"
          >
            Get a Demo
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="container-px pb-4 md:hidden">
          <div className="grid gap-2">
            <Link href="/kits" onClick={() => setOpen(false)}>Kits</Link>
            <a href="/#programs" onClick={() => setOpen(false)}>Programs</a>
            <a href="/#why" onClick={() => setOpen(false)}>Why ProjectX</a>
            <a href="/#contact" onClick={() => setOpen(false)}
               className="mt-2 rounded-xl2 bg-px-orange px-4 py-2 font-medium text-black shadow-soft">
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
