import { Code2, Shuffle, Cpu, TrendingUp, Zap, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Key Programmatic UA Benefits
const ValueHighlights = [
  {
    icon: Code2,
    title: "Smart Algorithms",
    text: "Our DSP uses advanced algorithms to buy media in real time—targeting only the right user, at the best price.",
  },
  {
    icon: Cpu,
    title: "AI Budget Optimization",
    text: "Machine learning intelligently allocates budget across channels, creatives, and geos for maximal ROAS and scale.",
  },
  {
    icon: Shuffle,
    title: "Cross-Exchange Access",
    text: "Your campaigns reach premium traffic on 600+ global exchanges, all managed from a single Appladder dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Brand Safety & Fraud Protection",
    text: "Best-in-class anti-fraud, safe placements, and viewability—ensured on every bid, every impression.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    text: "Optimize in the moment: live reporting of installs, engagement, costs, and in-app value.",
  },
  {
    icon: Bell,
    title: "Creative Experimentation",
    text: "A/B test images, videos, and interactive ad units easily—our DSP shifts budget to top performers automatically.",
  },
];

// How It Works Steps
const steps = [
  {
    icon: Cpu,
    title: "Plug In",
    desc: "Connect your app, define your KPIs, and integrate tracking—setup in minutes, not days.",
    num: "01",
  },
  {
    icon: Shuffle,
    title: "Launch Programmatic Bids",
    desc: "Our engine starts bidding across global exchanges, programmatically targeting your best user profiles.",
    num: "02",
  },
  {
    icon: Bell,
    title: "AI Optimization",
    desc: "AI models optimize channels, creative, cohorts and bids in real time—no manual toggling needed.",
    num: "03",
  },
  {
    icon: TrendingUp,
    title: "Get Live Results",
    desc: "Monitor installs, LTV, and event outcomes as campaigns run. Scale what works, fast.",
    num: "04",
  },
];

// FAQs
const faqs = [
  {
    q: "What is programmatic UA?",
    a: "It’s automated, real-time ad buying powered by algorithms—ensuring you reach the right user, on the right app, at the right moment, programmatically (not via manual negotiation).",
  },
  {
    q: "How does Appladder ensure fraud-free acquisition?",
    a: "We use multi-layer fraud detection, trusted supply, and verification partners to guarantee safe, quality traffic and real users only.",
  },
  {
    q: "Can I use my own creative assets?",
    a: "Yes! Upload banners, video, playables, and experiment—our DSP will test and optimize for you.",
  },
  {
    q: "Is this self-serve, managed, or both?",
    a: "Both. Use a fully managed UA service, or log into your dashboard and control everything—your way.",
  },
  {
    q: "What results can I expect?",
    a: "You’ll see faster scaling, smarter spending, and stronger ROI vs. traditional UA channels. Get real, in-app results—installs, retention, ARPU—measured live.",
  },
];

const ProgrammaticUAPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 pt-20 pb-10 relative">
        {/* Decorative BG shapes */}
        <div className="hidden sm:block absolute -top-32 -left-32 w-[180px] h-[180px] bg-[#6a5afc09] rounded-full blur-2xl" />
        <div className="hidden sm:block absolute -bottom-10 -right-24 w-[120px] h-[120px] bg-[#00f0ff14] rounded-full blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-10 text-center px-2">
            <span className="uppercase tracking-widest text-xs font-semibold text-[#3a3ad9] block mb-2">Programmatic UA</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight break-words">
              Scale App Installs with 
              <span className="gradient-text block sm:inline"> Programmatic Precision</span>
            </h1>
            <p className="text-gray-700/90 text-base sm:text-lg md:text-xl mb-7">
              Go beyond manual ad buying.
              <br className="hidden sm:block" />
              Appladder’s Programmatic DSP unlocks high-quality installs, real-time optimization, and cost control—so you grow fast, safe, and profitably.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 py-3 md:px-9 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#00F0FF] text-[#242878] hover:bg-[#3a3ad9] hover:text-white transition"
            >
              Request a DSP Demo
            </Button>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-4 mb-16">
            {ValueHighlights.map((vh, idx) => (
              <div
                key={vh.title}
                className="card-white flex flex-col items-center text-center p-6 md:p-7 rounded-xl sm:rounded-2xl shadow-brand border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${0.12 + idx * 0.07}s` }}
              >
                <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-[#00F0FF] rounded-xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <vh.icon className="w-7 h-7 text-[#242878]" />
                </div>
                <h3 className="font-semibold text-base md:text-lg text-gray-950 mb-1">{vh.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{vh.text}</p>
              </div>
            ))}
          </div>

          {/* How it Works */}
          <div className="max-w-5xl mx-auto text-center my-14 sm:my-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              How <span className="gradient-text">Programmatic UA</span> Works
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
              Launch, optimize, and scale in four simple steps—all powered by data, not guesswork:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="card-white flex flex-col items-center text-center p-6 md:p-7 rounded-xl sm:rounded-2xl border border-gray-200 shadow-brand transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
                >
                  <div className="mb-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3a3ad9] flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="mb-1 text-xs sm:text-sm font-semibold text-[#00F0FF] tracking-widest">{step.num}</div>
                  <div className="font-semibold text-base sm:text-lg text-gray-950 mb-1">{step.title}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Brands Use Appladder Programmatic */}
          <div className="max-w-3xl mx-auto my-14 sm:my-20 card-white shadow-brand border border-gray-200 rounded-2xl md:rounded-3xl py-8 sm:py-12 px-4 sm:px-8 text-center animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Appladder Programmatic?</h2>
            <ul className="text-gray-700/80 text-sm sm:text-base text-left space-y-2 sm:space-y-3 max-w-lg mx-auto list-disc list-inside">
              <li>Unified campaign dashboard for programmatic, influencer, and manual buys</li>
              <li>All creative/assets tested and optimized automatically</li>
              <li>Granular reporting and spend capping for absolute control</li>
              <li>Expert campaign managers always on hand (or self-serve!)</li>
              <li>Integrates with all MMPs and app analytics instantly</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto my-14 sm:my-20">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 sm:space-y-5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow flex flex-col transition-all duration-150">
                  <div
                    className="cursor-pointer text-left flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  >
                    <span className="font-medium text-gray-950 text-base sm:text-lg">{faq.q}</span>
                    <span className="ml-3 transition-transform" style={{transform: openFAQ === idx ? "rotate(90deg)" : "rotate(0deg)"}}>▶</span>
                  </div>
                  {openFAQ === idx && (
                    <div className="mt-3 text-gray-600 border-t pt-3 text-sm sm:text-base">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 sm:mt-20 text-center animate-fade-in-up">
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 py-3 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#3a3ad9] text-white hover:bg-[#00F0FF] hover:text-[#242878] transition"
            >
              Start Programmatic UA Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProgrammaticUAPage;
