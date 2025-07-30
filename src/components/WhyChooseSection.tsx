import { Shield, Zap, Globe, Headphones, TrendingUp, Target } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms continuously optimize your campaigns for maximum performance and ROI."
  },
  {
    icon: Shield,
    title: "Fraud-Free Results",
    description: "Advanced fraud detection and prevention systems ensure every install is genuine and valuable."
  },
  {
    icon: Globe,
    title: "600+ Media Sources",
    description: "Access to the world's largest network of premium publishers and advertising platforms."
  },
  {
    icon: Headphones,
    title: "End-to-End Service",
    description: "Dedicated account managers and 24/7 support ensure your campaigns always perform at their best."
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Results",
    description: "Track record of scaling apps from thousands to millions of users with sustainable growth strategies."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Advanced audience segmentation and lookalike modeling to reach your ideal users efficiently."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              {/* Icon */}
              <div className="mb-6 w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:animate-float transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

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

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by <span className="gradient-text">5000+</span> App Publishers
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              From indie developers to Fortune 500 companies, our platform powers growth for apps across every category and vertical.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                Gaming
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                E-commerce
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                Finance
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                Social
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                Education
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;