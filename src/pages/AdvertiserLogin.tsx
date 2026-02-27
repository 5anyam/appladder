// src/pages/AdvertiserSignup.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  User, Phone, Mail, Briefcase, Building2, Globe,
  Linkedin, MessageSquare, ChevronDown, ArrowRight,
  TrendingUp, Check
} from "lucide-react";

// Same COUNTRIES & COUNTRY_CODES arrays (copy from above or move to shared constants file)
const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh",
  "Belgium","Brazil","Canada","Chile","China","Colombia","Croatia","Czech Republic",
  "Denmark","Egypt","Finland","France","Germany","Ghana","Greece","Hong Kong",
  "Hungary","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan",
  "Jordan","Kenya","Kuwait","Malaysia","Mexico","Morocco","Netherlands","New Zealand",
  "Nigeria","Norway","Pakistan","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sri Lanka",
  "Sweden","Switzerland","Taiwan","Thailand","Turkey","UAE","Ukraine","United Kingdom",
  "United States","Vietnam","Other"
];

const ADVERTISER_COMPANY_TYPES = ["Agency","Brand","Ad-Network"];

const COUNTRY_CODES = [
  { code: "+1",   label: "🇺🇸 +1 (US/CA)" },
  { code: "+44",  label: "🇬🇧 +44 (UK)" },
  { code: "+91",  label: "🇮🇳 +91 (IN)" },
  { code: "+61",  label: "🇦🇺 +61 (AU)" },
  { code: "+49",  label: "🇩🇪 +49 (DE)" },
  { code: "+33",  label: "🇫🇷 +33 (FR)" },
  { code: "+55",  label: "🇧🇷 +55 (BR)" },
  { code: "+52",  label: "🇲🇽 +52 (MX)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+966", label: "🇸🇦 +966 (SA)" },
  { code: "+65",  label: "🇸🇬 +65 (SG)" },
  { code: "+60",  label: "🇲🇾 +60 (MY)" },
  { code: "+62",  label: "🇮🇩 +62 (ID)" },
  { code: "+63",  label: "🇵🇭 +63 (PH)" },
  { code: "+66",  label: "🇹🇭 +66 (TH)" },
  { code: "+84",  label: "🇻🇳 +84 (VN)" },
  { code: "+7",   label: "🇷🇺 +7 (RU)" },
  { code: "+39",  label: "🇮🇹 +39 (IT)" },
  { code: "+81",  label: "🇯🇵 +81 (JP)" },
  { code: "+82",  label: "🇰🇷 +82 (KR)" },
  { code: "+86",  label: "🇨🇳 +86 (CN)" },
  { code: "+92",  label: "🇵🇰 +92 (PK)" },
  { code: "+234", label: "🇳🇬 +234 (NG)" },
  { code: "+20",  label: "🇪🇬 +20 (EG)" },
];

const IM_OPTIONS = ["Teams","WhatsApp","Telegram","Email","GTalk"];

// ── Reusable components (same as AffiliateSignup) ─────────────────
const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
    {children}{required && <span className="text-red-500 ml-0.5">*</span>}
  </label>
);

