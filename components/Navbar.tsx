"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur-md border-b border-borderLinen/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-4">
          {/* Logo / Identity - Compact on Mobile */}
          <Link
            href="/"
            className="group block focus:outline-none focus:ring-1 focus:ring-primary rounded-lg py-0.5 shrink min-w-0"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-[25px] tracking-tight text-charcoal block font-medium group-hover:text-primary transition-colors leading-tight">
              Dr. Maya Reynolds, <span className="text-secondary font-normal italic">PsyD</span>
            </span>
            <span className="text-[9.5px] sm:text-[11px] lg:text-xs font-sans text-sage tracking-[0.04em] sm:tracking-[0.1em] uppercase block font-medium leading-tight pt-0.5 truncate max-w-[230px] xs:max-w-[280px] sm:max-w-none">
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation - Optimized Hierarchy & Breathing Room */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] xl:text-[15px] font-sans text-charcoal/90 font-medium whitespace-nowrap">
            <Link href="#about" className="hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="#specialties" className="hover:text-primary transition-colors py-2">
              Specialties
            </Link>
            <Link href="#approach" className="hover:text-primary transition-colors py-2">
              Approach
            </Link>
            <Link href="#office" className="hover:text-primary transition-colors py-2 whitespace-nowrap">
              Our Office
            </Link>
            <Link href="#faqs" className="hover:text-primary transition-colors py-2">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* CTA & Actions - Clear Priority */}
          <div className="hidden lg:flex items-center shrink-0 pl-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary-hover text-linen px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Right: Single Clean Hamburger Menu */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-charcoal" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-linen border-b border-borderLinen px-6 py-6 space-y-3 font-sans text-charcoal animate-fadeIn">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 border-b border-borderLinen/50 text-base font-medium hover:text-primary transition"
            >
              About Dr. Reynolds
            </Link>
            <Link
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 border-b border-borderLinen/50 text-base font-medium hover:text-primary transition"
            >
              Clinical Specialties
            </Link>
            <Link
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 border-b border-borderLinen/50 text-base font-medium hover:text-primary transition"
            >
              Clinical Approach &amp; Modalities
            </Link>
            <Link
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 border-b border-borderLinen/50 text-base font-medium hover:text-primary transition"
            >
              Our Santa Monica Office
            </Link>
            <Link
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 border-b border-borderLinen/50 text-base font-medium hover:text-primary transition"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium hover:text-primary transition"
            >
              Contact &amp; Location
            </Link>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full text-center bg-primary text-linen py-3 rounded-full font-medium text-sm shadow-sm hover:bg-primary-hover transition"
              >
                Schedule Initial Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
