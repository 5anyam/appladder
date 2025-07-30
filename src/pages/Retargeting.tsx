import { RefreshCw, Users, Bell, Link2, Activity, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Value Props
const ValueHighlights = [
  {
    icon: Users,
    title: "Smart Segmentation",
    text: "Identify and group dormant users, high-value churners, and custom audiences for precision re-engagement.",
  },
  {
    icon: Tag,
    title: "Dynamic Creative Personalization",
    text: "Deliver highly relevant, personalized offers or messages at exactly the right moment for every user.",
  },
  {
    icon: Link2,
    title: "Deep Linking",
    text: "Seamlessly direct users to specific in-app destinations, boosting conversion and session value.",
  },
  {
    icon: Bell,
    title: "Event-Based Triggers",
    text: "Trigger retargeting based on key actions—like app open, cart abandon, level completion, and more.",
  },
  {
    icon: Activity,
    title: "Real-Time Attribution",
    text: "Instantly measure reactivations, conversions, and the true impact of every campaign.",
  },
  {
    icon: RefreshCw,
    title: "Outcome-Driven",
    text: "Increase DAU, boost retention, maximize ARPU, and turn one-time users into your best customers.",
  },
];

// How It Works Steps
const steps = [
  {
    icon: Users,
    title: "Segment",
    desc: "Automatically identify inactive users, cart abandoners, and valuable churned audiences.",
    num: "01",
  },
  {
    icon: Tag,
    title: "Personalize",
    desc: "Craft relevant messages and offers using behavioral and event data for every audience segment.",
    num: "02",
  },
  {
    icon: Bell,
    title: "Trigger",
    desc: "Deliver campaigns when users take (or miss) key actions: app opens, add-to-cart, level complete, etc.",
    num: "03",
  },
  {
    icon: Link2,
    title: "Redirect & Measure",
    desc: "Send users to the perfect in-app spot via deep linking and see reactivations in real-time dashboards.",
    num: "04",
  },
];

// FAQs
const faqs = [
  {
    q: "What makes your retargeting different from basic push or email?",
    a: "We build truly smart, personalized campaigns using deep segmentation, in-app events, and real-time triggers—not just generic blasts. Your users get exactly what matters, when it matters.",
  },
  {
    q: "Is your engine privacy conscious?",
    a: "Absolutely. All retargeting honors user opt-outs and privacy rules, and we never use data without explicit user permission.",
  },
  {
    q: "Which channels do you support?",
    a: "We support in-app notifications, push, dynamic ads (across networks), and even email/SMS as required.",
  },
  {
    q: "Can I use this for churned users from months ago?",
    a: "Yes! Bring back users after weeks or months with personalized incentives—they don’t need to be recent drop-offs.",
  },
  {
    q: "How do I track ROI from re-engagement?",
    a: "Your dashboard shows real-time attribution: see reactivations, conversions, boosted retention, and ARPU uplift right as it happens.",
  },
];

const RetargetingReEngagementPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 pt-20 pb-10 relative">
        {/* Decorative BG */}
        <div className="hidden sm:block absolute -top-32 -left-32 w-[220px] h-[220px] bg-[#6a5afc09] rounded-full blur-2xl" />
        <div className="hidden sm:block absolute -bottom-10 -right-24 w-[120px] h-[120px] bg-[#00f0ff14] rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-10 text-center px-2">
            <span className="uppercase tracking-widest text-xs font-semibold text-[#3a3ad9] block mb-2">Retargeting & Re-engagement</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight break-words">
              Turn One-Time Installs Into Long-Term Revenue
            </h1>
            <p className="text-gray-700/90 text-base sm:text-lg md:text-xl mb-7">
              Not every new user means value.<br className="hidden sm:block" /> 
              Our smart Retargeting engine identifies <b>dormant, churned, or distracted users</b> and brings them back—at the perfect moment—with engaging, personalized campaigns that drive repeat action.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 py-3 md:px-9 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#3a3ad9] text-white hover:bg-[#00F0FF] hover:text-[#242878] transition"
            >
              Request a Free Retargeting Audit
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
              How <span className="gradient-text">Retargeting & Re-engagement</span> Works
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
              Our platform brings your best users back at scale—using data, personalization, and live feedback. Here’s the journey:
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
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Brands Love Appladder Re-engagement</h2>
            <ul className="text-gray-700/80 text-sm sm:text-base text-left space-y-2 sm:space-y-3 max-w-lg mx-auto list-disc list-inside">
              <li>Smart segmentation: Automatically find and reach every valuable user segment.</li>
              <li>Personalized offers trigger up to 4x more conversions than generic reactivation ads.</li>
              <li>Deep linking delivers seamless user journeys, not just app opens.</li>
              <li>Real-time ROI measurement—no more blind spend.</li>
              <li>Scale winning audiences and creative on autopilot.</li>
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
              Start Re-engaging Your Best Users
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RetargetingReEngagementPage;