const InputField = ({
  icon: Icon, placeholder, type = "text", value, onChange, required,
}: {
  icon: React.ElementType; placeholder: string; type?: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) => (
  <div className="relative">
    <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
    <input
      type={type} required={required} placeholder={placeholder}
      value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
    />
  </div>
);

const SearchableSelect = ({
  icon: Icon, value, onChange, options, placeholder, required,
}: {
  icon: React.ElementType; value: string; onChange: (v: string) => void;
  options: string[]; placeholder: string; required?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative">
      <div
        className="flex items-center w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-sm cursor-pointer hover:border-primary/40 transition-all"
        onClick={() => setOpen(!open)}
      >
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <span className={value ? "text-slate-800" : "text-slate-400"}>{value || placeholder}</span>
      </div>
      {open && (
        <div className="absolute top-full mt-1 left-0 right-0 z-50 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
          <div className="p-2 border-b border-slate-100">
            <input autoFocus type="text" placeholder="Search..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>
          <ul className="max-h-48 overflow-y-auto">
            {filtered.length === 0
              ? <li className="px-4 py-2 text-sm text-slate-400">No results</li>
              : filtered.map((o) => (
                <li key={o}
                  onClick={() => { onChange(o); setOpen(false); setSearch(""); }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-primary/5 flex items-center justify-between
                    ${value === o ? "text-primary font-semibold bg-primary/5" : "text-slate-700"}`}
                >
                  {o}{value === o && <Check className="w-3.5 h-3.5 text-primary" />}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ── Main Form ─────────────────────────────────────────────────────
const AdvertiserLogin = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", countryCode: "+1", phone: "",
    email: "", designation: "", companyName: "", companyType: "",
    website: "", country: "", linkedin: "",
    im: "", message: "",
  });

  const set = (key: string) => (val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Advertiser Signup:", form);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Brand Panel */}
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-blue-600 to-primary flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <NavLink to="/">
          <img src="/AppladderLogo.png" alt="AppLadder" className="h-10 brightness-0 invert" />
        </NavLink>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            Grow Your App <br />With Precision
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-xs">
            Access a premium network of publishers, reach 2B+ daily active users, and scale campaigns across 21+ markets.
          </p>
          <div className="mt-10 space-y-3">
            {["CPI, CPA, CPL & more models","Advanced fraud protection","Real-time analytics dashboard","Dedicated account manager"].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-white/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/40 text-xs relative z-10">© {new Date().getFullYear()} AppLadder</p>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-10">

          <NavLink to="/" className="lg:hidden flex justify-center mb-6">
            <img src="/AppladderLogo.png" alt="AppLadder" className="h-9" />
          </NavLink>

          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              Advertiser Sign-Up
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Create your advertiser account</h2>
            <p className="text-slate-500 text-sm mt-1">All fields marked <span className="text-red-500">*</span> are required</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label required>First Name</Label>
                <InputField icon={User} placeholder="John" value={form.firstName} onChange={set("firstName")} required />
              </div>
              <div>
                <Label required>Last Name</Label>
                <InputField icon={User} placeholder="Doe" value={form.lastName} onChange={set("lastName")} required />
              </div>
            </div>

            {/* Phone */}
            <div>
              <Label required>Phone Number</Label>
              <div className="flex gap-2">
                <div className="relative w-44 shrink-0">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={form.countryCode}
                    onChange={(e) => set("countryCode")(e.target.value)}
                    className="w-full pl-3 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <InputField icon={Phone} placeholder="Phone number" value={form.phone} onChange={set("phone")} type="tel" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label required>Email</Label>
              <InputField icon={Mail} placeholder="you@company.com" type="email" value={form.email} onChange={set("email")} required />
            </div>

            {/* Designation */}
            <div>
              <Label required>Designation</Label>
              <InputField icon={Briefcase} placeholder="e.g. CMO, Growth Manager" value={form.designation} onChange={set("designation")} required />
            </div>

            {/* Company Name + Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label required>Company Name</Label>
                <InputField icon={Building2} placeholder="Your company" value={form.companyName} onChange={set("companyName")} required />
              </div>
              <div>
                <Label required>Company Type</Label>
                <SearchableSelect
                  icon={Building2}
                  placeholder="Select type"
                  value={form.companyType}
                  onChange={set("companyType")}
                  options={ADVERTISER_COMPANY_TYPES}
                  required
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <Label required>Website</Label>
              <InputField icon={Globe} placeholder="https://yoursite.com" type="url" value={form.website} onChange={set("website")} required />
            </div>

            {/* Country */}
            <div>
              <Label required>Country</Label>
              <SearchableSelect
                icon={Globe}
                placeholder="Search & select country"
                value={form.country}
                onChange={set("country")}
                options={COUNTRIES}
                required
              />
            </div>

            {/* LinkedIn */}
            <div>
              <Label required>LinkedIn Profile</Label>
              <InputField icon={Linkedin} placeholder="https://linkedin.com/in/yourprofile" type="url" value={form.linkedin} onChange={set("linkedin")} required />
            </div>

            {/* IM — Advertiser has GTalk too */}
            <div>
              <Label required>Instant Messaging (IM)</Label>
              <div className="flex flex-wrap gap-2">
                {IM_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set("im")(opt)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all
                      ${form.im === opt
                        ? "bg-gradient-primary text-white border-transparent shadow-sm"
                        : "bg-white text-slate-600 border-slate-200 hover:border-primary/40"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label>Message / Comments</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <textarea
                  rows={4}
                  placeholder="Tell us about your app and goals..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold py-3 rounded-xl shadow-glow hover:opacity-90 hover:shadow-brand transition-all duration-200"
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <NavLink to="/advertiser-login" className="text-primary font-semibold hover:underline">
                Advertiser Login →
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserLogin;
