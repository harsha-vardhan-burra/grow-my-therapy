"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Evaluation Mode Bar */}
      <div className="bg-nocturne text-linen px-4 py-2.5 text-center text-xs md:text-sm font-sans flex items-center justify-between z-50 relative border-b border-borderLinen/20">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-emerald-300 uppercase tracking-widest text-[10px] sm:text-xs">
            Internship Master Deliverable:
          </span>
          <span className="hidden sm:inline text-linen/90">
            Creative Redesign for <strong>Dr. Maya Reynolds, PsyD</strong>
          </span>
          <span className="sm:hidden text-linen/90">
            <strong>Dr. Maya Reynolds</strong> Redesign
          </span>
        </div>
        <Link
          href="/clone"
          className="ml-3 bg-secondary hover:bg-secondary-hover text-linen px-3 py-1 rounded text-xs font-medium tracking-wide transition shrink-0 hidden md:inline-flex items-center gap-1.5"
        >
          <span>View 1:1 Reference Clone</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur-md border-b border-borderLinen/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 h-24 flex items-center justify-between">
          {/* Logo / Identity */}
          <Link href="/" className="group block focus:outline-none focus:ring-1 focus:ring-primary rounded-lg p-1">
            <span className="font-serif text-2xl sm:text-[26px] tracking-tight text-charcoal block font-medium group-hover:text-primary transition-colors">
              Dr. Maya Reynolds, <span className="text-secondary font-normal italic">PsyD</span>
            </span>
            <span className="text-[11px] sm:text-xs font-sans text-sage tracking-[0.12em] uppercase block font-medium">
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-sans text-charcoal font-medium">
            <Link href="#about" className="hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="#specialties" className="hover:text-primary transition-colors py-2">
              Specialties
            </Link>
            <Link href="#approach" className="hover:text-primary transition-colors py-2">
              Approach
            </Link>
            <Link
              href="#office"
              className="text-primary hover:text-primary-hover font-semibold transition-colors py-2 flex items-center gap-1.5"
            >
              <span>Our Office</span>
              <span className="text-[10px] bg-primary/10 text-primary uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link href="#faqs" className="hover:text-primary transition-colors py-2">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary-hover text-linen px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Menu & Quick Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              href="/clone"
              className="text-[11px] bg-secondary/15 text-secondary hover:bg-secondary/25 px-2.5 py-1.5 rounded-full font-medium sm:hidden"
            >
              Clone →
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs bg-primary text-linen px-3.5 py-2 rounded-full font-medium sm:inline-block hidden"
            >
              Consultation
            </button>
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
          <div className="lg:hidden bg-linen border-b border-borderLinen px-6 py-6 space-y-4 font-sans text-charcoal animate-fadeIn">
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
              className="block py-2.5 border-b border-borderLinen/50 text-base font-semibold text-primary flex items-center justify-between"
            >
              <span>Our Santa Monica Office</span>
              <span className="text-[10px] bg-primary/10 text-primary uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                New Section
              </span>
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
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full text-center bg-primary text-linen py-3.5 rounded-full font-medium text-sm shadow-sm"
              >
                Schedule Initial Consultation
              </button>
              <Link
                href="/clone"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center border border-borderLinen text-sage py-2.5 rounded-full font-medium text-xs hover:text-charcoal"
              >
                Switch to Reference Homepage Clone
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
