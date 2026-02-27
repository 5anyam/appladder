import { RefreshCw, Zap, PenTool, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetstartedModalButton } from "@/components/GetstartedModal";

const services = [
  {
    icon: Zap,
    title: "User Acquisition",
    desc:
      "Smarter growth, stronger LTV. Appladder finds your highest value users around the globe with predictive AI, creative testing and seamless scaling. So that you can get the installs that truly convert and retain.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Re-engagement",
    desc:
      "Not all users stay active. Our data-driven engine re-engages dormant, churned and high potential audiences with personalized, event-triggered campaigns improving DAU, retention, and ARPU for your app.",
  },
  {
    icon: PenTool,
    title: "Branding",
    desc:
      "First impressions matter! We elevate your app's identity through custom design, cross-channel creative, influencer and video strategy ensuring users remember, trust, and love your brand.",
  },
  {
    icon: Cpu,
    title: "Programmatic Buying",
    desc:
      "Our real-time DSP uses advanced algorithms for smarter, automated ad buying reaching various exchanges/partners, optimizing spend, guaranteeing fraud-free and high-quality growth.",
  },
];

const whyChoosePoints = [
  "Fast Onboarding: Get campaigns live in under 48 hours",
  "Advanced Protection: Fraud protection & real-time analytics",
  "Creative Studio: Influencer & video inside your dashboard",
  "Global Reach: Various traffic partners via single platform",
  "Expert Support: Friendly team, always there, never bots",
  "Transparent Pricing: No hidden fees, clear costs, flexible budgets"
];


const AboutUsPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 mt-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase tracking-widest text-xs font-semibold text-primary mb-4 block">
              About Appladder
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              We <span className="gradient-text py-4">Elevate App Growth</span>
              <br /> with Data, Creativity & Tech
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Appladder turns every mobile app's growth goal into reality, blending smart data, creative science and
              cutting-edge tech. From quality user acquisition to lasting engagement, we help you scale, succeed and build a brand people love.
            </p>
            <GetstartedModalButton />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
              At Appladder, we're passionate about helping app founders and marketers achieve sustainable growth.
              We combine deep data insights with creative strategies to deliver real users who stick around, driving value beyond just installs.
              Honest results, clear communication and long-term partnerships are at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive mobile marketing solutions designed to accelerate your app's growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-0 overflow-hidden animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300 flex-shrink-0">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="gradient-text">Appladder?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Here's what makes us the trusted choice for app growth
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChoosePoints.map((point, index) => {
          const [title, description] = point.split(': ');
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};

export default AboutUsPage;
