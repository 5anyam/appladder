import {
  ShoppingBag, Tv, Plane, Home, Heart, Server,
  DollarSign, Shield, Wrench, Users, Gift,
  Gamepad2, ClipboardList, UserCheck, Zap, Wifi,
  Mail, Image, Bell, Smartphone, FileText,
  Share2, Search, TrendingUp, BarChart3,
  Tag, Repeat, MousePointer, Eye, Play, Monitor
} from "lucide-react";

// ── Verticals ─────────────────────────────────────────────────────
const currentVerticals = [
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Tv,          label: "Entertainment" },
  { icon: Plane,       label: "Travel" },
  { icon: Home,        label: "Home & Garden" },
  { icon: Heart,       label: "Health & Beauty" },
  { icon: Server,      label: "Hosting & SaaS" },
];

const upcomingVerticals = [
  { icon: DollarSign,    label: "Finance" },
  { icon: Shield,        label: "Insurance (Auto)" },
  { icon: Wrench,        label: "Home Improvement" },
  { icon: Users,         label: "Dating" },
  { icon: Gift,          label: "Sweepstakes" },
  { icon: Gamepad2,      label: "iGaming" },
  { icon: ClipboardList, label: "Survey & Sampling" },
  { icon: UserCheck,     label: "Registrations" },
  { icon: Zap,           label: "Utility" },
  { icon: Wifi,          label: "VPN / Hosting (Subscription)" },
];

// ── Inventory Channels ────────────────────────────────────────────
const inventoryChannels = [
  { icon: Mail,        label: "Email" },
  { icon: Image,       label: "Display / Banner" },
  { icon: Bell,        label: "Push" },
  { icon: Smartphone,  label: "In-App" },
  { icon: FileText,    label: "Native" },
  { icon: Share2,      label: "Social Media" },
  { icon: TrendingUp,      label: "Affiliate" },
  { icon: Search,      label: "Google Search" },
];

// ── Pricing Models ─────────────────────────────────────────────────
const pricingModels = [
  { icon: Smartphone,   label: "CPI",  desc: "Cost Per Install" },
  { icon: TrendingUp,   label: "CPA",  desc: "Cost Per Action" },
  { icon: FileText,     label: "CPL",  desc: "Cost Per Lead" },
  { icon: Tag,          label: "CPS",  desc: "Cost Per Sale" },
  { icon: Repeat,       label: "CPR",  desc: "Cost Per Registration" },
  { icon: MousePointer, label: "CPC",  desc: "Cost Per Click" },
  { icon: Play,         label: "CPV",  desc: "Cost Per View" },
  { icon: Monitor,      label: "CPM",  desc: "Cost Per Mille" },
];

// ── Countries by Tier ─────────────────────────────────────────────
const tiers = [
  {
    label: "Tier 1", sublabel: "Premium Markets",
    color: "from-amber-500 to-yellow-400",
    badgeBg: "bg-amber-50 border-amber-200", badgeText: "text-amber-700", dotColor: "bg-amber-400",
    countries: [
      { flag: "🇺🇸", name: "United States", tag: "US" },
      { flag: "🇨🇦", name: "Canada",        tag: "CA" },
      { flag: "🇬🇧", name: "United Kingdom",tag: "UK" },
      { flag: "🇦🇺", name: "Australia",     tag: "AU" },
      { flag: "🇩🇪", name: "Germany",       tag: "DE" },
      { flag: "🇫🇷", name: "France",        tag: "FR" },
      { flag: "🇮🇹", name: "Italy",         tag: "IT" },
    ],
  },
  {
    label: "Tier 2", sublabel: "High Growth",
    color: "from-blue-500 to-cyan-400",
    badgeBg: "bg-blue-50 border-blue-200", badgeText: "text-blue-700", dotColor: "bg-blue-400",
    countries: [
      { flag: "🇪🇺", name: "Europe (Rest)", tag: "EU"   },
      { flag: "🇧🇷", name: "Brazil",        tag: "BR"   },
      { flag: "🇲🇽", name: "Mexico",        tag: "MX"   },
      { flag: "🇷🇺", name: "Russia",        tag: "RU"   },
      { flag: "🇦🇪", name: "UAE",           tag: "AE"   },
      { flag: "🇸🇦", name: "Saudi Arabia",  tag: "SA"   },
      { flag: "🌍",  name: "MENA Region",   tag: "MENA" },
    ],
  },
  {
    label: "Tier 3", sublabel: "Emerging Markets",
    color: "from-violet-500 to-purple-400",
    badgeBg: "bg-violet-50 border-violet-200", badgeText: "text-violet-700", dotColor: "bg-violet-400",
    countries: [
      { flag: "🌏", name: "APAC Region",  tag: "APAC" },
      { flag: "🇮🇳", name: "India",        tag: "IN"   },
      { flag: "🇵🇭", name: "Philippines",  tag: "PH"   },
      { flag: "🇹🇭", name: "Thailand",     tag: "TH"   },
      { flag: "🇲🇾", name: "Malaysia",     tag: "MY"   },
      { flag: "🇮🇩", name: "Indonesia",    tag: "ID"   },
      { flag: "🇻🇳", name: "Vietnam",      tag: "VN"   },
    ],
  },
];

