import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Shield, Heart, Target, Users } from "lucide-react";

const About = () => (
  <Layout>
    <div className="container py-10 max-w-2xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">About</span>
      </div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-6">About Antonia</h1>

      <div className="space-y-8">
        <div className="animate-fade-in">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-2">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Antonia was born from a simple passion: making fashion affordable for everyone. Founded in 2024, we've grown into India's trusted fashion coupon platform used by over 75,000 savvy shoppers who save on clothing, footwear, accessories, and more from top brands like Myntra, AJIO, H&M, and Amazon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <Target className="h-6 w-6" />, title: "Our Mission", desc: "To make fashion savings effortless by curating the best, verified deals from 50+ brands." },
            { icon: <Heart className="h-6 w-6" />, title: "Our Values", desc: "Transparency, accuracy, and putting our users first. Every code is verified before listing." },
            { icon: <Shield className="h-6 w-6" />, title: "Trust", desc: "We work directly with fashion brands and verify every coupon to ensure you always save." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3 text-primary-foreground">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 border border-border animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-heading font-semibold text-foreground">Affiliate Disclosure</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Antonia earns a commission when you shop through our links at no extra cost to you. This helps us keep the platform free. 
            <Link to="/affiliate-disclosure" className="text-primary hover:underline ml-1">Read our full affiliate disclosure →</Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
