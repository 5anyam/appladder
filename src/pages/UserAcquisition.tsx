import {
  Zap,
  Brush,
  Users,
  BarChart3,
  Code2,
  Shuffle,
  Cpu,
  TrendingUp,
  Bell,
  ArrowRight,
  Target,
  Lightbulb,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Combined Key Benefits: User Acquisition + Programmatic UA
const ValueHighlights = [
  {
    icon: Zap,
    title: "Predictive AI & Smart Algorithms",
    text: "Harness the power of machine learning and DSP algorithms to discover high-value users and automate media buying for maximum ROI.",
  },
  {
    icon: Cpu,
    title: "AI Budget Optimization",
    text: "Intelligent systems allocate your budget dynamically across best-performing channels, creatives, and geographies for optimal growth.",
  },
  {
    icon: Shuffle,
    title: "Global, Cross-Exchange Access",
    text: "Reach premium audiences on 600+ global ad platforms and exchanges—all managed seamlessly from a single platform.",
  },
  {
    icon: TrendingUp,
    title: "Brand Safety & Fraud Protection",
    text: "Advanced fraud detection and placement controls ensure only genuine users and safe impressions for your brand.",
  },
  {
    icon: Brush,
    title: "Dynamic Creative Optimization",
    text: "Continuously A/B test videos, images, and messages; our tech automatically shifts spend to top-performing creatives.",
  },
  {
    icon: BarChart3,
    title: "Real-Time, Transparent Reporting",
    text: "Track installs, revenue, LTV, and more with live analytics—no hidden numbers, just instant campaign clarity.",
  },
  {
    icon: Users,
    title: "Automated, Scalable Acquisition",
    text: "Appladder manages and scales acquisition globally—no manual guesswork, just consistent user and revenue growth.",
  },
  {
    icon: Bell,
    title: "Event-Based Optimization",
    text: "React instantly to in-app events for smarter retargeting, LTV boosts, and lifetime engagement.",
  }
];

// Unified "How it Works" (Merged, concise)
const steps = [
  {
    icon: Target,
    title: "Define & Onboard",
    desc: "Connect your app and share your growth goals; integrate tracking for a custom acquisition experience.",
    num: "01"
  },
  {
    icon: Lightbulb,
    title: "Strategic Launch",
    desc: "Personalized AI-powered strategies go live—bidding programmatically, optimizing bids and creative from day one.",
    num: "02"
  },
  {
    icon: Rocket,
    title: "Cross-Exchange Scaling",
    desc: "Campaigns tap global inventory, targeting lookalike and high-intent users with dynamic creatives and smart capping.",
    num: "03"
  },
  {
    icon: BarChart3,
    title: "Analyze & Grow",
    desc: "Track everything: installs, engagement, spend, ROI—so you scale what works, instantly.",
    num: "04"
  }
];

// Merged FAQs
const faqs = [
  {
    q: "How do you combine manual UA and programmatic DSP?",
    a: "Appladder unifies classic user acquisition and DSP-based programmatic buying: you get best-in-class targeting and AI bidding."
  },
  {
    q: "How quickly can I launch and see results?",
    a: "Setup is quick! Most apps go live in under 48 hours; analytics and optimizations are live from day one."
  },
  {
    q: "Can I upload and optimize my own creatives?",
    a: "Yes, upload banners, videos, and playables—our system runs continuous tests and shifts traffic to what converts best."
  },
  {
    q: "How does fraud protection and brand safety work?",
    a: "Multi-layered verification, trusted supply, manual and algorithmic checks ensure only real users and safe brand placement—always."
  },
  {
    q: "What kind of reporting and transparency can I expect?",
    a: "You'll access full-funnel, real-time analytics (installs, LTV, ROAS, events) in your reports no hidden costs or numbers, ever."
  }
];

const mainColor = "#2a2e82";

const AcquisitionPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: mainColor }}>
              Acquisition
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight break-words">
              User Acquisition & Programmatic Growth
              <span className="block" style={{ color: mainColor }}>Smarter Installs. Stronger ROI.</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-7">
              Appladder combines classic and programmatic UA in one streamlined platform.
              <br />
              Global reach, real-time AI, safe delivery, maximum results—<span style={{ color: mainColor, fontWeight: 600 }}>all in one dashboard</span>.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-base font-bold shadow"
              style={{ background: mainColor, color: "#fff" }}
            >
              Start Maximizing Acquisition
            </Button>
          </div>

          {/* Value Highlights - Equal Size Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {ValueHighlights.map((vh, idx) => (
              <div
                key={vh.title}
                className="flex flex-col items-center text-center h-full p-7 rounded-2xl border border-gray-200 bg-white shadow transition-transform duration-200 hover:-translate-y-2"
                style={{ minHeight: "295px" }}
              >
                <div className="mb-5 w-14 h-14 flex items-center justify-center bg-slate-100 rounded-xl" style={{ color: mainColor }}>
                  <vh.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{vh.title}</h3>
                <p className="text-gray-600 text-sm">{vh.text}</p>
              </div>
            ))}
          </div>

          {/* How it Works - Equal Size Grid */}
          <div className="w-full max-w-5xl mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                How <span style={{ color: mainColor }}>Acquisition</span> with Appladder Works
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Go live in days, not weeks. Unified campaign launch through a proven four-step process:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center h-full p-7 rounded-2xl border border-gray-200 bg-white shadow transition-transform duration-200 hover:-translate-y-2"
                  style={{ minHeight: "235px" }}
                >
                  <div
                    className="mb-4 w-12 h-12 flex items-center justify-center rounded-full"
                    style={{ background: mainColor, color: "#fff" }}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="mb-1 text-xs font-semibold" style={{ color: mainColor }}>
                    {step.num}
                  </div>
                  <div className="font-semibold text-lg text-gray-950 mb-1">{step.title}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
         

          {/* FAQs */}
          <div className="w-full max-w-2xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900" style={{ color: mainColor }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 shadow flex flex-col transition-all duration-150"
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  >
                    <span className="font-medium text-gray-950 text-base sm:text-lg">{faq.q}</span>
                    <span
                      className="ml-3 transition-transform"
                      style={{ color: mainColor, transform: openFAQ === idx ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      ▶
                    </span>
                  </button>
                  {openFAQ === idx && (
                    <div className="mt-3 text-gray-600 border-t pt-3 text-sm sm:text-base">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-base font-bold shadow"
              style={{ background: mainColor, color: "#fff" }}
            >
              Get Started with Appladder
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AcquisitionPage;
