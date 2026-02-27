import { Target, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: Target,
    title: "Identify a high-value, trusted audience for your app",
    description:
      "Provide details about your application, ideal customers, and growth goals. Our team reviews your existing data to unlock potential growth areas.",
    step: "01"
  },
  {
    icon: Lightbulb,
    title: "Capture and Interact users at every step of your customer journey",
    description:
      "Utilizing AI, we develop tailored acquisition plans to target the most effective channels and audiences.",
    step: "02"
  },
  {
    icon: Rocket,
    title: "Boost retention through smart machine learning creatives",
    description:
      "Campaigns deploy on various platforms with ongoing optimization and built-in fraud prevention.",
    step: "03"
  }
];


const HowItWorksSection = () => {
  // For entrance animations (cards appear one by one)
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const timeouts = steps.map((_, idx) =>
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, idx]);
      }, 220 + idx * 160)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* background blur gradient taste */}
      <div className="absolute -top-44 -left-32 w-[340px] h-[340px] bg-gradient-to-tr from-fuchsia-400/30 via-blue-400/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -right-32 w-[200px] h-[200px] bg-gradient-to-tr from-blue-400/20 to-violet-400/20 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to scale, we make app growth simple and effective
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`
                relative group glass-card border-0 transition-transform duration-500 
                hover:-translate-y-3 hover:shadow-brand
                ${visibleIndexes.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-8"}
              `}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              {/* Step Number (floating gradient badge) */}
              <div className="absolute -top-5 -right-5 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-primary text-white font-bold text-lg shadow-glow">
                {step.step}
              </div>

              <CardContent className="p-8 text-center flex flex-col items-center">
                {/* Icon */}
                <div className="
                  mb-6 mx-auto w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center 
                  shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow
                ">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </CardContent>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-10 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
