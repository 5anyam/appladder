import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
      <section className="min-h-screen bg-gray-50 pt-24 pb-16 relative">
        {/* Decorative background shapes */}
        <div className="hidden sm:block absolute -top-36 -left-36 w-[280px] h-[280px] bg-[#6a5afc09] rounded-full blur-2xl pointer-events-none" />
        <div className="hidden sm:block absolute -bottom-24 -right-28 w-[220px] h-[220px] bg-[#00f0ff14] rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 flex flex-col lg:flex-row gap-12">
          {/* Left Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contact <span className="gradient-text">Appladder</span></h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Have any questions or want to start growing your app with us?  
              Fill the form and our team will reach out quickly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#00F0FF]" size={24} />
                <address className="not-italic text-gray-700">123 App Street, Tech City, USA</address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#00F0FF]" size={24} />
                <a href="tel:+1234567890" className="text-gray-700 hover:text-[#3a3ad9] transition">+1 234 567 890</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#00F0FF]" size={24} />
                <a href="mailto:support@appladder.us" className="text-gray-700 hover:text-[#3a3ad9] transition">support@appladder.us</a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <form
            className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-[#3a3ad9] mb-4">Thank you!</h3>
                <p className="text-gray-700">Your message has been sent. We will get back to you soon.</p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3a3ad9]"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3a3ad9]"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 mb-6 focus:outline-none focus:ring-2 focus:ring-[#3a3ad9]"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-[#3a3ad9]"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <Button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-[#00F0FF] text-[#242878] font-bold rounded-full shadow hover:bg-[#3a3ad9] hover:text-white transition"
                  size="lg"
                >
                  Send Message <Send size={20} />
                </Button>
              </>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsPage;
