import Image from "next/image";
import { UserCheck, Zap, Lightbulb, Languages, Rocket, Users, Globe } from "lucide-react";

// ─── Brand tokens (mirrors globals.css) ──────────────────────────────────────
// bg-primary:   #111827  bg-secondary: #1F2937
// text:         #F9FAFB  accent:       #82F4D6
// accent-blue:  #2A48EE  cta:          #B2F4D6

// Icons come from lucide-react (imported above)

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const links = [
    { label: "Home",         href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Talent",       href: "#talent" },
    { label: "Why Jeelup",   href: "#why-jeelup" },
    { label: "About",        href: "#about" },
    { label: "Contact",      href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8 h-[60px] flex items-center justify-between">
        {/* Logo: black "Jeel" + mint "up" — works naturally on white bg */}
        <Image src="/jeelup.svg" alt="Jeelup" width={100} height={34} priority />

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block text-sm font-semibold px-5 py-[7px] rounded-md hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: "#82F4D6",
            color: "#111827",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
          }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

// ─── Section 1 — Hero ────────────────────────────────────────────────────────

const TRUST_SIGNALS = [
  { label: "Dedicated\nengineers",          icon: <UserCheck  size={18} strokeWidth={1.6} /> },
  { label: "Fast team\ndeployment",         icon: <Zap        size={18} strokeWidth={1.6} /> },
  { label: "Startup\nmindset",              icon: <Lightbulb  size={18} strokeWidth={1.6} /> },
  { label: "Arabic / English /\nFrench speaking", icon: <Languages size={18} strokeWidth={1.6} /> },
];

function Hero() {
  return (
    <section className="pt-[60px] min-h-[90vh] flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 py-16 items-center">

        {/* ── Left ── */}
        <div>
          {/* Headline — Inter Semibold, dark on white */}
          <h1
            className="text-[2.6rem] md:text-[3.1rem] leading-[1.1] tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Build Your Engineering Team
            <br />
            Without Slowing Down
          </h1>

          {/* Subheadline — Open Sans, gray */}
          <p
            className="text-[15px] leading-relaxed mb-2 max-w-[500px]"
            style={{
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              color: "#6B7280",
            }}
          >
            Jeelup connects startups and companies across the{" "}
            <span style={{ color: "#111827", fontWeight: 600 }}>GCC</span>{" "}
            with highly skilled engineers who work as dedicated members of your team.
          </p>

          {/* Feature bullet line */}
          <p
            className="text-[13px] mb-7"
            style={{
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              color: "#9CA3AF",
            }}
          >
            · Startup-minded builders&nbsp;&nbsp;·&nbsp;&nbsp;Fast deployment&nbsp;&nbsp;·&nbsp;&nbsp;Seamless collaboration
          </p>

          {/* "Key Trust Signals" label */}
          <p
            className="text-[11px] mb-3"
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              color: "#9CA3AF",
              letterSpacing: "0.08em",
            }}
          >
            Key Trust Signals
          </p>

          {/* Trust signal cards — light bg, subtle border + shadow */}
          <div className="grid grid-cols-4 gap-2.5 mb-8">
            {TRUST_SIGNALS.map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-3 flex flex-col items-center gap-2 text-center"
                style={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {/* Teal icon container */}
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: "rgba(130,244,214,0.15)", color: "#0D9488" }}
                >
                  {s.icon}
                </div>
                <p
                  className="text-[10.5px] leading-snug whitespace-pre-line"
                  style={{
                    fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                    color: "#374151",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-semibold px-6 py-[9px] rounded-md hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#82F4D6",
                color: "#111827",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              Book a Call
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium px-6 py-[9px] rounded-md hover:bg-teal-50 transition-colors"
              style={{
                border: "1.5px solid #82F4D6",
                color: "#0D9488",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* ── Right — photo placeholder ── */}
        <div
          className="relative rounded-xl overflow-hidden aspect-[4/3] w-full flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: "#F3F4F6", border: "1px solid #E5E7EB" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              color: "#9CA3AF",
            }}
          >
            Team photo
          </p>
        </div>

      </div>
    </section>
  );
}

// ─── Section 2 — Problem ─────────────────────────────────────────────────────

function Problem() {
  const challenges = [
    "Finding strong engineers quickly",
    "Managing recruitment delays",
    "Keeping development costs under control",
    "Maintaining team productivity while scaling",
  ];
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#1F2937" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-tag mb-4">The Problem</p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Hiring Developers Shouldn&apos;t Slow Down Your Company
          </h2>
          <p className="mb-6 leading-relaxed" style={{ color: "#9CA3AF" }}>
            Growing companies across the GCC face the same hiring challenges:
          </p>
          <ul className="space-y-3 mb-8">
            {challenges.map((c) => (
              <li key={c} className="flex items-start gap-3" style={{ color: "#9CA3AF" }}>
                <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#82F4D6" }} />
                {c}
              </li>
            ))}
          </ul>
          <p className="mb-3" style={{ color: "#9CA3AF" }}>
            Traditional outsourcing often leads to disconnected teams and slow execution.
          </p>
          <p style={{ color: "#F9FAFB", fontWeight: 600 }}>
            Founders need engineers who work{" "}
            <span style={{ color: "#82F4D6" }}>with</span> them, not outside their company.
          </p>
        </div>

        {/* Node diagram */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 320 280" width="300" height="260">
            {[[160,140,60,60],[160,140,260,60],[160,140,60,220],[160,140,260,220],[160,140,160,40],[160,140,160,240]].map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#82F4D6" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4"/>
            ))}
            <circle cx="160" cy="140" r="28" fill="#82F4D6" fillOpacity="0.1" stroke="#82F4D6" strokeWidth="1.5"/>
            <circle cx="160" cy="140" r="12" fill="#82F4D6"/>
            {[[60,60],[260,60],[60,220],[260,220],[160,40],[160,240]].map(([cx,cy],i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="18" fill="#111827" stroke="#2A48EE" strokeWidth="1"/>
                <circle cx={cx} cy={cy} r="5" fill="#2A48EE" fillOpacity="0.7"/>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3 — Solution ────────────────────────────────────────────────────

function Solution() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center gap-2 order-2 lg:order-1"
          style={{ backgroundColor: "#1F2937" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <p className="text-sm" style={{ color: "#4B5563" }}>Team collaboration photo</p>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p className="section-tag mb-4">The Jeelup Solution</p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Meet Jeelup
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#9CA3AF" }}>
            Jeelup deploys skilled engineers who integrate directly into your team.
          </p>
          <p className="leading-relaxed mb-5" style={{ color: "#9CA3AF" }}>
            Instead of freelancers or distant outsourcing agencies, you work with{" "}
            <span style={{ color: "#F9FAFB", fontWeight: 600 }}>
              dedicated builders who collaborate with your engineers, product managers, and founders every day.
            </span>
          </p>
          <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
            Our engineers understand the pace and ownership required to build and scale modern technology products.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 — Why Jeelup ──────────────────────────────────────────────────

function WhyJeelup() {
  const blocks = [
    { icon: <Rocket  size={20} strokeWidth={1.6} />, title: "Startup Mindset",           text: "Our engineers understand product development cycles, iteration, and the speed required to build startups." },
    { icon: <Users   size={20} strokeWidth={1.6} />, title: "Dedicated Team Members",    text: "Each engineer works as part of your team, contributing directly to your product and roadmap." },
    { icon: <Globe   size={20} strokeWidth={1.6} />, title: "Multilingual Collaboration", text: "Our engineers communicate fluently in Arabic, English, and French — making collaboration across the GCC seamless." },
    { icon: <Zap     size={20} strokeWidth={1.6} />, title: "Fast Deployment",           text: "Traditional hiring takes months. Jeelup helps companies add engineers within days." },
  ];
  return (
    <section id="why-jeelup" className="py-24 px-6" style={{ backgroundColor: "#1F2937" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-tag mb-3">Why Jeelup</p>
          <h2
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Why Companies Choose Jeelup
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-xl p-8 transition-colors group"
              style={{ backgroundColor: "#111827", border: "1px solid #374151" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(130,244,214,0.12)", color: "#82F4D6" }}
              >
                {b.icon}
              </div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
              >
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5 — Roles ───────────────────────────────────────────────────────

function Roles() {
  const categories = [
    { title: "Software Engineering", roles: ["Frontend Development", "Backend Development", "Full-Stack Development"] },
    { title: "Mobile Development",   roles: ["iOS / Android", "Cross-Platform Development"] },
    { title: "AI & Data",            roles: ["AI Engineering", "Machine Learning", "Data Engineering"] },
  ];
  return (
    <section id="talent" className="py-24 px-6" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-tag mb-3">Talent</p>
          <h2
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Engineering Talent Across Key Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl p-8"
              style={{ backgroundColor: "#1F2937", border: "1px solid #374151" }}
            >
              <div className="w-1.5 h-8 rounded-full mb-6" style={{ backgroundColor: "#82F4D6" }} />
              <h3
                className="mb-5"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
              >
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.roles.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm" style={{ color: "#9CA3AF" }}>
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#82F4D6" }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6 — Built for Startups ─────────────────────────────────────────

function BuiltForStartups() {
  const items = [
    "Launching products quickly",
    "Scaling engineering teams",
    "Maintaining technical quality",
    "Managing growth while controlling operational complexity",
  ];
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "#1F2937" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-tag mb-4">About</p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Designed for Founders and Product Builders
          </h2>
          <p className="mb-5 leading-relaxed" style={{ color: "#9CA3AF" }}>
            Jeelup was built from the experience of working closely with technology startups and product teams.
          </p>
          <p className="mb-5" style={{ color: "#9CA3AF" }}>We understand the challenges founders face:</p>
          <ul className="space-y-3 mb-8">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#9CA3AF" }}>
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#82F4D6" }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm mb-1" style={{ color: "#6B7280" }}>Our goal is simple:</p>
          <p
            className="text-lg"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Help companies build faster with the right engineers.
          </p>
        </div>

        {/* Image placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: "#111827" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <p className="text-sm" style={{ color: "#4B5563" }}>Founders photo</p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7 — How It Works ────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell us what you need",      desc: "Share your technology stack and the role you want to hire." },
    { n: "02", title: "Review selected engineers",  desc: "We introduce candidates whose experience matches your needs." },
    { n: "03", title: "Deploy your developer",      desc: "Your engineer joins your team and begins contributing immediately." },
    { n: "04", title: "Scale your team",            desc: "Expand your engineering capacity as your company grows." },
  ];
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-tag mb-3">How It Works</p>
          <h2
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
          >
            Four Simple Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(130,244,214,0.1)" }}
              >
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontWeight: 500,
                    color: "#82F4D6",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                className="mb-2 text-sm"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8 — Stats ────────────────────────────────────────────────────────

function Stats() {
  const metrics = [
    { value: "1",   unit: "week",      label: "Average time to deploy your first engineer" },
    { value: "2+",  unit: "years",     label: "Serving startups and companies across the GCC" },
    { value: "3",   unit: "languages", label: "Arabic, English, and French — seamless collaboration" },
    { value: "4",   unit: "steps",     label: "Simple process from brief to your engineer starting" },
  ];
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#1F2937", borderTop: "1px solid #374151" }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-10 text-center">Why Jeelup Works</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.unit} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span
                  className="text-5xl md:text-6xl leading-none"
                  style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontWeight: 700,
                    color: "#82F4D6",
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="text-base ml-1"
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    color: "#82F4D6",
                    opacity: 0.7,
                  }}
                >
                  {m.unit}
                </span>
              </div>
              <p
                className="text-xs leading-snug mt-3 mx-auto max-w-[140px]"
                style={{
                  fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                  color: "#6B7280",
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9 — CTA ─────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-tag mb-4">Get Started</p>
        <h2
          className="text-3xl md:text-4xl leading-tight mb-5"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 600, color: "#F9FAFB" }}
        >
          Build Your Engineering Team Faster
        </h2>
        <p className="mb-3 leading-relaxed" style={{ color: "#9CA3AF" }}>
          Tell us about your project and the type of engineers you need.
        </p>
        <p className="mb-10 leading-relaxed" style={{ color: "#9CA3AF" }}>
          Our team will help you find the right talent to accelerate your product development.
        </p>
        <a
          href="mailto:hello@jeelup.com"
          className="inline-block text-base font-semibold px-10 py-4 rounded-md transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#B2F4D6",
            color: "#111827",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontWeight: 600,
          }}
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}

// ─── Section 10 — Final Trust ─────────────────────────────────────────────────

function TrustSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#1F2937", borderTop: "1px solid #374151" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-xl md:text-2xl leading-relaxed mb-5"
          style={{ color: "#9CA3AF" }}
        >
          Jeelup represents a{" "}
          <span style={{ color: "#F9FAFB", fontWeight: 600 }}>
            new generation of engineers building alongside founders.
          </span>
        </p>
        <p className="leading-relaxed mb-14" style={{ color: "#9CA3AF" }}>
          Our teams combine strong technical expertise with curiosity, commitment, and the drive to help companies create impactful products.
        </p>
        <p
          className="text-2xl mb-7"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 700, color: "#F9FAFB" }}
        >
          Start Building With Jeelup
        </p>
        <a
          href="#contact"
          className="inline-block text-base font-semibold px-10 py-4 rounded-md transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#82F4D6",
            color: "#111827",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontWeight: 600,
          }}
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ backgroundColor: "#111827", borderTop: "1px solid #1F2937" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/jeelup.svg"
          alt="Jeelup"
          width={95}
          height={32}
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
            color: "#6B7280",
          }}
        >
          © {new Date().getFullYear()} Jeelup. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["How It Works", "Talent", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm transition-colors"
              style={{
                fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                color: "#6B7280",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyJeelup />
        <Roles />
        <BuiltForStartups />
        <HowItWorks />
        <Stats />
        <CTA />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
