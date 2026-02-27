// src/pages/Login.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, TrendingUp, Layers } from "lucide-react";

// ── Stat data outside JSX ─────────────────────────────────────────
const advertiserStats = [
  { v: "1.5M+", l: "Apps" },
  { v: "21+",   l: "Markets" },
  { v: "2B+",   l: "Daily Users" },
];

const publisherStats = [
  { v: "600+", l: "Campaigns" },
  { v: "21+",  l: "Markets" },
  { v: "Fast", l: "Payouts" },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [portalType, setPortalType] = useState<"advertiser" | "publisher">("advertiser");
  const [form, setForm] = useState({ email: "", password: "" });

  const isAdvertiser = portalType === "advertiser";
  const stats = isAdvertiser ? advertiserStats : publisherStats;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { portalType, ...form });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ── Left Brand Panel ── */}
      <div
        className={`hidden lg:flex lg:w-5/12 flex-col justify-between p-12 relative overflow-hidden transition-all duration-500
          ${isAdvertiser
            ? "bg-gradient-to-br from-blue-600 to-primary"
            : "bg-gradient-to-br from-violet-600 to-blue-500"
          }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <NavLink to="/">
          <img src="/AppladderLogo.png" alt="AppLadder" className="h-10 brightness-0 invert" />
        </NavLink>

        <div className="relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            {isAdvertiser
              ? <TrendingUp className="w-7 h-7 text-white" />
              : <Layers className="w-7 h-7 text-white" />
            }
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            {isAdvertiser
              ? <>"Welcome Back,<br />Advertiser"</>
              : <>"Welcome Back,<br />Publisher"</>
            }
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-xs">
            {isAdvertiser
              ? "Access your dashboard to manage campaigns, track installs, and optimize performance across 600+ media sources."
              : "Access your publisher dashboard to manage inventory, track earnings, and maximize revenue."
            }
          </p>

          {/* Stats — fixed: array defined outside JSX */}
          <div className="flex gap-8 mt-10">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-2xl">{s.v}</p>
                <p className="text-white/60 text-sm">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-xs relative z-10">
          © {new Date().getFullYear()} AppLadder. All rights reserved.
        </p>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <NavLink to="/" className="lg:hidden flex justify-center mb-8">
            <img src="/AppladderLogo.png" alt="AppLadder" className="h-9" />
          </NavLink>

          {/* Portal Toggle */}
          <div className="bg-slate-100 p-1 rounded-2xl flex mb-8">
            <button
              type="button"
              onClick={() => setPortalType("advertiser")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${isAdvertiser
                  ? "bg-white text-primary shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              🎯 Advertiser
            </button>
            <button
              type="button"
              onClick={() => setPortalType("publisher")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${!isAdvertiser
                  ? "bg-white text-violet-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              🌐 Publisher
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3
              ${isAdvertiser ? "text-primary bg-primary/10" : "text-violet-600 bg-violet-50"}`}>
              {isAdvertiser ? "Advertiser Portal" : "Publisher Portal"}
            </span>
            <h2 className="text-3xl font-bold text-slate-800">Sign in to your account</h2>
            <p className="text-slate-500 mt-1.5 text-sm">
              {isAdvertiser
                ? "Manage your app campaigns and track growth"
                : "Monitor your traffic, earnings and campaigns"
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all
                    ${isAdvertiser
                      ? "focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      : "focus:ring-2 focus:ring-violet-400/30 focus:border-violet-500"
                    }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <NavLink
                  to="/forgot-password"
                  className={`text-xs font-medium hover:underline
                    ${isAdvertiser ? "text-primary" : "text-violet-600"}`}
                >
                  Forgot password?
                </NavLink>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all
                    ${isAdvertiser
                      ? "focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      : "focus:ring-2 focus:ring-violet-400/30 focus:border-violet-500"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-2
                ${isAdvertiser
                  ? "bg-gradient-primary shadow-glow hover:opacity-90 hover:shadow-brand"
                  : "bg-gradient-to-r from-violet-600 to-blue-500 shadow-lg hover:opacity-90"
                }`}
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">don't have an account?</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Sign Up CTA */}
          <NavLink
            to={isAdvertiser ? "/advertiser-signup" : "/affiliate-signup"}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200
              ${isAdvertiser
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-violet-500 text-violet-600 hover:bg-violet-600 hover:text-white"
              }`}
          >
            Create {isAdvertiser ? "Advertiser" : "Publisher"} Account →
          </NavLink>

          <div className="text-center mt-5">
            <NavLink to="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              ← Back to AppLadder.com
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
