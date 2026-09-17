import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Compass,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import miracleLogo from "../assets/mir.png";
import heroImage from "../assets/miracle-hero.jpg";
import { navItems, siteConfig } from "../lib/site-config";

const title = "Miracle Mind | Life Coaching & Personal Development";

const description =
  "Guidance, personal development and coaching programs at Miracle Mind Life Coaching Centre, Valasaravakkam, Chennai";

/* ================================================================
   GOOGLE MAPS LISTING
================================================================ */

const MIRACLE_MIND_MAPS_URL =
  "https://www.google.com/maps/place/*Miracle+Mind*+Life+Coaching+Centre/@13.0418362,80.1719004,17z/data=!4m15!1m8!3m7!1s0x3a52616cefcb6edf:0x983403151536939a!2s*2AMiracle+Mind*2A+Life+Coaching+Centre!8m2!3d13.0418012!4d80.1718261!10e5!16s%2Fg%2F11rpvgk4ff!3m5!1s0x3a52616cefcb6edf:0x983403151536939a!8m2!3d13.0418012!4d80.1718261!16s%2Fg%2F11rpvgk4ff?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

/* ================================================================
   PAGE META
================================================================ */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
    {
      rel: "icon",
      type: "image/png",
      href: "/src/assets/mir.png",
    },
  ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteConfig.fullName,
          telephone: siteConfig.phoneDisplay,
          description,
          url: MIRACLE_MIND_MAPS_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "No - 10A, Thiruvalluvar Salai, Bhuvaneshwari Nagar",
            addressLocality: "Valasaravakkam, Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600087",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),

  component: LandingPage,
});

/* ================================================================
   PROGRAMS
================================================================ */

const programs = [
  {
    number: "01",
    icon: Compass,
    title: "Life Coaching",
    text: "A structured space to understand where you are, clarify what matters and identify meaningful next steps.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Personal Development",
    text: "Explore self-awareness, confidence, habits and personal growth through guided conversations and reflection.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Career Guidance",
    text: "Support for people thinking through career choices, direction, possibilities and their next professional step.",
  },
  {
    number: "04",
    icon: Users,
    title: "Training & Workshops",
    text: "Interactive sessions for groups, students, teams and communities around personal and professional development.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Guidance & Mentoring",
    text: "A thoughtful one-to-one environment for reflection, direction and purposeful progress.",
  },
] as const;

/* ================================================================
   PRINCIPLES
================================================================ */

const principles = [
  {
    number: "01",
    title: "Listen First",
    text: "Every person's situation is different. The conversation starts by understanding the individual.",
  },
  {
    number: "02",
    title: "Find Clarity",
    text: "Create space to step back, understand priorities and look at situations from a clearer perspective.",
  },
  {
    number: "03",
    title: "Move Forward",
    text: "Turn reflection into practical next steps that feel relevant to everyday life.",
  },
  {
    number: "04",
    title: "Grow With Purpose",
    text: "Focus on meaningful development rather than quick, one-size-fits-all answers.",
  },
] as const;

/* ================================================================
   AUDIENCE
================================================================ */

const audience = [
  "Students exploring their direction",
  "Individuals navigating personal change",
  "People looking for greater clarity",
  "Professionals considering their next step",
  "Groups seeking development sessions",
  "Organisations exploring workshops",
] as const;

/* ================================================================
   GOOGLE MAPS TESTIMONIALS
================================================================ */

const testimonials = [
  {
    name: "Shruthi",
    text: "I’m truly grateful for this wonderful event. The session was inspiring, positive, and beautifully organized. It was a memorable experience that left me feeling happy and motivated.",
  },
  {
    name: "Mashooda Kp",
    text: "I had a wonderful opportunity to participate in the Global Happiness Synchrony event. It was a memorable and inspiring experience filled with positivity, happiness, and meaningful moments.",
  },
  {
    name: "Shanavaas Basha",
    text: "It was a great experience and an honour to be part of this wonderful event. The session was meaningful, positive, and truly inspiring. Thank you for creating such a beautiful experience.",
  },
  {
    name: "prethika",
    text: "It was a truly wonderful experience attending the one-day program. The session was clear, motivating, and filled with warmth and positivity. Thank you for your guidance and for making it memorable.",
  },
  {
    name: "Baskar Blhd",
    text: "The Global Happiness Synchrony event was an inspiring and impactful experience. It was well organized and filled with positive energy, meaningful moments, and a wonderful atmosphere.",
  },
];

