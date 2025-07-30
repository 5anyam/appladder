import { Star, MonitorPlay, PenTool , Brush,  Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExampleWithModalButton } from "@/components/UniversalModal";

// Branding Benefits / Values
const ValueHighlights = [
  {
    icon: Star,
    title: "Brand-Led Creative",
    text: "We don’t just run ads — we tell your brand story through impactful, mobile-first creative that connects and converts.",
  },
  {
    icon: MonitorPlay,
    title: "High-Impact Formats",
    text: "Leverage video, interactive, playable, banners, and native units to deliver a consistent, memorable brand presence.",
  },
  {
    icon: PenTool,
    title: "Custom Design Studio",
    text: "Our in-house team crafts custom creatives and brand assets for every campaign — localized, animated, always on-brand.",
  },
  {
    icon: Users,
    title: "Influencer & Creator Integration",
    text: "Expand reach with vetted influencers and creators who authentically amplify your message to millions.",
  },
  {
    icon: Brush,
    title: "Cross-Channel Consistency",
    text: "Brand look and tone are unified across every touchpoint, from ads and influencer videos to in-app experiences.",
  },
  {
    icon: Star,
    title: "Brand Safety & Visibility",
    text: "Your content only appears in high-quality, brand-safe placements for maximum trust and impact.",
  },
];

// "How It Works" Branding Steps
const steps = [
  {
    icon: PenTool,
    title: "Discover Your Brand",
    desc: "We audit your app, product, and values to define the look, voice, and intent for every creative.",
    num: "01",
  },
  {
    icon: MonitorPlay,
    title: "Craft & Curate Creative",
    desc: "Our studio designs and animates assets in all key formats, optimized for every audience and placement.",
    num: "02",
  },
  {
    icon: Users,
    title: "Amplify & Distribute",
    desc: "Launch campaigns across premium networks, influencer partners, and social to maximize positive brand impressions.",
    num: "03",
  },
  {
    icon: Star,
    title: "Analyze Brand Lift",
    desc: "Track reach, engagement, sentiment, and impact in real time — not just views, but meaningful results.",
    num: "04",
  },
];

// Branding FAQs
const faqs = [
  {
    q: "What types of creatives can you produce?",
    a: "We deliver video, banners, animated stories, playable ads, influencer videos, and rich in-app moments — tailored to your exact brand needs.",
  },
  {
    q: "Can you help rebrand or refresh our app identity?",
    a: "Yes! From a logo refresh to a full rebrand, our studio and strategy team can guide you from vision to rollout.",
  },
  {
    q: "Is there a minimum spend for branding campaigns?",
    a: "It depends on scope: starter campaigns available from $3,000/month. Custom projects (including design + media) are quoted after a free audit.",
  },
  {
    q: "How do you measure brand campaign success?",
    a: "We provide full brand lift analytics: reach, brand recall, engagement, positive sentiment, and actual user growth — all in your dashboard.",
  },
  {
    q: "Do you also provide influencer marketing?",
    a: "Absolutely! We manage vetting, activation, and reporting for real creators who fit your brand and drive results.",
  },
];

const BrandingPage = () => {
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
            <span className="uppercase tracking-widest text-xs font-semibold text-[#3a3ad9] block mb-2">Branding</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight break-words">
              Build Loyalty. 
              <br className="hidden sm:block" />
              <span className="gradient-text">Make Your App Unforgettable</span>
            </h1>
            <p className="text-gray-700/90 text-base sm:text-lg md:text-xl mb-7">
              First impressions matter. <br className="hidden sm:block" />
              Let Appladder craft your app’s brand identity, creative assets, and storytelling — and amplify it to millions, everywhere your users spend time.
            </p>
            <ExampleWithModalButton/>
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 py-3 md:px-9 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#3a3ad9] text-white hover:bg-[#00F0FF] hover:text-[#242878] transition"
            >
              Request a Branding Audit
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
                <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-[#3a3ad9] rounded-xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <vh.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-base md:text-lg text-gray-950 mb-1">{vh.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{vh.text}</p>
              </div>
            ))}
          </div>

          {/* How it Works */}
          <div className="max-w-5xl mx-auto text-center my-14 sm:my-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              How <span className="gradient-text">Branding</span> Works at Appladder
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
              Here’s how we turn your brand vision into sustainable app growth and user love:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="card-white flex flex-col items-center text-center p-6 md:p-7 rounded-xl sm:rounded-2xl border border-gray-200 shadow-brand transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
                >
                  <div className="mb-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00F0FF] flex items-center justify-center text-[#3a3ad9] font-bold text-lg shadow-glow">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="mb-1 text-xs sm:text-sm font-semibold text-[#3a3ad9] tracking-widest">{step.num}</div>
                  <div className="font-semibold text-base sm:text-lg text-gray-950 mb-1">{step.title}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Details */}
          <div className="max-w-3xl mx-auto my-14 sm:my-20 card-white shadow-brand border border-gray-200 rounded-2xl md:rounded-3xl py-8 sm:py-12 px-4 sm:px-8 text-center animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Brands Prefer Appladder Branding</h2>
            <ul className="text-gray-700/80 text-sm sm:text-base text-left space-y-2 sm:space-y-3 max-w-lg mx-auto list-disc list-inside">
              <li>Brand-building + user growth, not just “ad impressions”</li>
              <li>Custom animation, influencer, and creative services under one roof</li>
              <li>Localized and global rollout, powered by real insights</li>
              <li>Clear, simple reporting on brand-lift and awareness</li>
              <li>End-to-end support from strategy to campaign optimization</li>
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
              className="w-full sm:w-auto px-7 py-3 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#00F0FF] text-[#242878] hover:bg-[#3a3ad9] hover:text-white transition"
            >
              Start Building Your App Brand
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BrandingPage;
