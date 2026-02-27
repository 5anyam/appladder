import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const companies = [
  {
    image: "/companies/mcd.png",
    name: "McDonald's"
  },
  {
    image: "/companies/noon.png",
    name: "Noon"
  },
  {
    image: "/companies/monese.png",
    name: "Monese"
  },
  {
    image: "/companies/labeb.png",
    name: "Labeb"
  },
  {
    image: "/companies/bright.png",
    name: "Bright"
  },
  {
    image: "/companies/octafx.png",
    name: "OctaFX"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Growth Manager",
    company: "Betway",
    rating: 5,
    text: "Appladder helped us scale from 10K to 1M+ downloads in just 6 months. Their AI optimization is incredible our CPI dropped 40% while quality improved dramatically.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    title: "Head of Marketing",
    company: "Amazon",
    rating: 5,
    text: "The fraud protection alone saved us hundreds of thousands. Every install we get through Appladder converts to real, engaged users. Game-changing platform.",
    avatar: "MR"
  },
  {
    name: "Emily Foster",
    title: "Performance Marketing Manager",
    company: "Crypto.com",
    rating: 5,
    text: "Best UA platform we've used. The reports are incredibly detailed, and our dedicated account manager feels like part of our team. Highly recommended!",
    avatar: "EF"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Customer <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how leading app publishers achieve exceptional growth with Appladder
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-0 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-xl text-center text-muted-foreground mb-8">Trusted by leading companies worldwide</p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.image}
                alt={company.name}
                className="h-20 object-contain" // Height adjust kar sakte ho
              />
            ))}
          </div>
        </div>
        </div>
    </section>
  );
};

export default TestimonialsSection;