/* ================================================================
   BUTTON
================================================================ */

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

/* ================================================================
   LANDING PAGE
================================================================ */

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    setSubmitted(true);
    event.currentTarget.reset();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* ============================================================
          NAVIGATION
      ============================================================ */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between gap-6">

          {/* Logo */}

          <a
  href="#home"
  className="flex shrink-0 items-center gap-4"
  aria-label="Miracle Mind home"
>
  <div className="flex size-14 items-center justify-center overflow-hidden rounded-full">
    <img
      src={miracleLogo}
      alt="Miracle Mind logo"
      className="size-full object-contain"
    />
  </div>

  <span className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
    Miracle Mind
  </span>
</a>

          {/* Desktop Navigation */}

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className={`${buttonBase} ml-2 bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-deep hover:shadow-lg`}
            >
              Book a Session

              <ArrowRight
                className="size-4"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="grid size-11 place-items-center rounded-md border border-border bg-card lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-border bg-background px-4 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-xl gap-1">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-4 py-3 text-sm font-semibold transition hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className={`${buttonBase} mt-3 bg-primary text-primary-foreground`}
              >
                Book a Session

                <ArrowRight className="size-4" />
              </a>

            </div>
          </nav>
        )}
      </header>

      <main>

        {/* ============================================================
            HERO
        ============================================================ */}

        <section
          id="home"
          className="relative overflow-hidden border-b border-border pt-20"
        >
          <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:py-20">

            {/* Hero Copy */}

            <div className="relative z-10 max-w-2xl reveal">

              <SectionLabel>
                Guidance • Growth • Clarity
              </SectionLabel>

              <h1 className="mt-7 max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                A clearer way
                <br />

                <span className="italic text-primary">
                  forward.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Guidance and personal development programs designed to help
                you pause, reflect, understand what matters and take your next
                step with greater clarity.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#contact"
                  className={`${buttonBase} bg-primary text-primary-foreground shadow-lg shadow-primary/10 hover:-translate-y-0.5 hover:bg-deep`}
                >
                  Start a Conversation

                  <ArrowRight className="size-4" />
                </a>

                <a
                  href="#programs"
                  className={`${buttonBase} border border-border bg-card hover:-translate-y-0.5 hover:border-primary hover:text-primary`}
                >
                  Explore Programs
                </a>

              </div>

              {/* Hero Categories */}

              <div className="mt-12 grid grid-cols-2 border-y border-border sm:grid-cols-3">
  {/* 01 */}
  <div className="border-r border-border px-5 py-7">
    <p className="font-display text-lg">01</p>

    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      Personal
    </p>
  </div>

  {/* 02 */}
  <div className="px-5 py-7">
    <p className="font-display text-lg">02</p>

    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      Professional
    </p>
  </div>

  {/* 03 */}
  <div className="col-span-2 border-t border-border py-7 text-center sm:col-span-1 sm:border-t-0 sm:px-5 sm:text-left">
    <p className="font-display text-lg">03</p>

    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      Group
    </p>
  </div>
