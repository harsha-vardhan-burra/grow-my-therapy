"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Sparkles, VolumeX, Shield, Maximize2, X } from "lucide-react";

export default function OfficeGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    {
      src: "/maya/office1.jpg",
      title: "Consultation & Seating Space",
      caption: "Quiet, comfortable seating designed with natural fibers, warm lighting, and grounding comfort.",
      tag: "Main Seating",
    },
    {
      src: "/maya/office2.jpg",
      title: "Reflective Library & Workspace",
      caption: "An uncluttered environment with reference materials, warm timber, and soft atmospheric tones.",
      tag: "Study & Library",
    },
    {
      src: "/maya/office_detail.jpg",
      title: "Natural Morning Sunlight",
      caption: "Expansive light filtering through sheer drapes, creating a soothing, peaceful arrival experience.",
      tag: "Sanctuary Lighting",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Editorial 3-Image Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Main Hero Image (7 cols) */}
        <div
          onClick={() => setActiveImage(images[0].src)}
          className="md:col-span-7 group relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-card border border-borderLinen cursor-pointer"
        >
          <Image
            src={images[0].src}
            alt={images[0].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div className="absolute bottom-6 left-6 right-6 text-linen">
            <span className="inline-block bg-primary/80 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-2 border border-linen/20">
              {images[0].tag}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-linen font-medium">
              {images[0].title}
            </h4>
            <p className="text-xs sm:text-sm text-linen/80 mt-1 max-w-lg leading-relaxed">
              {images[0].caption}
            </p>
          </div>
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-linen opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Stacked Secondary Images (5 cols) */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {images.slice(1).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.src)}
              className="group relative h-[220px] sm:h-[248px] rounded-3xl overflow-hidden shadow-card border border-borderLinen cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-4 left-5 right-5 text-linen">
                <span className="inline-block bg-secondary/80 backdrop-blur-sm text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-1 border border-linen/20">
                  {img.tag}
                </span>
                <h5 className="font-serif text-lg sm:text-xl text-linen font-medium">
                  {img.title}
                </h5>
                <p className="text-xs text-linen/80 line-clamp-1 mt-0.5">
                  {img.caption}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1.5 rounded-full text-linen opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spatial Quality Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        <div className="p-6 bg-studio border border-borderLinen rounded-2xl space-y-2 shadow-subtle">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <h5 className="font-serif text-lg text-charcoal font-medium">Natural Coastal Light</h5>
          <p className="text-xs sm:text-sm text-sage leading-relaxed">
            Gentle morning and afternoon light filters in through wide windows, easing eye strain and supporting nervous system calm.
          </p>
        </div>

        <div className="p-6 bg-studio border border-borderLinen rounded-2xl space-y-2 shadow-subtle">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <VolumeX className="w-5 h-5" />
          </div>
          <h5 className="font-serif text-lg text-charcoal font-medium">Acoustic Privacy</h5>
          <p className="text-xs sm:text-sm text-sage leading-relaxed">
            Engineered sound buffering and white noise buffers ensure complete confidentiality for sensitive conversations.
          </p>
        </div>

        <div className="p-6 bg-studio border border-borderLinen rounded-2xl space-y-2 shadow-subtle">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h5 className="font-serif text-lg text-charcoal font-medium">Uncluttered Comfort</h5>
          <p className="text-xs sm:text-sm text-sage leading-relaxed">
            An intentionally minimalist interior free from visual noise, designed to help busy minds settle the moment they sit down.
          </p>
        </div>

        <div className="p-6 bg-studio border border-borderLinen rounded-2xl space-y-2 shadow-subtle">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h5 className="font-serif text-lg text-charcoal font-medium">Santa Monica &amp; CA Telehealth</h5>
          <p className="text-xs sm:text-sm text-sage leading-relaxed">
            In-person care at 123th Street 45 W in Santa Monica, paired with secure, HIPAA-compliant telehealth throughout California.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full aspect-[4/3] max-h-[85vh] rounded-2xl overflow-hidden">
            <Image src={activeImage} alt="Enlarged office view" fill className="object-contain" />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
              aria-label="Close enlarged photo"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
