import { RefreshCw, Users, Bell, Link2, Activity, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetstartedModalButton } from "@/components/GetstartedModal";

// Value Props
const ValueHighlights = [
  {
    icon: Users,
    title: "Smart Segmentation",
    text: "Identify and group dormant users, high value churners, and custom audiences for precision re-engagement.",
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
    title: "Event Based Triggers",
    text: "Trigger retargeting based on key actions like app open, cart abandon, level completion and more.",
  },
  {
    icon: Activity,
    title: "Real Time Attribution",
    text: "Instantly measure reactivations, conversions, and the true impact of every campaign.",
  },
  {
    icon: RefreshCw,
    title: "Outcome-Driven",
    text: "Increase DAU, boost retention, maximize ARPU, and turn one time users into your best customers.",
  },
];

// How It Works Steps
const steps = [
  {
    icon: Users,
    title: "Segment",
    desc: "Automatically identify inactive users, cart abandoners and valuable churned audiences.",
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
    desc: "Deliver campaigns when users take (or miss) key actions: app opens, add to cart, level complete, etc.",
    num: "03",
  },
  {
    icon: Link2,
    title: "Redirect & Measure",
    desc: "Send users to the perfect in-app spot via deep linking and see reactivations.",
    num: "04",
  },
];

// FAQs
const faqs = [
  {
    q: "What makes your retargeting different from basic push or email?",
    a: "We build truly smart, personalized campaigns using deep segmentation, in-app events, and real time triggers not just generic blasts. Your users get exactly what matters, when it matters.",
  },
  {
    q: "Is your engine privacy conscious?",
    a: "Absolutely. All retargeting honors user opt-outs and privacy rules, and we never use data without explicit user permission.",
  },
  {
    q: "Which channels do you support?",
    a: "We support in-app notifications, push, dynamic ads (across networks) as required.",
  },
  {
    q: "Can I use this for churned users from months ago?",
    a: "Yes! Bring back users after weeks or months with personalized incentives they don't need to be recent drop offs.",
  },
  {
    q: "How do I track ROI from re-engagement?",
    a: "At AppLadder we track re-engagement ROI by measuring revenue from users who return after seeing ads. Using MMPs, we attribute post engagement actions like purchases or subscriptions to specific campaigns. ROI is calculated by comparing that attributed revenue against re-engagement ad spend.",
  },
];

const RetargetingReEngagementPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-12 pt-20 mt-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase tracking-widest text-xs font-semibold text-primary">
              Retargeting & Re-engagement
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground my-6 leading-tight">
              Turn One Time Installs Into
              <br />
              <span className="gradient-text py-4">Long Term Revenue</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Not every new user means value. Our smart Retargeting engine identifies <b>dormant, churned, or distracted users</b> and brings them back at the perfect moment with engaging, personalized campaigns that drive repeat action.
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
              Our <span className="gradient-text py-4">Re-engagement Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced retargeting solutions designed to bring back your most valuable users
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
              How <span className="gradient-text py-4">Retargeting & Re-engagement</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform brings your best users back at scale using data, personalization, and live feedback
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
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text py-4">Frequently Asked</span> Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our retargeting and re-engagement solutions
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

export default RetargetingReEngagementPage;