</div>
            </div>

            {/* ========================================================
                HERO IMAGE
            ======================================================== */}

            <div className="relative mx-auto w-full max-w-xl reveal lg:max-w-none">

              <div className="relative">

                {/* Smooth Hero Border */}

                <div className="relative overflow-hidden rounded-[2.75rem] border border-border bg-secondary shadow-2xl shadow-deep/10">

                  <img
                    src={heroImage}
                    alt="Coaching conversation in a calm and welcoming setting"
                    width={1600}
                    height={1200}
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
                  />

                  {/* Green Caption */}

                  <div className="absolute inset-x-0 bottom-0 bg-deep/90 p-6 text-primary-foreground backdrop-blur-md sm:p-7">

                    <div className="flex items-end justify-between gap-5">

                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
                          Miracle Mind
                        </p>

                        <p className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
                          Space to pause.
                          <br />
                          Space to grow.
                        </p>
                      </div>

                      <Sparkles
                        className="mb-1 size-8 shrink-0 text-accent"
                        aria-hidden="true"
                      />

                    </div>
                  </div>
                </div>

                {/* ====================================================
                    LOCATION CARD
                ==================================================== */}

                <div className="absolute bottom-24 right-4 z-20 sm:bottom-28 sm:right-7 lg:bottom-28 lg:right-8">

                  <div className="w-[190px] rounded-[1.75rem] border border-gold/80 bg-background/95 p-4 shadow-2xl backdrop-blur-md sm:w-[220px] sm:p-5">

                    <div className="flex items-start gap-3">

                     

                      <div>

                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-primary">
                          Based in
                        </p>

                        <p className="mt-1 font-display text-lg leading-tight sm:text-xl">
                          Valasaravakkam
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Chennai, Tamil Nadu
                        </p>

                      </div>

                    </div>

                    <a
                      href={MIRACLE_MIND_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary transition hover:text-deep"
                    >
                      View on Maps

                      <ArrowRight className="size-3" />
                    </a>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================
            INTRO
        ============================================================ */}

        <section className="bg-card py-20 sm:py-28">

          <div className="section-shell">

            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

              <div className="reveal">
                <SectionLabel>
                  About Miracle Mind
                </SectionLabel>
              </div>

              <div className="max-w-4xl reveal">

                <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  Sometimes the next step becomes clearer when you have space
                  to think.
                </h2>

                <div className="mt-8 grid gap-6 text-base leading-8 text-muted-foreground sm:grid-cols-2">

                  <p>
                    Miracle Mind is presented as a welcoming space for life
                    coaching, personal development, guidance and learning.
                  </p>

                  <p>
                    The focus is on thoughtful conversations, reflection and
                    practical direction — helping people explore what they
                    want and where they would like to go next.
                  </p>

                </div>

                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-2 border-b border-gold pb-2 text-sm font-bold text-primary transition hover:text-deep"
                >
                  Talk to Miracle Mind

                  <ArrowRight className="size-4" />
                </a>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================
            PROGRAMS
        ============================================================ */}

        <section
          id="programs"
          className="py-20 sm:py-28"
        >

          <div className="section-shell">

            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end reveal">

              <div>

                <SectionLabel>
                  What We Offer
                </SectionLabel>

                <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Support for different stages of the journey.
                </h2>

              </div>

              <p className="max-w-md leading-7 text-muted-foreground lg:justify-self-end">
                Explore the areas of guidance and development currently
                presented by Miracle Mind. Program details can be refined with
                the centre's confirmed offerings.
              </p>

            </div>

            <div className="mt-14 overflow-hidden rounded-md border border-border reveal">

              {programs.map((program, index) => {

                const Icon = program.icon;

                return (
                  <article
                    key={program.title}
                    className={`group grid gap-8 border-b border-border p-7 transition-all duration-500 last:border-b-0 hover:bg-secondary/60 sm:p-9 lg:grid-cols-[5rem_1fr_auto] lg:items-center ${
                      index === 0 ? "bg-card" : ""
                    }`}
                  >

                    <div className="flex items-center justify-between lg:block">

                      <span className="grid size-12 place-items-center rounded-full bg-secondary text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </span>

                      <span className="font-display text-sm text-gold lg:mt-4 lg:block">
                        {program.number}
                      </span>

                    </div>

                    <div>

                      <h3 className="font-display text-2xl sm:text-3xl">
                        {program.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {program.text}
                      </p>

                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                    >
                      Enquire

                      <ChevronRight className="size-4 transition group-hover:translate-x-1" />
                    </a>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ============================================================
            WHY US
        ============================================================ */}

        <section
          id="why-us"
          className="bg-deep py-20 text-primary-foreground sm:py-28"
        >

          <div className="section-shell">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              <div className="reveal">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  A thoughtful approach
                </p>

                <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  A conversation can be a beginning.
                </h2>

                <p className="mt-6 max-w-md leading-8 text-primary-foreground/65">
                  These are positioning statements for the demo and should be
                  refined with Miracle Mind's confirmed philosophy and approach
                  before publication.
                </p>

              </div>

              <div className="grid border-y border-primary-foreground/15 sm:grid-cols-2 reveal">

                {principles.map((item) => (
                  <article
                    key={item.number}
                    className="border-b border-primary-foreground/15 py-8 transition-all duration-500 hover:bg-primary-foreground/[0.03] sm:p-8 sm:[&:nth-child(odd)]:border-r [&:nth-last-child(-n+2)]:border-b-0"
                  >

                    <p className="text-xs font-bold text-accent">
                      {item.number}
                    </p>

                    <h3 className="mt-6 font-display text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-primary-foreground/65">
                      {item.text}
                    </p>

                  </article>
                ))}

              </div>
            </div>

            <blockquote className="mt-16 border-t border-primary-foreground/15 pt-10 sm:mt-20 sm:pt-14 reveal">

              <Quote
                className="size-9 text-accent"
                aria-hidden="true"
              />

              <p className="mt-7 max-w-5xl font-display text-3xl leading-snug italic sm:text-4xl lg:text-5xl">
                “Clarity often begins with giving yourself permission to pause
                and reflect.”
              </p>

              <cite className="mt-6 block text-xs font-bold uppercase tracking-wider text-primary-foreground/45 not-italic">
                Miracle Mind — positioning statement
              </cite>

            </blockquote>

          </div>
        </section>

        {/* ============================================================
            AUDIENCE
        ============================================================ */}

        <section className="bg-secondary py-20 sm:py-28">

          <div className="section-shell">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

              <div className="reveal">

                <SectionLabel>
                  Who It May Be For
                </SectionLabel>

                <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                  Different questions.
                  <br />
                  Different journeys.
                </h2>

                <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                  Miracle Mind's services can be explored by individuals and
                  groups with different personal, educational or professional
                  development needs.
                </p>

              </div>

              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 reveal">

                {audience.map((item, index) => (
                  <div
                    key={item}
                    className="group flex min-h-28 items-center gap-4 bg-background p-6 transition-all duration-300 hover:bg-card"
                  >

                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                      <Check className="size-4" />
                    </span>

                    <div>

                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                        0{index + 1}
                      </span>

                      <p className="mt-1 text-sm font-semibold leading-6">
                        {item}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================
            CTA
        ============================================================ */}

        <section className="border-y border-border bg-card py-16 sm:py-20">

          <div className="section-shell">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center reveal">

              <div>

                <SectionLabel>
                  Your next chapter
                </SectionLabel>

                <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Ready to start a conversation?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  Tell Miracle Mind what you are looking for and choose the
                  contact option that works best for you.
                </p>

              </div>

              <a
                href="#contact"
                className={`${buttonBase} bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-deep`}
              >
                Make an Enquiry

                <ArrowRight className="size-4" />
              </a>

            </div>
          </div>
        </section>

        {/* ============================================================
            TESTIMONIALS — HORIZONTAL INFINITE CAROUSEL
        ============================================================ */}

        <section
          id="testimonials"
          className="overflow-hidden bg-card py-20 sm:py-28"
        >

          <div className="section-shell">

            {/* Heading */}

            <div className="mx-auto max-w-3xl text-center reveal">

              <SectionLabel centered>
                Real Experiences
              </SectionLabel>

              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Words from people who experienced the journey.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                Genuine feedback shared by people who participated in Miracle
                Mind sessions, programmes and events.
              </p>

            </div>

            {/* ========================================================
                HORIZONTAL INFINITE CAROUSEL
            ======================================================== */}

            <div className="testimonial-marquee-wrapper mt-14">

              <div
                className="testimonial-marquee"
                aria-label="Miracle Mind testimonials"
              >

                <div className="testimonial-marquee-track">

                  {/* FIRST GROUP */}

                  <div className="testimonial-marquee-group">

                    {testimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={`first-${testimonial.name}-${index}`}
                        testimonial={testimonial}
                      />
                    ))}

                  </div>

                  {/* SECOND IDENTICAL GROUP
                      Required for seamless infinite animation */}

                  <div
                    className="testimonial-marquee-group"
                    aria-hidden="true"
                  >

                    {testimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={`second-${testimonial.name}-${index}`}
                        testimonial={testimonial}
                      />
                    ))}

                  </div>

                </div>
              </div>
            </div>

            {/* Google Maps CTA */}

            <div className="mt-10 text-center reveal">

              <a
                href={MIRACLE_MIND_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b border-gold pb-2 text-sm font-bold text-primary transition hover:text-deep"
              >
                Read all reviews on Google Maps

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-xs text-muted-foreground">
                Reviews shown here are from the Miracle Mind Google Maps
                listing.
              </p>

            </div>

          </div>
        </section>

        {/* ============================================================
            CONTACT
        ============================================================ */}

        <section
          id="contact"
          className="border-t border-border py-20 sm:py-28"
        >

          <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* Contact Information */}

            <div className="reveal">

              <SectionLabel>
                Contact Miracle Mind
              </SectionLabel>

              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Let’s start
                <br />
                a conversation.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Whether you are looking for individual guidance, personal
                development or a group programme, get in touch with Miracle
                Mind to discuss your requirement.
              </p>

              <div className="mt-10 space-y-4">

                {/* Phone */}

                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-md"
                >

                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Phone className="size-5" />
                  </span>

                  <span>

                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Call us
                    </span>

                    <span className="mt-1 block font-semibold">
                      {siteConfig.phoneDisplay}
                    </span>

                  </span>

                  <ArrowRight className="ml-auto size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />

                </a>

                {/* Address */}

                <div className="flex items-start gap-4 rounded-md border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-md">

                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </span>

                  <span>

                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Visit us
                    </span>

                    <span className="mt-1 block text-sm leading-6">
                      {siteConfig.address}
                    </span>

                  </span>

                </div>

              </div>

              {/* Contact Buttons */}

              <div className="mt-6 grid gap-3 sm:grid-cols-3">

                {/* Call */}

                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className={`${buttonBase} border border-border bg-card px-4 hover:-translate-y-0.5 hover:border-primary hover:shadow-md`}
                >
                  <Phone className="size-4" />
                  Call
                </a>

                {/* WhatsApp */}

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonBase} border border-border bg-card px-4 hover:-translate-y-0.5 hover:border-primary hover:shadow-md`}
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  WhatsApp
                </a>

                {/* Maps */}

                <a
                  href={MIRACLE_MIND_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonBase} border border-border bg-card px-4 hover:-translate-y-0.5 hover:border-primary hover:shadow-md`}
                >
                  <MapPin className="size-4" />
                  Maps
                </a>

              </div>

            </div>

            {/* Contact Form */}

            <div className="rounded-md border border-border bg-card p-6 shadow-xl shadow-black/[0.03] sm:p-10 reveal">

              {submitted ? (

                <div
                  className="grid min-h-[28rem] place-content-center text-center"
                  role="status"
                >

                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-secondary text-primary">
                    <Check className="size-7" />
                  </span>

                  <h3 className="mt-6 font-display text-3xl">
                    Enquiry prepared.
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                    This demo form does not transmit or store your details.
                    Please use Call or WhatsApp to contact Miracle Mind.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={`${buttonBase} mx-auto mt-7 border border-border bg-background`}
                  >
                    Send Another Enquiry
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={submitEnquiry}
                  className="space-y-6"
                >

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className="min-h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                    />

                  </div>

                  {/* Phone / Email */}

                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        pattern="[0-9+() -]{7,}"
                        className="min-h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                      />

                    </div>

                  </div>

                  {/* Interest */}

                  <div>

                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-bold"
                    >
                      What would you like to discuss?
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      defaultValue=""
                      className="min-h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                    >

                      <option value="" disabled>
                        Select an area
                      </option>

                      <option value="life-coaching">
                        Life Coaching
                      </option>

                      <option value="personal-development">
                        Personal Development
                      </option>

                      <option value="career-guidance">
                        Career Guidance
                      </option>

                      <option value="training-workshops">
                        Training & Workshops
                      </option>

                      <option value="guidance-mentoring">
                        Guidance & Mentoring
                      </option>

                      <option value="other">
                        Something else
                      </option>

                    </select>

                  </div>

                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={6}
                      placeholder="Tell us a little about what you are looking for..."
                      className="w-full resize-y rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                    />

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className={`${buttonBase} w-full bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-deep`}
                  >
                    Send Enquiry

                    <ArrowRight className="size-4" />
                  </button>

                  <p className="text-center text-xs leading-5 text-muted-foreground">
                    Demo form — no details are transmitted or stored.
                  </p>

                </form>
              )}

            </div>
          </div>
        </section>

      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="bg-deep py-14 text-primary-foreground">

        <div className="section-shell">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">

            {/* Brand */}

            <div>
  <div className="flex items-center gap-3">
    <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1">
      <img
        src={miracleLogo}
        alt="Miracle Mind logo"
        className="size-full object-contain"
      />
    </div>

    <p className="font-display text-2xl">
      Miracle Mind
    </p>
  </div>

  <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/55">
    Life coaching, personal development, guidance and learning in
    Valasaravakkam, Chennai.
  </p>
