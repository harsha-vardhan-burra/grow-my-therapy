"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Calendar,
  Sparkles,
  HeartHandshake,
  Compass,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/Accordion";
import OfficeGallery from "@/components/OfficeGallery";
import ConsultationModal from "@/components/ConsultationModal";

export default function RedesignPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const expertiseTags = [
    "Anxiety & Panic",
    "Complex Trauma",
    "EMDR Therapy",
    "Professional Burnout",
    "Perfectionism",
    "High Internal Pressure",
    "Somatic Techniques",
    "Mindfulness-Based Care",
    "Cognitive-Behavioral Therapy (CBT)",
    "Nervous System Regulation",
    "Relational Safety",
    "Santa Monica & CA Telehealth",
  ];

  const specialties = [
    {
      title: "Anxiety & Panic Management",
      icon: Compass,
      subtitle: "Moving beyond constant worry & physical bracing",
      description:
        "For thoughtful, high-achieving adults who feel functional on the outside while battling racing thoughts, muscle tension, and sleep disruption. We integrate CBT and somatic grounding to regulate your nervous system.",
    },
    {
      title: "Trauma & Complex PTSD (EMDR)",
      icon: ShieldCheck,
      subtitle: "Paced carefully with safety and stabilization",
      description:
        "Addressing both single-incident events and long-standing patterns from childhood or chronic stress. We use EMDR and body-oriented methods to help rework how painful memories are stored without overwhelming you.",
    },
    {
      title: "Burnout & Perfectionism Recovery",
      icon: Sparkles,
      subtitle: "Sustainable living for professionals & creatives",
      description:
        "Supporting entrepreneurs, executives, and creatives who feel disconnected after years of pushing through stress. Therapy becomes a protected space to slow down, drop the facade, and develop sustainable work and life rhythms.",
    },
    {
      title: "Mind-Body & Somatic Regulation",
      icon: HeartHandshake,
      subtitle: "Bridging emotional and physiological experiences",
      description:
        "Helping you understand the physiological language of your stress response. We develop real-time regulation practices that help you feel grounded, safe, and present in your daily life—not just during sessions.",
    },
  ];

  const faqs = [
    {
      question: "Where is your office located, and do you offer telehealth?",
      answer:
        "My physical practice is located at 123th Street 45 W, Santa Monica, CA 90401. I offer in-person sessions in this quiet, private office setting, as well as secure, HIPAA-compliant telehealth sessions for clients residing anywhere in the state of California.",
    },
    {
      question: "What does an initial consultation look like?",
      answer:
        "We begin with a brief, 20-minute phone or video conversation. This gives us a chance to discuss what you are navigating, answer your questions about my approach, and ensure my clinical specialties align with your specific goals. There is no obligation to move forward unless you feel comfortable.",
    },
    {
      question: "How do you integrate CBT, EMDR, and somatic methods?",
      answer:
        "I take an integrative, evidence-based approach. While Cognitive-Behavioral Therapy (CBT) helps us examine unhelpful thought loops, EMDR works to reprocess deeper traumatic memories stored in the brain, and somatic/mindfulness techniques address how stress manifests physically in your body. We tailor this blend to your needs.",
    },
    {
      question: "How is trauma work paced to ensure safety?",
      answer:
        "Trauma therapy is always paced with great care. We prioritize stabilization, grounding tools, and building emotional safety before processing difficult memories. You remain in control of the pace throughout, ensuring you leave sessions feeling grounded and equipped for your daily life.",
    },
    {
      question: "Who is your practice specifically designed for?",
      answer:
        "My practice primarily serves high-achieving, self-aware adults, professionals, entrepreneurs, and creatives who carry high internal standards. Many feel exhausted from holding everything together and are seeking depth-oriented, collaborative support to rebuild genuine ease.",
    },
  ];

  return (
    <div className="bg-linen text-charcoal font-sans min-h-screen selection:bg-accent/20">
      <Navbar />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* SECTION 1: HERO */}
      <section id="hero" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Santa Monica, CA &amp; California Telehealth</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] text-charcoal font-medium tracking-tight">
              Grounded, depth-oriented therapy for{" "}
              <span className="italic font-normal text-secondary">high-achieving adults.</span>
            </h1>

            <p className="text-base sm:text-lg text-sage leading-relaxed">
              Specialized psychological care for anxiety, panic, trauma, and
              burnout. Helping thoughtful minds move from silent internal exhaustion
              toward lasting emotional and physiological regulation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-linen px-8 py-4 rounded-full text-[15px] font-medium tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                <span>Schedule Initial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="#approach"
                className="px-7 py-4 rounded-full text-[15px] font-medium text-charcoal border border-borderLinen hover:bg-sand/60 transition-colors text-center"
              >
                Explore My Approach
              </Link>
            </div>

            <div className="pt-6 border-t border-borderLinen/60 flex items-center gap-6 text-xs text-sage font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-secondary" /> In-Person &amp; Telehealth
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-secondary" /> Evidence-Based (CBT &amp; EMDR)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-secondary" /> Collaborative &amp; Grounded
              </span>
            </div>
          </div>

          {/* Right Imagery Collage (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[440px] h-[480px] sm:h-[540px]">
              {/* Secondary Architectural Image (Back, Arch Top) */}
              <div className="absolute top-0 right-0 w-[68%] h-[80%] rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-card border border-borderLinen">
                <Image
                  src="/maya/hero_sanctuary.jpg"
                  alt="Calm, naturally lit Santa Monica therapy sanctuary"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Primary Headshot: Dr. Maya Reynolds (Front, Arch Top) */}
              <div className="absolute bottom-0 left-0 w-[64%] h-[78%] rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-linen">
                <Image
                  src="/maya/reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 right-6 bg-studio border border-borderLinen px-4 py-2.5 rounded-2xl shadow-subtle flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                    Dr. Maya Reynolds, PsyD
                  </div>
                  <div className="text-[10px] text-sage">Licensed Clinical Psychologist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EMPATHY & THE "FUNCTIONAL" BURDEN */}
      <section id="about" className="py-20 lg:py-28 bg-sand/30 border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase block">
              Understanding Your Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight text-charcoal font-medium">
              When being &ldquo;functional&rdquo; on the outside feels{" "}
              <span className="italic text-secondary">exhausting on the inside.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal font-medium leading-relaxed">
              Many of the people I work with are high-achieving, thoughtful, and
              self-aware—but internally feel exhausted, stuck in overthinking, or
              emotionally on edge.
            </p>

            <p className="text-sage leading-relaxed text-sm sm:text-base">
              Clients frequently come to me feeling capable in their daily
              responsibilities while quietly struggling with constant worry, tension
              in their body, difficulty sleeping, or a persistent sense that they are
              always bracing for something to go wrong. Others are navigating the
              lingering effects of earlier life experiences that continue to affect
              their relationships, confidence, or sense of safety.
            </p>

            <p className="text-sage leading-relaxed text-sm sm:text-base">
              First and foremost, I believe what you are experiencing is real,
              valid, and worthy of thoughtful care. In therapy, we create a calm,
              confidential container to slow down, look beneath the surface, and
              develop sustainable ways of moving through the world.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary-hover border-b-2 border-primary/40 hover:border-primary pb-1 transition-all"
              >
                <span>Schedule a Confidential Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Arch Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] h-[480px] sm:h-[520px] rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-card border border-borderLinen">
              <Image
                src="/maya/empathy_pause.jpg"
                alt="Reflective calm in natural sunlight"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO I WORK WITH (3-COLUMN AUDIENCE GRID) */}
      <section className="py-20 lg:py-28 bg-studio border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              Target Populations &amp; Concerns
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-charcoal font-medium">
              Who I <span className="italic text-secondary">Work With</span>
            </h2>
            <p className="text-sm sm:text-base text-sage">
              Compassionate, specialized psychological support tailored to the unique
              realities of high-functioning adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="bg-linen/40 border border-borderLinen p-6 sm:p-8 rounded-3xl space-y-6 shadow-subtle hover:shadow-card transition-all duration-300">
              <div className="relative w-full aspect-[4/5] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sm">
                <Image
                  src="/maya/audience_anxiety.jpg"
                  alt="Adult navigating anxiety and panic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h4 className="font-serif text-2xl text-charcoal font-medium">
                  Anxiety &amp; Panic
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  For individuals carrying constant internal worry, physiological
                  bracing, difficulty sleeping, or unexpected panic episodes. We
                  work to unravel catastrophic thinking and regulate physical stress.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-linen/40 border border-borderLinen p-6 sm:p-8 rounded-3xl space-y-6 shadow-subtle hover:shadow-card transition-all duration-300">
              <div className="relative w-full aspect-[4/5] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sm">
                <Image
                  src="/maya/audience_trauma.jpg"
                  alt="Adult processing trauma and past experiences"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h4 className="font-serif text-2xl text-charcoal font-medium">
                  Trauma &amp; Past Stress
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  Supporting adults affected by single-incident trauma or complex
                  childhood and relational stress. Paced with care, emphasizing
                  stabilization and reclaiming a felt sense of safety in daily life.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-linen/40 border border-borderLinen p-6 sm:p-8 rounded-3xl space-y-6 shadow-subtle hover:shadow-card transition-all duration-300">
              <div className="relative w-full aspect-[4/5] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sm">
                <Image
                  src="/maya/audience_burnout.jpg"
                  alt="Professional dealing with burnout and perfectionism"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h4 className="font-serif text-2xl text-charcoal font-medium">
                  Burnout &amp; Perfectionism
                </h4>
                <p className="text-sage text-sm leading-relaxed">
                  Tailored for entrepreneurs, creatives, and professionals who feel
                  disconnected from themselves after years of pushing through stress.
                  A space to slow down and rebuild sustainable living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AMBIENT STATEMENT QUOTE (DARK FOREST CYPRESS) */}
      <section className="relative py-28 lg:py-36 bg-nocturne text-linen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/maya/quote_coast.jpg"
            alt="Pacific coastline morning mist"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-nocturne/85 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto border border-accent/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] leading-relaxed italic font-normal tracking-wide text-linen">
            &ldquo;Therapy works best when you feel respected, understood, and
            actively involved in the process—creating space not just for symptom
            relief, but to develop insight, resilience, and a stronger relationship
            with yourself.&rdquo;
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold pt-2">
            — Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
          </p>
        </div>
      </section>

      {/* SECTION 5: CLINICAL FOCUS & MODALITIES (TAG CLOUD) */}
      <section className="py-20 lg:py-24 bg-sand/40 border-b border-borderLinen/60 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase block mb-3">
            Comprehensive Clinical Scope
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mb-12">
            Areas of Clinical Focus &amp; <span className="italic text-secondary">Modalities</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {expertiseTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-studio border border-borderLinen text-charcoal px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-medium tracking-wide shadow-subtle hover:border-primary hover:text-primary transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK / CLINICAL APPROACH */}
      <section id="approach" className="py-20 lg:py-28 bg-studio border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] h-[480px] sm:h-[540px] rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-card border border-borderLinen">
              <Image
                src="/maya/approach_space.jpg"
                alt="Quiet, private therapeutic consultation environment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase block">
              Clinical Approach &amp; Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-charcoal leading-tight font-medium">
              Evidence-based structure integrated with{" "}
              <span className="italic text-secondary">compassionate depth.</span>
            </h2>

            <p className="text-sage text-sm sm:text-base leading-relaxed">
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive and purposeful,
              while still leaving ample space for genuine reflection, insight, and
              emotional depth.
            </p>

            <p className="text-sage text-sm sm:text-base leading-relaxed">
              I integrate evidence-based methods such as{" "}
              <strong className="text-charcoal font-medium">
                Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based
                practices, and body-oriented / somatic techniques
              </strong>{" "}
              to help you understand both the emotional and physiological sides of
              what you are experiencing.
            </p>

            <p className="text-sage text-sm sm:text-base leading-relaxed">
              Trauma work is an essential part of my practice. My approach is paced
              carefully, with an emphasis on safety, stabilization, and helping you
              feel more regulated in your daily life—not just during our sessions.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-linen px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition shadow-sm hover:shadow"
              >
                Schedule an Initial Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FULL-WIDTH STATEMENT BANNER */}
      <section className="relative py-28 lg:py-36 bg-charcoal text-linen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/maya/statement_light.jpg"
            alt="Warm light on quiet California terrain"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[0.5px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-snug text-linen font-normal">
            Paced with care. Rooted in safety.{" "}
            <span className="italic text-accent">Focused on lasting resilience.</span>
          </h2>
        </div>
      </section>

      {/* SECTION 8: CORE CLINICAL SPECIALTIES (4-COLUMN CARDS) */}
      <section id="specialties" className="py-20 lg:py-28 bg-sand/30 border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              Clinical Modalities
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-charcoal font-medium">
              Core Treatment <span className="italic text-secondary">Specialties</span>
            </h3>
            <p className="text-sm sm:text-base text-sage">
              Tailored therapeutic pathways integrating mind and body for lasting relief.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((spec, i) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={i}
                  className="bg-studio border border-borderLinen p-8 rounded-3xl flex flex-col justify-between shadow-subtle hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-linen transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-2xl text-charcoal font-medium pb-2 border-b border-borderLinen/60">
                      {spec.title}
                    </h4>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                      {spec.subtitle}
                    </p>
                    <p className="text-sage text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-primary-hover transition flex items-center gap-1.5"
                    >
                      <span>Inquire About Care</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: BRAND NEW SECTION — OUR OFFICE (SANTA MONICA SANCTUARY) */}
      <section id="office" className="py-20 lg:py-28 bg-studio border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 space-y-12">
          {/* Header & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Practice Environment · Santa Monica</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-tight text-charcoal font-medium">
                A Calm, Light-Filled Sanctuary in{" "}
                <span className="italic text-secondary">Santa Monica</span>
              </h2>
              <p className="text-sage text-base sm:text-lg leading-relaxed">
                My office is located at{" "}
                <strong className="text-charcoal font-medium">
                  123th Street 45 W, Santa Monica, CA 90401
                </strong>
                . It is a quiet, private space designed intentionally to feel calm and
                grounding, with abundant natural light and a comfortable, uncluttered
                environment.
              </p>
              <p className="text-sage text-sm sm:text-base leading-relaxed">
                Clients often share that the physical environment itself helps them
                feel more at ease the moment they arrive. Every element has been
                chosen to provide acoustic privacy, comfortable seating, and an
                unrushed atmosphere where you can focus entirely on yourself.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="p-6 bg-linen/60 border border-borderLinen rounded-2xl max-w-md space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Santa Monica &amp; California Hybrid</span>
                </div>
                <p className="text-xs text-sage leading-relaxed">
                  Whether you prefer in-person appointments in our quiet coastal
                  office or secure telehealth sessions from your home or workspace
                  anywhere in California, your care is fully accommodated.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 pt-1"
                >
                  <span>Request in-person or telehealth visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Office Gallery Component */}
          <OfficeGallery />
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 lg:py-28 bg-sand/30 border-b border-borderLinen/60">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              Questions &amp; Answers
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-charcoal font-medium">
              Frequently Asked <span className="italic text-secondary">Questions</span>
            </h3>
            <p className="text-sm sm:text-base text-sage">
              Clear, transparent information about the therapeutic process, session
              formats, and what to expect.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* SECTION 11: PRE-FOOTER CONSULTATION INVITATION */}
      <section id="contact" className="py-20 lg:py-28 bg-studio border-b border-borderLinen/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase block">
              Begin Your Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-charcoal leading-tight font-medium">
              Find a grounded space to reconnect with{" "}
              <span className="italic text-secondary">yourself.</span>
            </h2>
            <p className="text-sage text-base sm:text-lg leading-relaxed">
              If you’re looking for a licensed clinical psychologist who combines
              practical tools with depth-oriented work—and who understands the
              realities of living and working in a fast-paced environment—I invite
              you to reach out.
            </p>
            <p className="text-sage text-sm sm:text-base leading-relaxed">
              We begin with a brief, complimentary consultation to explore what you
              are experiencing and confirm whether my approach is the right fit for
              your goals.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-linen px-8 py-4 rounded-full text-[15px] font-medium transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Schedule Initial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] h-[460px]">
              <div className="absolute top-0 right-0 w-[68%] h-[82%] rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-card border border-borderLinen">
                <Image
                  src="/maya/office1.jpg"
                  alt="Santa Monica therapy office consultation space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[72%] rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-studio">
                <Image
                  src="/maya/reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: MAIN FOOTER */}
      <footer className="py-16 bg-linen text-charcoal border-b border-borderLinen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Col 1: Identity & Credentials */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="space-y-1">
              <div className="font-serif text-2xl font-medium text-charcoal">
                Dr. Maya Reynolds, <span className="text-secondary italic">PsyD</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-sage font-medium">
                Licensed Clinical Psychologist
              </div>
            </div>
            <p className="text-sage text-sm leading-relaxed">
              Warm, collaborative, and evidence-based psychological care for adults
              experiencing anxiety, panic, trauma, and burnout. Providing in-person
              therapy in Santa Monica and secure telehealth across California.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="font-semibold text-charcoal uppercase tracking-wider text-xs">
              Navigation
            </p>
            <ul className="space-y-2 text-sage">
              <li>
                <Link href="#about" className="hover:text-primary transition">
                  About Dr. Reynolds
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-primary transition">
                  Clinical Specialties
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-primary transition">
                  Approach &amp; Modalities
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-primary transition font-medium text-primary">
                  Our Santa Monica Office
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-primary transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Location */}
          <div className="space-y-3">
            <p className="font-semibold text-charcoal uppercase tracking-wider text-xs">
              Office Location
            </p>
            <p className="text-sage leading-relaxed">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
            <p className="text-sage">In-person appointments by schedule</p>
            <p className="text-sage">Secure telehealth across California</p>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-primary hover:text-primary-hover pt-1 block"
            >
              Request Consultation →
            </button>
          </div>

          {/* Col 4: Practice Hours & Care Access */}
          <div className="space-y-3">
            <p className="font-semibold text-charcoal uppercase tracking-wider text-xs">
              Practice Hours
            </p>
            <div className="space-y-2 text-sage text-sm">
              <p>Monday – Thursday: 9:00am – 6:00pm</p>
              <p>Friday: 9:00am – 2:00pm</p>
              <p className="text-xs text-sage/80 pt-1">Evenings &amp; Telehealth by arrangement</p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                  Accepting Adult Inquiries
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SECTION 13: LEGAL & CLINICAL SUB-FOOTER */}
      <div className="py-6 bg-charcoal text-linen/70 text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. Licensed Clinical
            Psychologist. (Fictional Therapist Portfolio Project).
          </p>
          <p className="space-x-3 text-center md:text-right text-[11px]">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
            <span>|</span>
            <span>Emergency Notice: In a mental health crisis, please dial 911 or call 988.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
