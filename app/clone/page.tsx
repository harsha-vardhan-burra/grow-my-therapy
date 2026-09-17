import Image from "next/image";
import Link from "next/link";
import CloneNavbar from "@/components/CloneNavbar";

export default function ClonePage() {
  const expertiseTags = [
    "Dissociation",
    "Trauma",
    "Family conflict",
    "Special needs parenting",
    "Depression",
    "marriage",
    "anxiety",
    "relationships",
    "children",
    "teens",
    "intimacy & connection",
    "…and more.",
  ];

  const specialties = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay 'stuck,' and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    },
  ];

  return (
    <div className="bg-[#F5F3ED] text-[#2A2A2A] font-mulish min-h-screen">
      <CloneNavbar />

      {/* SECTION 1: HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-[#E8E4DC]/40">
        <div className="max-w-[1340px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            <p className="font-bold italic uppercase tracking-[0.18em] text-[12px] text-[#2A2A2A]">
              Online & In-Person Counseling in Newbury Park & Across CA
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] text-[#2A2A2A]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-bold italic text-[#1F2220]">thrive</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#555047] leading-relaxed pt-2">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block bg-[#E3D9CA] hover:bg-[#D4C8B6] text-[#2A2A2A] px-8 py-3.5 rounded-full text-[15px] font-medium tracking-wide transition-all shadow-sm hover:shadow"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right Imagery Collage (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[460px] h-[480px] sm:h-[440px] md:h-[480px] lg:h-[540px]">
              {/* Back Image (Arch top) */}
              <div className="absolute top-0 right-0 w-[68%] h-[82%] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-md">
                <Image
                  src="/clone/hero_1.jpg"
                  alt="Therapy space with warm natural light"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Front Overlapping Image (Arch top) */}
              <div className="absolute bottom-0 left-0 w-[62%] h-[74%] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-lg border-4 border-[#F5F3ED]">
                <Image
                  src="/clone/hero_2.jpg"
                  alt="Counseling environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO / HOPE STATEMENT */}
      <section id="about" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E8E4DC]/50">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#2A2A2A]">
              You’re holding onto hope that life can be better than it is right now.
            </h2>
            <p className="font-medium text-base text-[#2A2A2A]">
              At Conejo Valley Family Counseling we want to make that hope a reality.
            </p>
            <p className="text-[#555047] leading-relaxed text-[15px] sm:text-base">
              Whether you&apos;re an adult seeking personal growth, looking to work
              through your trauma, a couple working on your relationship, or a
              parent looking for support for your child, we provide a compassionate
              and safe space to help you navigate all of life’s ups and downs.
            </p>
            <p className="text-[#555047] leading-relaxed text-[15px] sm:text-base">
              First and foremost, we believe what you’re going through is real,
              valid, and worthy of support. Our team offers clients in the Newbury
              Park area and across CA an environment to discover a new life and a
              deeper sense of self in the midst of their struggles. As we tap into
              the power of connection and understanding, you can find your footing
              again and take a transformative path forward.
            </p>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] h-[480px] sm:h-[520px] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-lg">
              <Image
                src="/clone/intro_hope.jpg"
                alt="Therapist providing compassionate support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE HELP (3-COLUMN GRID) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E4DC]/50">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-center text-[#2A2A2A] mb-16">
            Who we <span className="italic">help</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Card 1: Adults */}
            <div className="text-center space-y-6">
              <div className="relative w-full aspect-[4/5] max-w-[320px] mx-auto rounded-t-[140px] rounded-b-xl overflow-hidden shadow-md">
                <Image
                  src="/clone/adults.jpg"
                  alt="Therapy for adults"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-2xl text-[#2A2A2A]">Adults</h4>
              <p className="text-[#555047] text-[15px] leading-relaxed px-2">
                Feeling stuck or overwhelmed? We help adults find clarity, build
                resilience, and move forward with confidence by addressing the
                root causes of anxiety, stress, and emotional pain.
              </p>
            </div>

            {/* Card 2: Couples */}
            <div className="text-center space-y-6">
              <div className="relative w-full aspect-[4/5] max-w-[320px] mx-auto rounded-t-[140px] rounded-b-xl overflow-hidden shadow-md">
                <Image
                  src="/clone/couples.jpg"
                  alt="Therapy for couples"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-2xl text-[#2A2A2A]">Couples</h4>
              <p className="text-[#555047] text-[15px] leading-relaxed px-2">
                Relationships require effort, and we’re here to help you strengthen
                yours. We guide couples through challenges like communication
                breakdowns and trust issues, helping you rebuild intimacy and
                strengthen your relationship.
              </p>
            </div>

            {/* Card 3: Children & Teens */}
            <div className="text-center space-y-6">
              <div className="relative w-full aspect-[4/5] max-w-[320px] mx-auto rounded-t-[140px] rounded-b-xl overflow-hidden shadow-md">
                <Image
                  src="/clone/children.jpg"
                  alt="Support for children and teens"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-2xl text-[#2A2A2A]">Children &amp; Teens</h4>
              <p className="text-[#555047] text-[15px] leading-relaxed px-2">
                Kids need support, too. We help them process big emotions, cope
                with challenging family situations, build coping skills, and feel
                understood, while also working closely with their parents to
                create a nurturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FULL-WIDTH STATEMENT QUOTE (DARK OVERLAY) */}
      <section className="relative py-28 lg:py-36 bg-[#1A1A1A] text-[#FFFFFF] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clone/quote_bg.png"
            alt="Calm natural backdrop"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] leading-relaxed italic font-normal tracking-wide">
            &ldquo;You deserve a place where your story is heard, valued, and
            understood. Nothing will be too heavy for us to carry
            together.&rdquo;
          </h2>
        </div>
      </section>

      {/* SECTION 5: OUR AREAS OF EXPERTISE (TAG CLOUD) */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E8E4DC]/50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2A2A2A] mb-12">
            Our areas of <span className="italic">expertise</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {expertiseTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8E4DC] text-[#2A2A2A] px-5 py-2.5 rounded-full text-sm sm:text-[15px] tracking-wide shadow-subtle hover:border-[#D4C8B6] transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK (SPLIT LAYOUT) */}
      <section id="how-we-work" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E4DC]/50">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] h-[480px] sm:h-[540px] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-lg">
              <Image
                src="/clone/how_we_work.jpg"
                alt="Therapist in counseling session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <p className="text-xs md:text-[13px] font-semibold tracking-[0.15em] text-[#555047] uppercase">
              How We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#2A2A2A] leading-tight">
              We’re here to make a <span className="italic">difference.</span>
            </h2>
            <p className="text-[#555047] text-[15px] sm:text-base leading-relaxed">
              The clients we work with are balancing so many things at once, it’s
              often hard for them to put themselves first.
            </p>
            <p className="text-[#555047] text-[15px] sm:text-base leading-relaxed">
              Here, your needs are always top priority. Our team takes the time to
              deeply listen to our clients in order to truly understand their
              story and their struggles. We recognize that no two people are the
              same and that personalized therapy means an intentional, tailored
              approach. (You won’t find anything “one-size-fits-all” here.) If
              you’re ready to do the work, we’re ready to help.
            </p>
            <p className="text-[#555047] text-[15px] sm:text-base leading-relaxed">
              Sometimes we may gently challenge you to look at things differently
              and other times we may explore your emotions, all while
              encouraging you to practice what you’ve learned in your daily life.
              We take what we do seriously because we know how important it is for
              you to heal from what’s hurting you, discover a fulfilling life,
              and build meaningful relationships.
            </p>
            <div className="pt-2">
              <Link
                href="#team"
                className="inline-block bg-[#E3D9CA] hover:bg-[#D4C8B6] text-[#2A2A2A] px-7 py-3 rounded-full text-sm font-medium transition shadow-sm"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HONORING STATEMENT BANNER */}
      <section className="relative py-28 lg:py-36 bg-[#2A2A2A] text-[#FFFFFF] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clone/honoring_bg.jpg"
            alt="Peaceful ocean horizon"
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-snug text-[#FFFFFF]">
            Honoring where you’ve been &amp;{" "}
            <span className="italic font-normal">helping shape where you’re headed.</span>
          </h2>
        </div>
      </section>

      {/* SECTION 8: OUR SPECIALTIES INCLUDE (4-COLUMN CARDS) */}
      <section id="specialties" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E8E4DC]/50">
        <div className="max-w-[1340px] mx-auto px-6 md:px-12">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-center text-[#2A2A2A] mb-16">
            Our specialties <span className="italic">include…</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((spec, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] border border-[#E8E4DC] p-8 rounded-2xl flex flex-col justify-between shadow-subtle hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl text-[#2A2A2A] pb-2 border-b border-[#E8E4DC]">
                    {spec.title}
                  </h4>
                  <p className="text-[#555047] text-sm sm:text-[15px] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="#contact"
                    className="inline-block text-xs font-semibold uppercase tracking-widest text-[#2A2A2A] hover:text-[#7A7062] transition underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PRE-FOOTER APPOINTMENT CALL TO ACTION */}
      <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E4DC]/50">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs md:text-[13px] font-semibold tracking-[0.15em] text-[#555047] uppercase">
              Schedule An Appointment
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#2A2A2A] leading-tight">
              Find a therapist who is the right fit for{" "}
              <span className="italic">you.</span>
            </h2>
            <p className="text-[#555047] text-[15px] sm:text-base leading-relaxed">
              Coming to therapy is a courageous decision, and connecting with
              the right kind of therapist makes all the difference. We
              understand that your journey is personal, and we&apos;re here to
              support you with care and understanding every step of the way.
            </p>
            <p className="text-[#555047] text-[15px] sm:text-base leading-relaxed">
              Each member of our team brings dedicated expertise and a
              commitment to support you in your struggles. We want you to feel
              prioritized, understood, and empowered.
            </p>
            <div className="pt-2">
              <button className="bg-[#E3D9CA] hover:bg-[#D4C8B6] text-[#2A2A2A] px-8 py-3.5 rounded-full text-[15px] font-medium transition shadow-sm hover:shadow">
                Book now
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] h-[460px]">
              <div className="absolute top-0 right-0 w-[68%] h-[82%] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-md">
                <Image
                  src="/clone/prefooter_1.jpg"
                  alt="Therapy space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[72%] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/clone/prefooter_2.jpg"
                  alt="Counselor meeting space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: MAIN FOOTER */}
      <footer id="team" className="py-16 bg-[#F5F3ED] text-[#2A2A2A] border-b border-[#E8E4DC]">
        <div className="max-w-[1340px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Col 1: Brand & Message */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="relative w-52 h-12">
              <Image
                src="/clone/logo.png"
                alt="Conejo Valley Counseling"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-[#555047] text-sm leading-relaxed pt-2">
              We want to make getting started simple. You’re welcome to come into
              our office in Newbury Park or schedule virtual appointments from
              anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="font-semibold text-[#2A2A2A] uppercase tracking-wider text-xs">
              Navigate
            </p>
            <ul className="space-y-2 text-[#555047]">
              <li>
                <Link href="/clone" className="hover:text-[#2A2A2A] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#2A2A2A] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-[#2A2A2A] transition">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#2A2A2A] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <p className="font-semibold text-[#2A2A2A] uppercase tracking-wider text-xs">
              Contact
            </p>
            <p className="text-[#555047] leading-relaxed">
              925 Broadbeck Dr Suites 200 and 225
              <br />
              Newbury Park, CA 91320
            </p>
            <p className="text-[#555047]">info@conejovalleycounseling.com</p>
            <p className="text-[#555047]">805.242.3120</p>
            <p className="text-xs text-[#7A7062] pt-1">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
            </p>
          </div>

          {/* Col 4: Our Team */}
          <div className="space-y-3">
            <p className="font-semibold text-[#2A2A2A] uppercase tracking-wider text-xs">
              Our Team
            </p>
            <ul className="space-y-1.5 text-xs text-[#555047]">
              <li>Jennifer Anderson, LMFT</li>
              <li>Heather Williams-Baumgart, AMFT</li>
              <li>Autumn Bodily, AMFT</li>
              <li>Michaela Gorospe, AMFT</li>
              <li>Candace Bletscher, AMFT</li>
              <li>Samantha Johnson, AMFT</li>
              <li>Andrea Watkins, APCC</li>
              <li>Rosa Gomez, AMFT</li>
              <li>Chad Flores, AMFT</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* SECTION 11: LEGAL SUB-FOOTER */}
      <div className="py-6 bg-[#2A2A2A] text-[#B8B4AC] text-xs font-mulish">
        <div className="max-w-[1340px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Conejo Valley Family Counseling. All rights reserved.</p>
          <p className="space-x-3 text-center sm:text-right">
            <span>Terms</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Disclaimer</span>
            <span>|</span>
            <span>Website by Walker Strategy Co.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
