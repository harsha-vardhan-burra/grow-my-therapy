"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function CloneNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#F5F3ED] border-b border-[#E8E4DC] transition-all">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/clone" className="relative block h-14 w-60 md:w-72">
            <Image
              src="/clone/logo.png"
              alt="Conejo Valley Family Counseling"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-mulish text-[#2A2A2A]">
            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#7A7062] transition py-2"
                onClick={() => toggleDropdown("about")}
              >
                About
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-[#FAF9F5] shadow-lg border border-[#E8E4DC] py-3 px-4 min-w-[220px] rounded text-sm z-50">
                <Link href="#about" className="block py-1.5 hover:text-[#7A7062] transition">Jennifer Anderson, LMFT</Link>
                <Link href="#team" className="block py-1.5 hover:text-[#7A7062] transition">Our Team</Link>
              </div>
            </div>

            {/* Specialties Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#7A7062] transition py-2"
                onClick={() => toggleDropdown("specialties")}
              >
                Specialties
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-[#FAF9F5] shadow-lg border border-[#E8E4DC] py-3 px-4 min-w-[240px] rounded text-sm z-50">
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Trauma Counseling</Link>
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Dissociation & DID</Link>
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Special Needs Parenting</Link>
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Couples & Family</Link>
              </div>
            </div>

            {/* Methods Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#7A7062] transition py-2"
                onClick={() => toggleDropdown("methods")}
              >
                Methods
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-[#FAF9F5] shadow-lg border border-[#E8E4DC] py-3 px-4 min-w-[200px] rounded text-sm z-50">
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">EMDR Therapy</Link>
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Brainspotting</Link>
                <Link href="#specialties" className="block py-1.5 hover:text-[#7A7062] transition">Somatic Therapy</Link>
              </div>
            </div>

            <Link href="#faqs" className="hover:text-[#7A7062] transition">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-[#7A7062] transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-block bg-[#E3D9CA] hover:bg-[#D4C8B6] text-[#2A2A2A] px-6 py-3 rounded-full text-sm font-mulish font-medium tracking-wide transition-all shadow-sm hover:shadow"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A2A2A] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F3ED] border-b border-[#E8E4DC] px-6 py-6 space-y-4 font-mulish text-[#2A2A2A]">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-[#E8E4DC]/60 text-base"
            >
              About
            </Link>
            <Link
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-[#E8E4DC]/60 text-base"
            >
              Specialties
            </Link>
            <Link
              href="#how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-[#E8E4DC]/60 text-base"
            >
              How We Work
            </Link>
            <Link
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-[#E8E4DC]/60 text-base"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base"
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#E3D9CA] text-[#2A2A2A] py-3 rounded-full font-medium"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
