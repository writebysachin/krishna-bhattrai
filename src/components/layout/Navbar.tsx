"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EB] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:opacity-80 transition-opacity">
            Krishna Bhattari
          </Link>
        </div>

        {/* Book Button */}
        <Link
          href="/#contact"
          className="px-6 py-2 bg-[#1B3B2F] text-white text-xs font-medium tracking-wide hover:bg-[#2A4A3F] transition-colors"
        >
          BOOK YOUR STAY
        </Link>
      </div>
    </nav>
  );
}