// ── Reusable Chip (icon + label, unified style) ───────────────────
const Chip = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border bg-white border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-gradient-primary">
      <Icon className="w-4 h-4 text-white" />
    </div>
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </div>
);

// ── Pricing Model Card ────────────────────────────────────────────
const PricingCard = ({
  icon: Icon,
  label,
  desc,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
}) => (
  <div className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border bg-white border-slate-200 shadow-sm text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40 group">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-primary group-hover:animate-pulse-glow transition-all duration-300">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="text-lg font-bold gradient-text">{label}</span>
    <span className="text-xs text-slate-500 leading-tight">{desc}</span>
  </div>
);

// ── Country Row ───────────────────────────────────────────────────
const CountryRow = ({
  flag, name, tag, dotColor,
}: {
  flag: string; name: string; tag: string; dotColor: string;
}) => (
  <div className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors">
    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
    <span className="text-lg leading-none">{flag}</span>
    <span className="text-sm font-medium text-slate-700 flex-1">{name}</span>
    <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
      {tag}
    </span>
  </div>
);

// ── Section Heading (reusable) ────────────────────────────────────
const SectionHeading = ({
  plain,
  gradient,
  sub,
}: {
  plain: string;
  gradient: string;
  sub: string;
}) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      {plain} <span className="gradient-text">{gradient}</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{sub}</p>
  </div>
);

// ── Main Section ──────────────────────────────────────────────────
const VerticalsAndMarketsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 space-y-24">

        {/* ════════ APP VERTICALS ════════ */}
        <div>
          <SectionHeading
            plain="Top"
            gradient="Verticals"
            sub="We drive growth across every major app category"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 px-1">
            ✦ Active Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {currentVerticals.map((v, i) => (
              <Chip key={i} icon={v.icon} label={v.label} />
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 px-1">
            ✦ Expanding Into
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {upcomingVerticals.map((v, i) => (
              <Chip key={i} icon={v.icon} label={v.label} />
            ))}
          </div>
        </div>

        {/* ════════ INVENTORY CHANNELS ════════ */}
        <div>
          <SectionHeading
            plain="Inventory"
            gradient="Channels"
            sub="Diversified, quality-focused traffic inventory for high-intent users"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {inventoryChannels.map((c, i) => (
              <Chip key={i} icon={c.icon} label={c.label} />
            ))}
          </div>
        </div>

        {/* ════════ PRICING & REVENUE MODELS ════════ */}
        <div>
          <SectionHeading
            plain="Pricing &"
            gradient="Revenue Models"
            sub="Performance-based pricing across all major acquisition models"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {pricingModels.map((p, i) => (
              <PricingCard key={i} icon={p.icon} label={p.label} desc={p.desc} />
            ))}
          </div>
        </div>

        {/* ════════ TOP PERFORMING COUNTRIES ════════ */}
        <div>
          <SectionHeading
            plain="Top Performing"
            gradient="Countries"
            sub="Targeted reach across Tier 1, Tier 2 & emerging markets worldwide"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${tier.color} px-5 py-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-none">{tier.label}</h3>
                      <p className="text-white/80 text-xs mt-0.5 font-medium">{tier.sublabel}</p>
                    </div>
                    <span className="text-white/20 text-4xl font-black select-none">
                      {tier.label.split(" ")[1]}
                    </span>
                  </div>
                </div>
                <div className="p-3 divide-y divide-slate-50">
                  {tier.countries.map((c, i) => (
                    <CountryRow key={i} flag={c.flag} name={c.name} tag={c.tag} dotColor={tier.dotColor} />
                  ))}
                </div>
                <div className={`mx-3 mb-3 px-3 py-2 rounded-lg border ${tier.badgeBg} flex items-center justify-between`}>
                  <span className={`text-xs font-semibold ${tier.badgeText}`}>
                    {tier.countries.length} Markets
                  </span>
                  <span className={`text-xs ${tier.badgeText} opacity-70`}>
                    {tier.label === "Tier 1" ? "Highest ROI" : tier.label === "Tier 2" ? "Scaling Fast" : "High Volume"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VerticalsAndMarketsSection;