</div>

            {/* Explore */}

            <FooterLinks
              title="Explore"
              links={navItems.slice(0, 4)}
            />

            {/* Services */}

            <div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Services
              </h3>

              <ul className="mt-5 space-y-3">

                {programs.slice(0, 4).map((program) => (
                  <li key={program.title}>

                    <a
                      href="#programs"
                      className="text-sm text-primary-foreground/60 transition hover:text-accent"
                    >
                      {program.title}
                    </a>

                  </li>
                ))}

              </ul>
            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Contact
              </h3>

              <a
                className="mt-5 block text-sm font-semibold hover:text-accent"
                href={`tel:${siteConfig.phoneHref}`}
              >
                {siteConfig.phoneDisplay}
              </a>

              <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/55">
                {siteConfig.address}
              </p>

              <div className="mt-5 flex gap-3">

                {/* WhatsApp */}

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="group grid size-11 place-items-center rounded-full border border-primary-foreground/15 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <WhatsAppIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </a>

                {/* Call */}

                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  aria-label="Call Miracle Mind"
                  className="grid size-11 place-items-center rounded-full border border-primary-foreground/15 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Phone className="size-4" />
                </a>

                {/* Maps */}

                <a
                  href={MIRACLE_MIND_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Maps"
                  className="grid size-11 place-items-center rounded-full border border-primary-foreground/15 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <MapPin className="size-4" />
                </a>

              </div>
            </div>

          </div>

          {/* Footer Bottom */}

          <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Miracle Mind. All rights reserved.
            </p>

            <p>
              Life Coaching & Personal Development Centre
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}

