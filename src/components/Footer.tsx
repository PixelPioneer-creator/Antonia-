import { Link } from "react-router-dom";
import { Mail, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Subscribed!", description: "You'll receive the best fashion deals in your inbox." });
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">Antonia</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Your ultimate destination for the best fashion coupons, promo codes, and deals from top Indian & global brands.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Top Deals", to: "/top-deals" },
                { label: "Categories", to: "/categories" },
                { label: "Blog", to: "/blog" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200 inline-block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
                { label: "Disclaimer", to: "/disclaimer" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200 inline-block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-70 mb-4">Get the hottest fashion deals delivered to your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md text-sm bg-primary-foreground/10 border border-primary-foreground/20 outline-none placeholder:text-primary-foreground/50 text-primary-foreground"
                required
              />
              <Button type="submit" size="icon" className="gradient-primary shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Antonia. All rights reserved. | Fashion deals you can trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
