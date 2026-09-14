"use client";

import { useState } from "react";
import { X, CheckCircle, Calendar, ShieldCheck, MapPin } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "in-person", // in-person or telehealth
    concern: "anxiety",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-linen border border-borderLinen rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sage hover:text-charcoal rounded-full hover:bg-sand/60 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl text-charcoal">
              Consultation Request Received
            </h3>
            <p className="text-sage text-sm max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name || "there"}. Dr. Maya Reynolds will review your
              inquiry and respond within 1–2 business days with initial consultation
              availability.
            </p>
            <div className="p-4 bg-sand/60 rounded-xl text-xs text-sage max-w-md mx-auto text-left space-y-1">
              <p className="font-semibold text-charcoal">Selected Care Preference:</p>
              <p>
                Format:{" "}
                <span className="capitalize font-medium text-primary">
                  {formData.format === "in-person"
                    ? "In-Person (Santa Monica Office)"
                    : "Secure Telehealth (California)"}
                </span>
              </p>
              <p>
                Focus Area:{" "}
                <span className="capitalize font-medium text-primary">
                  {formData.concern}
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 bg-primary hover:bg-primary-hover text-linen px-8 py-3 rounded-full text-sm font-medium tracking-wide transition shadow-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-secondary uppercase block mb-1">
                Direct Practice Inquiry
              </span>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-charcoal">
                Schedule an Initial Consultation
              </h3>
              <p className="text-xs sm:text-sm text-sage mt-1">
                A collaborative, 20-minute phone or video conversation to discuss your needs and ensure we are a good fit.
              </p>
            </div>

            {/* Practice format pills */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal block">
                Session Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, format: "in-person" })}
                  className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition text-xs sm:text-sm ${
                    formData.format === "in-person"
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-borderLinen bg-studio text-sage hover:border-borderLinen/80"
                  }`}
                >
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <div className="font-medium text-charcoal">In-Person</div>
                    <div className="text-[11px] text-sage">Santa Monica, CA</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, format: "telehealth" })}
                  className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition text-xs sm:text-sm ${
                    formData.format === "telehealth"
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-borderLinen bg-studio text-sage hover:border-borderLinen/80"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <div className="font-medium text-charcoal">Secure Telehealth</div>
                    <div className="text-[11px] text-sage">Anywhere in California</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-charcoal block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Maya Lin"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderLinen bg-studio text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-charcoal block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="maya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderLinen bg-studio text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-charcoal block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(310) 555-0192"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderLinen bg-studio text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-charcoal block mb-1">
                  Primary Concern
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderLinen bg-studio text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-charcoal"
                >
                  <option value="anxiety">Anxiety &amp; Panic</option>
                  <option value="trauma">Trauma &amp; Past Experiences (EMDR)</option>
                  <option value="burnout">Burnout &amp; High Internal Pressure</option>
                  <option value="somatic">Somatic &amp; Nervous System Regulation</option>
                  <option value="other">General Life Transition</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-charcoal block mb-1">
                Brief Note (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share a brief overview of what brings you to therapy at this time..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-borderLinen bg-studio text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-sage flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Confidential &amp; HIPAA-conscious
              </span>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-linen px-7 py-3 rounded-full text-sm font-medium tracking-wide transition shadow-sm hover:shadow"
              >
                Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
