import { Shield, Zap, Cpu, Smartphone, TrendingUp, Target } from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms continuously optimize your campaigns for maximum performance and ROI."
  },
  {
    icon: Shield,
    title: "Fraud-Free Results",
    description: "Advanced fraud detection and prevention systems ensure every install is genuine and valuable."
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Excellence",
    description: "Seamlessly run campaigns across iOS, Android, and web platforms with unified tracking and optimization."
  },
  {
    icon: TrendingUp,
    title: "Global Reach with Local Insights",
    description: "Run campaigns in over 104 countries with support for localization, cultural adaptation, and localized optimization strategies."
  },
  {
    icon: Zap,
    title: "Proven Growth Results",
    description: "Track record of scaling apps from thousands to millions of users with sustainable growth strategies."
  },
  {
    icon: Target,
    title: "Advanced Targeting",
    description: "Advanced audience segmentation and lookalike modeling to reach your ideal users efficiently."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Appladder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The platform that combines cutting-edge technology with proven strategies to deliver exceptional results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default WhyChooseSection;