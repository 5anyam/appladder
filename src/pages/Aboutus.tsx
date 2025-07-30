import { RefreshCw, Zap, PenTool, Cpu} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "User Acquisition",
    desc:
      "Smarter growth, stronger LTV. Appladder finds your highest-value users around the globe with predictive AI, creative testing, and seamless scaling — so you get the installs that truly convert and retain.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Re-engagement",
    desc:
      "Not all users stay active. Our data-driven engine re-engages dormant, churned, and high-potential audiences with personalized, event-triggered campaigns — improving DAU, retention, and ARPU for your app.",
  },
  {
    icon: PenTool,
    title: "Branding",
    desc:
      "First impressions matter! We elevate your app’s identity through custom design, cross-channel creative, influencer and video strategy — ensuring users remember, trust, and love your brand.",
  },
  {
    icon: Cpu,
    title: "Programmatic UA",
    desc:
      "Our real-time DSP uses advanced algorithms for smarter, automated ad buying — reaching 600+ exchanges/partners, optimizing spend and creative, and guaranteeing fraud-free, high-quality growth.",
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 pt-24 pb-16 relative">
        {/* Decorative BG */}
        <div className="hidden sm:block absolute -top-32 -left-32 w-[220px] h-[220px] bg-[#6a5afc09] rounded-full blur-2xl" />
        <div className="hidden sm:block absolute -bottom-16 -right-24 w-[140px] h-[140px] bg-[#00f0ff14] rounded-full blur-2xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-7 lg:px-0">
          {/* About Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="uppercase tracking-widest text-xs font-semibold text-[#3a3ad9] block mb-2">
              About Appladder
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              We <span className="gradient-text">Elevate App Growth</span><br /> with Data, Creativity, & Tech
            </h1>
            <p className="text-gray-700/90 text-base sm:text-lg md:text-xl mb-7">
              Appladder turns every mobile app’s growth goal into reality — blending smart data, creative science, and
              cutting-edge tech. From quality user acquisition to lasting engagement, we help you scale, succeed, and build a brand people love.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 py-3 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#00F0FF] text-[#242878] hover:bg-[#3a3ad9] hover:text-white transition"
            >
              Partner With Us
            </Button>
          </div>

          {/* Values/Mission */}
          <div className="card-white rounded-2xl px-6 py-8 shadow-brand border border-gray-200 mb-12 max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-5">
              To empower app founders and marketers to grow smarter, faster, and more profitably — with a focus on <span className="gradient-text font-semibold">quality users, creative brand experiences,</span> and long-term, transparent value.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mt-4 text-[#3a3ad9] font-medium">
              <span>🚀 Innovation-Driven</span>
              <span>🤝 Transparent</span>
              <span>🌎 Global Mindset</span>
              <span>💡 Creative First</span>
              <span>📊 Data Obsessed</span>
            </div>
          </div>

          {/* Core Services */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-7 text-center text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {services.map((srv, idx) => (
              <div
                key={srv.title}
                className="card-white flex flex-col items-center text-center p-7 rounded-2xl shadow-brand border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${0.14 + idx * 0.07}s` }}
              >
                <div className="mb-4 w-14 h-14 bg-[#00F0FF] rounded-xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <srv.icon className="w-7 h-7 text-[#242878]" />
                </div>
                <h3 className="font-semibold text-lg text-gray-950 mb-1">{srv.title}</h3>
                <p className="text-gray-600 text-sm">{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <div className="card-white rounded-2xl px-6 py-8 shadow-brand border border-gray-200 mb-16 max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Why Global Brands Choose <span className="gradient-text">Appladder?</span>
            </h2>
            <ul className="text-gray-700 text-base text-left space-y-3 max-w-lg mx-auto list-disc list-inside">
              <li>⚡️ Fast Onboarding — get campaigns live in <b>under 48 hours</b></li>
              <li>🔍 Advanced fraud protection & real-time analytics 
              </li>
              <li>🎨 Creative studio, influencer & video inside your dashboard</li>
              <li>🌐 600+ global traffic partners, all managed via a single platform</li>
              <li>💬 Friendly, expert support Team — always there, never bots</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10 animate-fade-in-up">
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 py-3 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-bold shadow-brand bg-[#3a3ad9] text-white hover:bg-[#00F0FF] hover:text-[#242878] transition"
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUsPage;
