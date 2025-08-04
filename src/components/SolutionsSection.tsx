import { Users, Globe, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Users,
    title: "User Acquisition",
    description: "Accelerate your app growth by acquiring quality users through data-driven campaigns and global reach.",
    features: [
      "Lookalike & Interest Targeting",
      "Global & Regional Traffic",
      "AI-Driven User Segmentation",
      "Scalable Campaign Management"
    ]
  },
  {
    icon: BarChart,
    title: "Retargeting & Re-engagement",
    description: "Boost retention and revive dormant users with event-triggered, personalized campaigns across all channels.",
    features: [
      "Smart Segmentation",
      "Event-Based Triggers",
      "Omni-channel Creative Delivery",
      "Automated Churn Recovery"
    ]
  },
  {
    icon: Globe, // Change 'Lightbulb' to your preferred icon
    title: "Branding",
    description: "Build a memorable and trustworthy app identity using impactful creatives and unified brand storytelling.",
    features: [
      "Custom Video & Banner Assets",
      "Influencer Collaboration",
      "Consistent Cross-Channel Presence",
      "Brand Safety Placement"
    ]
  }
];


const SolutionsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobile marketing solutions designed to accelerate your app's growth
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm border-0 overflow-hidden animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {solution.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;