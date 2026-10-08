"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Share2, Sprout } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter API call here
    console.log("Newsletter signup:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="w-full bg-[#FAFAF8] px-6 py-16 lg:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column - Brand + Newsletter */}
          <div className="space-y-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-block text-xl font-serif font-bold tracking-wide text-[#0A1F15] uppercase hover:opacity-80 transition-opacity">
                KRISHNA BHATTARI
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                Dedicated to preserving the wilderness of Bardia National Park and fostering a new generation of conservation-minded travelers.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-1 text-[#0A1F15] hover:text-[#1B3B2F] transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-1 text-[#0A1F15] hover:text-[#1B3B2F] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-1 text-[#0A1F15] hover:text-[#1B3B2F] transition-colors"
                aria-label="Conservation"
              >
                <Sprout className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-semibold tracking-[0.15em] text-[#0A1F15] uppercase">
                JOIN THE FIELD JOURNAL
              </h4>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E0DDD8] text-[#0A1F15] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0A1F15] transition-colors"
                />
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#0A1F15] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#1B3B2F] transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>

              {/* Success Message */}
              {subscribed && (
                <p className="text-xs text-[#1B3B2F] font-medium">
                  ✨ Welcome to the Field Journal!
                </p>
              )}
            </div>
          </div>

          {/* Middle Column - Explore */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold tracking-[0.15em] text-[#0A1F15] uppercase">
              EXPLORE
            </h5>
            
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/journal" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Editorial Journal
                </Link>
              </li>
              <li>
                <Link 
                  href="/archive" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Archive
                </Link>
              </li>
              <li>
                <Link 
                  href="/conservation" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Conservation Ethics
                </Link>
              </li>
              <li>
                <Link 
                  href="/field-notes" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Field Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Connect */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold tracking-[0.15em] text-[#0A1F15] uppercase">
              CONNECT
            </h5>
            
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/#contact" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link 
                  href="/booking" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Expedition Booking
                </Link>
              </li>
              <li>
                <Link 
                  href="/media-kit" 
                  className="text-sm text-gray-600 hover:text-[#0A1F15] transition-colors font-medium"
                >
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E6E1]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 italic tracking-wide">
              © 2024 KRISHNA BHATTARI. PROTECTING THE UNTAMED.
            </p>
            
            <div className="flex items-center gap-8">
              <Link 
                href="/privacy" 
                className="text-xs text-gray-400 hover:text-[#0A1F15] tracking-wide transition-colors uppercase"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-xs text-gray-400 hover:text-[#0A1F15] tracking-wide transition-colors uppercase"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}