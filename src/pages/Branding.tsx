import { Star, MonitorPlay, PenTool, Brush, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetstartedModalButton } from "@/components/GetstartedModal";

// Branding Benefits / Values
const ValueHighlights = [
  {
    icon: Star,
    title: "Brand-Led Creative",
    text: "We don't just run ads we tell your brand story through impactful, mobile-first creative that connects and converts.",
  },
  {
    icon: MonitorPlay,
    title: "High-Impact Formats",
    text: "Leverage video, interactive, playable, banners and native units to deliver a consistent, memorable brand presence.",
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
    desc: "We audit your app, product and values to define the look, voice and intent for every creative.",
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
    desc: "Launch campaigns across premium networks, influencer partners and social to maximize positive brand impressions.",
    num: "03",
  },
  {
    icon: Star,
    title: "Analyze Brand Lift",
    desc: "Track reach, engagement, sentiment and impact in real time — not just views, but meaningful results.",
    num: "04",
  },
];

// Branding FAQs
const faqs = [
  {
    q: "Is there a minimum spend for branding campaigns?",
    a: "It depends on scope: starter campaigns available from $5,000/month. Custom projects (including design + media) are quoted after a free audit.",
  },
  {
    q: "How do you measure brand campaign success?",
    a: "We provide full brand lift analytics: reach, brand recall, engagement, positive sentiment and actual user growth all in your reports.",
  },
  {
    q: "Do you also provide marketing?",
    a: "Absolutely! We manage vetting, activation and reporting for real creators who fit your brand and drive results.",
  },
];

const BrandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 mt-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase tracking-widest text-xs font-semibold text-primary">
              Branding
            </span>
            <h1 className="text-4xl mt-4 md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Build Loyalty.
              <br />
              <span className="gradient-text py-4">Make Your App Unforgettable</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              First impressions matter. Let Appladder craft your app's brand identity, creative assets and storytelling and amplify it to millions, everywhere your users spend time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetstartedModalButton/>
            </div>
          </div>
        </div>
      </section>

      {/* Value Highlights Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text py-4">Branding Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive branding services designed to make your app stand out and connect with users
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              How <span className="gradient-text py-4">Branding</span> Works at Appladder
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's how we turn your brand vision into sustainable app growth and user love
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
              Common questions about our branding services and solutions
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

export default BrandingPage;
