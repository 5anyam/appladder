import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
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
            <div className="text-3xl font-bold text-white">A</div>
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
          Advanced User Acquisition • Performance Marketing • Global Reach
        </p>

        {/* Key Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-white/80">
            <Globe className="w-5 h-5 text-blue-400" />
            <span>600+ Media Sources</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Zap className="w-5 h-5 text-purple-400" />
            <span>AI-Powered Optimization</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <TrendingUp className="w-5 h-5 text-violet-400" />
            <span>Fraud-Free Results</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="gradient-outline" size="xl" className="group">
            <Play className="w-5 h-5" />
            Book a Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-white/60 mb-6">Trusted by leading app publishers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;