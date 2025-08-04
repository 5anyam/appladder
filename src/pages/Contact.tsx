import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "447 Broadway 2ND FL, New York, NY 10013",
    href: null
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 234 567 890",
    href: "tel:+1234567890"
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@appladder.us",
    href: "mailto:support@appladder.us"
  }
];

const ContactUsPage = () => {
  // Simple form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend or form provider
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase tracking-widest text-xs font-semibold text-primary">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Contact <span className="gradient-text">Appladder</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have any questions or want to start growing your app with us? 
              Fill the form and our team will reach out quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.label}
                  className="group hover:shadow-brand transition-all duration-300 bg-card/80 backdrop-blur-sm border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <address className="not-italic text-muted-foreground">
                            {info.value}
                          </address>
                        )}
                      </div>
                    </div>
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-brand transition-all duration-500 bg-card/80 backdrop-blur-sm border-0 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {submitted ? (
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Thank you!</h3>
                        <p className="text-muted-foreground mb-6">Your message has been sent. We will get back to you soon.</p>
                        <Button
                          variant="outline"
                          className="btn-secondary"
                          onClick={() => {
                            setSubmitted(false);
                            setForm({ name: "", email: "", subject: "", message: "" });
                          }}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            className="border border-border rounded-lg p-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email*"
                            className="border border-border rounded-lg p-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject*"
                          className="w-full border border-border rounded-lg p-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          rows={6}
                          className="w-full border border-border rounded-lg p-3 text-foreground bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                        <Button
                          type="submit"
                          className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
                          size="lg"
                        >
                          Send Message <Send size={20} />
                        </Button>
                      </div>
                    )}
                  </form>
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;
