import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { 
  ArrowRight, 
  CheckCircle2, 
  LayoutDashboard, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock 
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskFlow - Manage Projects with Ease" },
    { name: "description", content: "The ultimate project management tool for modern teams." },
  ];
}

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <span>TaskFlow</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/sign-in">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/sign-up">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-24 md:py-32 px-4 text-center space-y-8 bg-gradient-to-b from-background to-muted/20">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            🚀 Version 2.0 is now live
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
            Manage Projects <br />
            <span className="text-primary">Without the Chaos</span>
          </h1>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto leading-relaxed">
            TaskFlow brings all your tasks, teammates, and tools together in one place. 
            Streamline your workflow and ship faster than ever before.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] justify-center pt-4">
          <Link to="/sign-up">
            <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
              Start for free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
              View Demo
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 relative w-full max-w-5xl mx-auto rounded-2xl border bg-card shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-emerald-500/10" />
          <div className="relative z-10 p-6 md:p-10">
            <div className="flex items-center justify-between pb-6 border-b">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground border shadow-sm">
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard Preview
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "Active Projects", value: "12", tone: "from-indigo-500 to-sky-500" },
                { label: "Tasks Done", value: "248", tone: "from-emerald-500 to-lime-500" },
                { label: "Velocity", value: "+18%", tone: "from-pink-500 to-orange-500" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border bg-background/70 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-xs text-muted-foreground">{card.label}</div>
                  <div className="mt-2 text-2xl font-bold">{card.value}</div>
                  <div className={`mt-3 h-2 w-full rounded-full bg-gradient-to-r ${card.tone}`} />
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="rounded-xl border bg-background/70 p-4 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Weekly Progress</div>
                  <span className="text-xs text-muted-foreground">Last 7 days</span>
                </div>
                <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-tr from-sky-500/20 via-violet-500/20 to-pink-500/20">
                  <div className="h-full w-full rounded-lg border border-dashed border-foreground/10" />
                </div>
              </div>
              <div className="rounded-xl border bg-background/70 p-4 shadow-sm backdrop-blur">
                <div className="text-sm font-semibold">Top Priorities</div>
                <div className="mt-4 space-y-3">
                  {[
                    { label: "Design Review", color: "bg-rose-500" },
                    { label: "API Release", color: "bg-indigo-500" },
                    { label: "Sprint Retro", color: "bg-emerald-500" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-gradient-to-r from-primary/10 to-fuchsia-500/10 px-3 py-2 text-xs text-muted-foreground border">
                  Team focus is up by 12% this week
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to ship projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed for modern software teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title="Lightning Fast"
              description="Built for speed. Load dashboards, tasks, and reports in milliseconds, not seconds."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Team Collaboration"
              description="Real-time updates, comments, and notifications keep everyone on the same page."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-green-500" />}
              title="Enterprise Security"
              description="Bank-grade encryption and advanced permission controls to keep your data safe."
            />
             <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-purple-500" />}
              title="Insightful Analytics"
              description="Track progress with beautiful charts and automated reports."
            />
             <FeatureCard 
              icon={<LayoutDashboard className="h-10 w-10 text-pink-500" />}
              title="Custom Workflows"
              description="Tailor your workspace with custom statuses, labels, and fields."
            />
             <FeatureCard 
              icon={<Clock className="h-10 w-10 text-orange-500" />}
              title="Time Tracking"
              description="Built-in time tracking to help you manage resources and billing."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of teams who use TaskFlow to deliver projects on time.
          </p>
          <div className="pt-4">
            <Link to="/sign-up">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background">
        <div className="container px-4 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
                TH
              </div>
              <span>TaskFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making project management simple and enjoyable for everyone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground">Community</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Legal</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="container px-4 md:px-6 mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TaskFlow ·  <a
            href="https://unipixer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    group inline-flex items-center gap-1
    pb-4 text-sm font-medium
    text-slate-500 transition-all duration-300
    hover:text-slate-900
  "
          >
            <span>Developed by</span>

            <span className="relative font-semibold text-slate-700 group-hover:text-black">
              Abid Azam Khan
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </span>

            <span className="text-slate-400">· CEO of</span>

            <span className="font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700">
              Unipixer
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-block rounded-lg bg-muted/50 p-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default Homepage;
