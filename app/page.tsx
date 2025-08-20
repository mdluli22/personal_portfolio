"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-[#F7F6EF] text-neutral-900 min-h-screen">
      <NavBar />
      <Hero />
    </div>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-20 supports-[backdrop-filter]:bg-[#F7F6EF]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 grid place-items-center">
            <div className="h-3 w-3 rounded-full bg-white/90" />
          </div>
          <span className="font-semibold tracking-wide">VOICES UNITED</span>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#programs" className="hover:opacity-70">PROGRAMS</Link>
          <Link href="#blog" className="hover:opacity-70">BLOG & ADVOCACY</Link>
          <Link href="#stories" className="hover:opacity-70">STORIES</Link>
          <Link href="#contact" className="hover:opacity-70">CONTACT</Link>
        </nav>

        {/* Right: Language + Donate */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Change language"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300"
          >
            <Globe className="h-5 w-5" />
          </button>
          <Link
            href="#donate"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-white"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-10 pb-24 md:py-20">
      <div className="flex flex-col items-center text-center">
        {/* Big masked headline with the image clipped to the text */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-extrabold leading-[0.85] text-[clamp(64px,14vw,240px)] tracking-tight w-full select-none"
          style={{
            backgroundImage: "url('/hero.jpg')", // Put a high‑res photo into /public/hero.jpg
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          VOICES
          <br />
          UNITED
        </motion.h1>

        {/* Call to actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#donate"
            className="rounded-full px-8 py-4 text-base font-semibold bg-orange-500 text-white shadow hover:scale-105 transition"
          >
            DONATE
          </Link>
          <Link
            href="#story"
            className="rounded-full px-8 py-4 text-base font-semibold border border-neutral-400 bg-white/50 hover:bg-white shadow-sm transition"
          >
            TELL MY STORY
          </Link>
        </div>
      </div>
    </section>
  );
}
