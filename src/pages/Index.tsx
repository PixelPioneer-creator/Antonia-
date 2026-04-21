import { Link } from "react-router-dom";
import { ArrowRight, Search, Copy, DollarSign, Sparkles, Star, TrendingUp, Zap, Shield } from "lucide-react";
import heroIllustration from "@/assets/hero-fashion.png";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import DealCard from "@/components/DealCard";
import { deals, categories, stores, blogPosts } from "@/data/deals";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    { name: "Priya S.", text: "Saved over ₹8000 last month on fashion using Antonia! The Myntra codes always work.", rating: 5 },
    { name: "Rahul M.", text: "Best fashion coupon site I've found. AJIO and Flipkart deals are always fresh.", rating: 5 },
    { name: "Anita K.", text: "I love how easy it is to find and copy codes. Got 70% off on Libas!", rating: 4 },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-40 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-spin-slow" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary animate-wiggle" />
                <span className="text-sm font-medium text-primary">Trusted by 75,000+ Fashion Lovers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Save Big on <span className="gradient-text">Fashion & Style</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Verified coupons from Myntra, AJIO, H&M, Amazon & 50+ fashion brands. Updated daily.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Link to="/categories">
                  <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 animate-pulse-glow">
                    Explore Deals <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/top-deals">
                  <Button size="lg" variant="outline" className="font-semibold px-8 hover:scale-105 transition-transform">
                    Top Deals
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-foreground">{deals.length}</p>
                  <p className="text-xs text-muted-foreground">Active Coupons</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Fashion Brands</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-foreground">90%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img src={heroIllustration} alt="Fashion shopping deals and coupons" width={1024} height={768} className="w-full max-w-lg mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Day & Live Activity */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-bold">1,240 people</span> saved ₹85,000 in the last 24h
              </p>
            </div>
            <div className="flex items-center gap-6 overflow-hidden whitespace-nowrap">
              <div className="flex items-center gap-2 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Live Activity:</span>
                <span className="text-sm text-muted-foreground italic">Someone just saved ₹1,200 at Nike using code <span className="text-primary font-bold">NIKE50</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Zap className="h-3 w-3 fill-emerald-700" /> Flash Deals Available
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-tight">Verified Premium Deals</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Hand-picked, high-success savings from global & luxury brands. Verified by our deal hunters.</p>
            </div>
            <Link to="/categories">
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 group">
                Browse All 200+ Deals <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {deals
              .filter(d => d.badge === "🔥 Hot" || d.badge === "Trending" || d.badge === "Verified" || d.badge === "Best Seller")
              .slice(0, 8)
              .map((deal, i) => (
                <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <DealCard {...deal} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Unique Touch: Trust Banner */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { icon: <Shield className="h-8 w-8 text-primary" />, title: "100% Verified", desc: "Every code is tested manually by our experts" },
              { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: "Highest Savings", desc: "Average user saves ₹1,500 per transaction" },
              { icon: <Zap className="h-8 w-8 text-primary" />, title: "Real-time Updates", desc: "Codes refreshed every 15 minutes" },
              { icon: <Star className="h-8 w-8 text-primary" />, title: "Elite Partnerships", desc: "Direct access to exclusive brand official secrets" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  {feature.icon || <Shield className="h-8 w-8" />}
                </div>
                <h4 className="font-heading font-bold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground px-4">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty & Personal Care Section */}
      <section className="py-20 relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-heading font-bold text-foreground">Sparkle & Save</h2>
              <p className="text-muted-foreground">Premium beauty and personal care deals for your glow-up</p>
            </div>
            <Link to="/categories?cat=Beauty & Personal Care">
              <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground border-primary/20 text-primary transition-all duration-300">
                View All Beauty Deals
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter(d => d.category === "Beauty & Personal Care")
              .slice(0, 4)
              .map((deal, i) => (
                <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <DealCard {...deal} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Food & Dining Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-heading font-bold text-foreground">Flavorful Discounts</h2>
              <p className="text-muted-foreground">Delicious savings on your favorite food and dining spots</p>
            </div>
            <Link to="/categories?cat=Food & Dining">
              <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground border-primary/20 text-primary transition-all duration-300">
                View All Food Deals
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter(d => d.category === "Food & Dining")
              .slice(0, 4)
              .map((deal, i) => (
                <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <DealCard {...deal} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Tech & Gadgets Section */}
      <section className="py-20 relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <div className="absolute top-1/2 left-1/2 w-full h-[500px] bg-blue-100/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-heading font-bold text-foreground">Future-Proof Tech</h2>
              <p className="text-muted-foreground">The latest gadgets and electronics at unbeatable prices</p>
            </div>
            <Link to="/categories?cat=Tech & Gadgets">
              <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground border-primary/20 text-primary transition-all duration-300">
                View All Tech Deals
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter(d => d.category === "Tech & Gadgets")
              .slice(0, 4)
              .map((deal, i) => (
                <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <DealCard {...deal} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                to={`/categories?cat=${encodeURIComponent(cat.name)}`}
                className="bg-card border border-border rounded-xl p-5 text-center hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="text-3xl block mb-2 group-hover:animate-bounce-in">{cat.icon}</span>
                <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.count} deals</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Stores */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">Trending Fashion Stores</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {stores.slice(0, 10).map((store, i) => (
              <Link
                key={store.name}
                to={`/store/${store.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
                className="bg-card border border-border rounded-xl p-5 w-28 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img src={store.logo} alt={store.name} loading="lazy" className="w-12 h-12 mx-auto object-contain mb-2 transition-transform duration-300 hover:scale-110" />
                <p className="text-xs font-medium text-foreground truncate">{store.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: <Search className="h-6 w-6" />, title: "Search", desc: "Find deals for your favorite fashion brands" },
              { icon: <Copy className="h-6 w-6" />, title: "Copy & Go", desc: "Reveal the code and visit the store instantly" },
              { icon: <DollarSign className="h-6 w-6" />, title: "Save Money", desc: "Apply at checkout and enjoy massive savings" },
            ].map((step, i) => (
              <div key={i} className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">What Our Users Say</h2>
          <div className="bg-card border border-border rounded-xl p-8 animate-fade-in" key={testimonialIdx}>
            <div className="flex justify-center mb-3 gap-0.5">
              {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground italic mb-4">"{testimonials[testimonialIdx].text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {testimonials[testimonialIdx].name}</p>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === testimonialIdx ? "bg-primary scale-125" : "bg-border hover:bg-primary/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container max-w-lg text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">Never Miss a Fashion Deal</h2>
          <p className="text-muted-foreground mb-6">Subscribe and get the best fashion coupons delivered to your inbox weekly.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                toast({ title: "Subscribed!", description: "Welcome to Antonia's fashion deals newsletter." });
                setEmail("");
              }
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              required
            />
            <Button type="submit" className="gradient-primary text-primary-foreground font-semibold px-6 hover:scale-105 transition-transform">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
