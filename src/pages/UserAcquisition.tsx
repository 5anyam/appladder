import { Zap, BarChart3, Users, Brush, ArrowRight, Target, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Benefits
const ValueHighlights = [
  {
    icon: Zap,
    title: "Predictive AI Targeting",
    text: "Our machine learning models identify and reach your highest-value users across all channels—so you see not just more installs, but better ones.",
  },
  {
    icon: Brush,
    title: "Dynamic Creative Optimization",
    text: "Effortlessly launch creative A/B tests, tailor content for every audience, and let our platform pick top performers for you automatically.",
  },
  {
    icon: Users,
    title: "Automated Global Scaling",
    text: "Appladder automatically scales your spend, creative sets, and channels according to real-time performance and ROAS—no manual guesswork.",
  },
  {
    icon: BarChart3,
    title: "Transparent, Live Reporting",
    text: "Full-access live dashboard: See installs, LTV, retention, and key in-app events—all in real time, with no hidden numbers.",
  },
];

// How It Works
const steps = [
  {
    icon: Target,
    title: "Share Your Goals",
    desc: "Tell us about your app, target market, and growth KPIs. The more we know, the smarter we can launch.",
    num: "01",
  },
  {
    icon: Lightbulb,
    title: "Get a Custom Plan",
    desc: "Receive a personalized UA strategy powered by AI—channel mix, creative suggestions, and conversion budget mapping.",
    num: "02",
  },
  {
    icon: Rocket,
    title: "Campaigns Go Live",
    desc: "We launch across 600+ top networks, optimizing bids and creative in real time for fraud-free, high-LTV users.",
    num: "03",
  },
  {
    icon: BarChart3,
    title: "Track & Grow",
    desc: "Watch installs, revenue, and engagement grow on your live dashboard, with full campaign analytics and weekly growth insights.",
    num: "04",
  },
];

// FAQs
const faqs = [
  {
    q: "How quickly can I launch my first campaign?",
    a: "Most apps go live within 48 hours of onboarding—the sooner you share your goals, the faster we launch."
  },
  {
    q: "What markets does Appladder support?",
    a: "We offer global reach with targeting for any region—including emerging, Tier 1, and local custom."
  },
  {
    q: "Do you support both Android and iOS?",
    a: "Absolutely! Our user acquisition platform works seamlessly for both Android and iOS mobile apps."
  },
  {
    q: "Is your dashboard really in real-time?",
    a: "Yes—installs, retention, LTV, and even creative performance metrics are updated live in your dashboard."
  },
  {
    q: "Is there a minimum budget?",
    a: "We’re growth-friendly for all: minimum monthly budgets start at just $2,500 USD."
  },
];

const UserAcquisitionPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 pt-20 pb-10 relative">
        {/* Background Decorations: Hide on mobile for better usability */}
        <div className="hidden sm:block absolute -top-32 -left-32 w-[260px] h-[260px] bg-[#6a5afc09] rounded-full blur-2xl" />
        <div className="hidden sm:block absolute -bottom-10 -right-24 w-[140px] h-[140px] bg-[#00f0ff14] rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="max-w-2xl mx-auto mb-10 text-center px-2">
            <span className="uppercase tracking-widest text-xs font-semibold text-[#3a3ad9] block mb-2">User Acquisition</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight break-words">
              Drive Quality Installs.
              <br className="hidden xs:block" />
              <span className="gradient-text block sm:inline">Retain Your Best Users</span>
            </h1>
            <p className="text-gray-700/95 text-base sm:text-lg md:text-xl mb-7">
              Appladder makes mobile growth <b>predictable, efficient, transparent.</b> 
              <br className="hidden sm:block" />
              Turbocharge installs, LTV, and retention with automated UA, creative testing, and truly <span className="text-[#3a3ad9] font-bold">real-time analytics</span>—all in a single dashboard.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 py-3 md:px-9 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#00F0FF] text-[#242878] hover:bg-[#3a3ad9] hover:text-white transition"
            >
              Book a Free Growth Audit
            </Button>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 max-w-5xl mx-auto mt-4 mb-16">
            {ValueHighlights.map((vh, idx) => (
              <div
                key={vh.title}
                className="card-white flex flex-col items-center text-center p-6 md:p-7 rounded-xl sm:rounded-2xl shadow-brand border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${0.12 + idx * 0.1}s` }}
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
              How <span className="gradient-text">User Acquisition</span> Works with Appladder
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
              We’ve designed a frictionless, data-driven onboarding—so you get results, not delays. Here’s every step from your idea to scaling your app business globally:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="card-white flex flex-col items-center text-center p-6 md:p-7 rounded-xl sm:rounded-2xl border border-gray-200 shadow-brand transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: `${0.18 + idx * 0.1}s` }}
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

          {/* Feature Details */}
          <div className="max-w-3xl mx-auto my-14 sm:my-20 card-white shadow-brand border border-gray-200 rounded-2xl md:rounded-3xl py-8 sm:py-12 px-4 sm:px-8 text-center animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Brands Choose Us</h2>
            <ul className="text-gray-700/80 text-sm sm:text-base text-left space-y-2 sm:space-y-3 max-w-lg mx-auto list-disc list-inside">
              <li>Fast integration: Go live in less than 48 hours</li>
              <li>AI-powered optimization for every campaign (no manual tuning needed!)</li>
              <li>Global reach with advanced fraud protection</li>
              <li>24x7 support from mobile growth experts</li>
              <li>Transparent, always-on analytics you can understand</li>
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

export default UserAcquisitionPage;