/* ================================================================
   TESTIMONIAL CARD
================================================================ */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-medium text-primary">
            {testimonial.name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-foreground">
              {testimonial.name}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Google review
            </p>
          </div>
        </div>

        {/* 5 Stars */}
        <div
          className="flex shrink-0 gap-0.5 text-gold"
          aria-label="5 star review"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-lg leading-none">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <Quote
        className="mt-5 size-7 shrink-0 text-primary/20 transition-transform duration-500 group-hover:scale-110"
        aria-hidden="true"
      />

      {/* Review */}
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
        “{testimonial.text}”
      </p>

      {/* Bottom divider + footer */}
      <div className="mt-5 shrink-0 border-t border-border pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold tracking-[0.16em] text-gold">
            5 STAR EXPERIENCE
          </span>

          <a
            href={MIRACLE_MIND_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold"
          >
            Google Maps
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ================================================================
   SECTION LABEL
================================================================ */

function SectionLabel({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-primary ${
        centered ? "justify-center" : ""
      }`}
    >

      {!centered && (
        <span className="h-px w-9 bg-gold" />
      )}

      {children}

      {centered && (
        <span className="h-px w-9 bg-gold" />
      )}

    </p>
  );
}

/* ================================================================
   FOOTER LINKS
================================================================ */

function FooterLinks({
  title: heading,
  links,
}: {
  title: string;
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
}) {
  return (
    <div>

      <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
        {heading}
      </h3>

      <ul className="mt-5 space-y-3">

        {links.map((link) => (
          <li key={link.label}>

            <a
              href={link.href}
              className="text-sm text-primary-foreground/60 transition hover:text-accent"
            >
              {link.label}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}

/* ================================================================
   WHATSAPP ICON
================================================================ */

function WhatsAppIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.07 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.23-6.15-3.43-8.41ZM12.08 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.88 9.88 0 0 1-1.51-5.25C2.18 6.44 6.62 2 12.08 2c2.64 0 5.12 1.03 6.98 2.89a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
