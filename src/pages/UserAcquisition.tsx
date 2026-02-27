import {
  Zap,
  Brush,
  Users,
  BarChart3,
  Shuffle,
  Cpu,
  TrendingUp,
  Bell,
  Target,
  Lightbulb,
  Rocket
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetstartedModalButton } from "@/components/GetstartedModal";

// Combined Key Benefits: User Acquisition + Programmatic UA
const ValueHighlights = [
  {
    icon: Zap,
    title: "Predictive AI & Smart Algorithms",
    text: "Harness the power of machine learning and DSP algorithms to discover high value users and automate media buying for maximum ROI.",
  },
  {
    icon: Cpu,
    title: "AI Budget Optimization",
    text: "Intelligent systems allocate your budget dynamically across best performing channels and geographies for optimal growth.",
  },
  {
    icon: Shuffle,
    title: "Global, Cross-Exchange Access",
    text: "Reach premium audiences on various global ad platforms and exchanges. All managed seamlessly from a single platform.",
  },
  {
    icon: TrendingUp,
    title: "Brand Safety & Fraud Protection",
    text: "Advanced fraud detection and placement controls ensure only genuine users and safe impressions for your brand.",
  },
  {
    icon: Brush,
    title: "Dynamic Creative Optimization",
    text: "Continuously A/B test videos, images, and messages; our tech automatically shifts spend to top performing creatives.",
  },
  {
    icon: BarChart3,
    title: "Real-Time, Transparent Reporting",
    text: "Track installs, revenue, LTV, and more with live analytics no hidden numbers, just instant campaign clarity.",
  },
  {
    icon: Users,
    title: "Automated, Scalable Acquisition",
    text: "Appladder manages and scales acquisition globally no manual guesswork, just consistent user and revenue growth.",
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
    desc: "Personalized AI-powered strategies go live bidding programmatically, optimizing bids and creative from day one.",
    num: "02"
  },
  {
    icon: Rocket,
    title: "Cross-Exchange Scaling",
    desc: "Campaigns tap global inventory, targeting lookalike and high intent users with dynamic creatives and smart capping.",
    num: "03"
  },
  {
    icon: BarChart3,
    title: "Analyze & Grow",
    desc: "Track everything: installs, engagement, spend, ROI. So that you can scale what works, instantly.",
    num: "04"
  }
];

// Merged FAQs
const faqs = [
  {
    q: "How quickly can I launch and see results?",
    a: "Setup is quick! Most apps go live in under 48 hours; analytics and optimizations are live from day one."
  },
  {
    q: "Can custom creatives be uploaded and optimised?",
    a: "Yes, upload banners, videos and playables, our system runs continuous tests and shifts traffic to what converts best."
  },
  {
    q: "How does fraud protection and brand safety work?",
    a: "Multi-layered verification, trusted supply, manual and algorithmic checks ensure only real users and safe brand placement always."
  },
  {
    q: "What kind of reporting and transparency can I expect?",
    a: "You'll access full funnel, real-time analytics (installs, LTV, ROAS, events) in your reports no hidden costs or numbers, ever."
  }
];

const AcquisitionPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white mt-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase tracking-widest text-xs font-semibold text-primary">
              Acquisition
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              User Acquisition & Programmatic Growth
              <br />
              <span className="gradient-text py-4">Smarter Installs. Stronger ROI.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Appladder combines classic and programmatic UA in one streamlined platform.
              Global reach, real-time optimizations, safe delivery and target user <span className="text-primary font-semibold">all in one place</span>.
            </p>
            <GetstartedModalButton/>
          </div>
        </div>
      </section>

      {/* Value Highlights Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text py-4">Key Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive acquisition solutions designed to maximize your app's growth potential
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ValueHighlights.map((vh, index) => (
              <Card 
                key={vh.title}
                className="group hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm border-0 overflow-hidden animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300 mb-4">
                    <vh.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {vh.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {vh.text}
                  </p>
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text py-4">Acquisition</span> with Appladder Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Go live in days, not weeks. Unified campaign launch through a proven four-step process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={step.num}
                className="group hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-0 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-primary tracking-widest">
                      {step.num}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text py-4">Frequently Asked</span> Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our acquisition platform and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-brand transition-all duration-300 bg-card/80 backdrop-blur-sm border-0"
              >
                <CardContent className="p-6">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  >
                    <span className="font-semibold text-foreground text-lg">{faq.q}</span>
                    <span
                      className="ml-3 text-primary transition-transform"
                      style={{ transform: openFAQ === idx ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      ▶
                    </span>
                  </button>
                  {openFAQ === idx && (
                    <div className="mt-4 text-muted-foreground border-t pt-4 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AcquisitionPage;
