import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Copy, Check, Tag, Clock, TrendingUp, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import DealCard from "@/components/DealCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { deals } from "@/data/deals";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

const DealPage = () => {
  const { id } = useParams();
  const deal = deals.find((d) => d.id === id);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  if (!deal) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Deal not found</h1>
          <Link to="/categories" className="text-primary mt-4 inline-block hover:underline">Browse deals</Link>
        </div>
      </Layout>
    );
  }

  const isActivateType = deal.code === "ACTIVATE" || deal.code === "DEAL ACTIVATED" || deal.code === "CODE ACTIVATED";
  const related = deals.filter((d) => d.category === deal.category && d.id !== deal.id).slice(0, 4);

  const handleReveal = () => {
    if (isActivateType) {
      window.open(deal.affiliateUrl, "_blank", "noopener,noreferrer");
      toast({ 
        title: "Redirecting...", 
        description: `Taking you directly to ${deal.store} to claim your deal.` 
      });
    } else {
      setRevealed(true);
      navigator.clipboard.writeText(deal.code);
      setCopied(true);
      toast({ 
        title: "Success! Code Copied", 
        description: `Apply ${deal.code} at ${deal.store} checkout.` 
      });
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => {
        window.open(deal.affiliateUrl, "_blank", "noopener,noreferrer");
      }, 600);
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-primary transition-colors">Deals</Link>
          <span>/</span>
          <span className="text-foreground font-bold">{deal.store}</span>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl animate-scale-in">
            <div className="bg-muted/30 p-10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <img src={deal.image} alt={deal.store} className="w-32 h-32 object-contain relative z-10 drop-shadow-sm hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5">
                  {deal.category}
                </Badge>
                {deal.badge && (
                  <Badge className="gradient-primary text-primary-foreground border-none text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 shadow-sm">
                    {deal.badge}
                  </Badge>
                )}
                <Badge variant="outline" className="ml-auto border-emerald-500/30 text-emerald-600 bg-emerald-50 text-xs font-bold px-3 py-1">
                  {deal.discount}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4 leading-tight">
                {deal.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {deal.description}
              </p>

              <div className="flex items-center gap-6 text-xs text-muted-foreground mb-10 pb-8 border-b border-border">
                {deal.expiry && (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> 
                    Expires: <span className="text-foreground font-semibold">{deal.expiry}</span>
                  </span>
                )}
                {deal.successRate && (
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-500" /> 
                    <span className="text-foreground font-semibold">{deal.successRate}%</span> success rate
                  </span>
                )}
              </div>

              <div className="mb-8">
                {revealed ? (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-muted/80 backdrop-blur-sm rounded-xl p-5 border-2 border-primary/20 animate-bounce-in">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Tag className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-mono font-extrabold text-3xl text-foreground tracking-tighter">
                          {deal.code}
                        </span>
                      </div>
                      <button 
                        onClick={handleReveal} 
                        className={clsx(
                          "sm:ml-auto w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2",
                          copied ? "bg-emerald-500 text-white" : "bg-primary text-primary-foreground hover:scale-105 active:scale-95"
                        )}
                      >
                        {copied ? (
                          <><Check className="h-4 w-4" /> Copied!</>
                        ) : (
                          <><Copy className="h-4 w-4" /> Copy Code</>
                        )}
                      </button>
                    </div>
                    <p className="text-center text-xs text-muted-foreground">
                      Copy the code and paste it at checkout on <span className="font-bold text-foreground">{deal.store}</span>.
                    </p>
                  </div>
                ) : (
                  <Button 
                    onClick={handleReveal} 
                    size="lg" 
                    className="w-full h-16 gradient-primary text-primary-foreground font-extrabold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-primary/25 group"
                  >
                    {isActivateType ? (
                      <span className="flex items-center gap-3">
                        Activate Deal <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    ) : (
                      "Show Coupon Code"
                    )}
                  </Button>
                )}
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href={deal.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all underline-offset-4"
                >
                  Visit {deal.store} Official Website <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                </a>
                
                {deal.terms && (
                  <div className="w-full mt-6 bg-muted/40 rounded-xl p-6 border border-border/50">
                    <h3 className="font-heading font-bold text-foreground text-sm mb-3 uppercase tracking-wider">Terms & Conditions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                      {deal.terms}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-heading font-bold text-foreground mb-6">Related Deals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((d) => (
                  <DealCard key={d.id} {...d} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DealPage;
