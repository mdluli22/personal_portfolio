"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { Github, Linkedin } from "lucide-react"; 

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 relative">
        <h1 className="text-xl font-serif italic">Akhona&apos;s Portfolio.</h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-700">
          <li>
            <a href="#home" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-black transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-black transition">
              Services
            </a>
          </li>
        </ul>
          {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="mailto:akhonamdluli22@gmail.com"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition inline-block"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
            <a className="hover:text-black cursor-pointer">Home</a>
            <a className="hover:text-black cursor-pointer">Experience</a>
            <a className="hover:text-black cursor-pointer">Projects</a>
            <a className="hover:text-black cursor-pointer">Services</a>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition w-fit">
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-20">
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="bg-white shadow-md px-4 py-2 rounded-full w-fit text-sm text-gray-700 flex items-center gap-2">
            <span className="h-3 w-3 bg-orange-500 rounded-full"></span>
            Available for new opportunities
          </div>
          <h2 className="text-5xl md:text-6xl font-light italic">
            Hey there,
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold">I&apos;M AKHONA MDLULI</h1>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/mdluli22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhona-mdluli-68900630b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/Akhona Amanda Mdluli CV.pdf"
              download
              className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-400 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 lg:mt-0 flex justify-center">
            <Image
                src="/images/selfie.jpeg"
                alt="selfie"
                width={450}
                height={400}
                className="rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  );
}