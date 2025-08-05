import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-violet-900/80" />
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-violet-600/20 animate-gradient-shift"></div>
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-transparent via-primary/10 to-transparent rounded-full animate-pulse opacity-50"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-transparent via-accent/10 to-transparent rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Logo Icon */}
        <div className="mb-8 animate-bounce-in">
          <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand animate-pulse-glow hover-lift pulse-border">
          <img className="h-full rounded-xl w-full" src="./2.jpg" alt="Appladder Logo"/>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Accelerate Your App Growth
          <br />
          <span className="gradient-text animate-shimmer">with Appladder</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          User Acquisition • Retargeting • Global Reach
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col mt-6 sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pb-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
  <p className="text-white/60 mb-6">Trusted by leading app publishers worldwide</p>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {/* Each logo: grayscale, colored on hover */}
    <img
      src="/amazon.png"
      alt="Amazon"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Ecommerce - Amazon"
    />
    <img
      src="/888.png"
      alt="888"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Betting - 888"
    />
    <img
      src="/spotify.png"
      alt="Spotify"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Entertainment - Spotify"
    />
    <img
      src="/swiggy.png"
      alt="Swiggy"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Delivery - Swiggy"
    />
  </div>
</div>

      </div>
    </section>
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
    {[
      { number: "2.5M+", label: "Apps Globally" },
      { number: "104+", label: "Countries" },
      { number: "100B+", label: "Impressions/Day" },
      { number: "100+", label: "Global Brands" },
    ].map((stat, index) => (
      <div
        key={stat.label}
        className="group bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 hover:shadow-brand hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
          {stat.number}
        </div>
        <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium leading-tight">
          {stat.label}
        </div>
        {/* Subtle hover effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
      </div>
    ))}
  </div>
</div>


  </>
  );
};

export default HeroSection;