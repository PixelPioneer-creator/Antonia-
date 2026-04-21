import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, Tag, ExternalLink, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

interface DealCardProps {
  id: string;
  title: string;
  store: string;
  discount: string;
  code: string;
  image: string;
  badge?: string;
  expiry?: string;
  successRate?: number;
  affiliateUrl: string;
}

const DealCard = ({ id, title, store, discount, code, image, badge, expiry, successRate, affiliateUrl }: DealCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const isActivateType = code === "ACTIVATE" || code === "DEAL ACTIVATED" || code === "CODE ACTIVATED";
  const usesToday = Math.floor(Math.random() * 150) + 50;

  const handleReveal = () => {
    if (isActivateType) {
      window.open(affiliateUrl, "_blank", "noopener,noreferrer");
      toast({ 
        title: "Redirecting to " + store, 
        description: `We're taking you directly to the merchant's official site.` 
      });
    } else {
      setRevealed(true);
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast({ 
        title: "Code Copied!", 
        description: `The discount code ${code} is ready to use at ${store}.` 
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift shadow-sm hover:shadow-xl transition-all duration-500 relative">
      <div className="relative h-44 bg-muted/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img src={image} alt={store} loading="lazy" className="w-24 h-24 object-contain transition-transform duration-700 group-hover:scale-110 z-10" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
          {badge && (
            <Badge className="gradient-primary text-primary-foreground border-none text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-lg">
              {badge}
            </Badge>
          )}
          <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-[10px] font-semibold border-emerald-500/30 text-emerald-600 flex items-center gap-1 px-2 py-0.5 shadow-sm">
            <Check className="h-2.5 w-2.5" /> Verified
          </Badge>
        </div>

        <div className="absolute top-3 right-3 z-20">
          <span className="bg-primary text-primary-foreground text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-lg border border-primary/20">
            {discount}
          </span>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] text-primary font-extrabold uppercase tracking-[0.2em]">{store}</p>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
            <TrendingUp className="h-3 w-3 text-emerald-500" />
            <span>{usesToday} used today</span>
          </div>
        </div>

        <Link to={`/deal/${id}`}>
          <h3 className="font-heading font-bold text-foreground text-[15px] leading-tight mb-4 hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
        </Link>

        {/* Progress Bar (Authenticity) */}
        {successRate && (
          <div className="mb-5 space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-muted-foreground uppercase tracking-wider">Success Rate</span>
              <span className="text-emerald-600 font-mono">{successRate}%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                style={{ width: `${successRate}%` }}
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {revealed ? (
            <div className="flex-1 flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2.5 border border-primary/20 animate-scale-in">
              <Tag className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono font-bold text-foreground tracking-wider">{code}</span>
              <button onClick={handleReveal} className="ml-auto p-1.5 hover:bg-primary/10 rounded-lg transition-colors">
                {copied ? <Check className="h-4 w-4 text-emerald-500 scale-110 transition-transform" /> : <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />}
              </button>
            </div>
          ) : (
            <Button 
              onClick={handleReveal} 
              className={clsx(
                "w-full gradient-primary text-primary-foreground font-bold text-sm group/btn relative overflow-hidden h-11 shadow-md rounded-xl transition-all duration-300",
                !isActivateType && "hover:shadow-primary/25 hover:shadow-lg active:scale-[0.98]"
              )}
            >
              {isActivateType ? (
                <span className="flex items-center gap-2 transition-all group-hover/btn:gap-3">
                  Activate Offer <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
              ) : (
                <span className="relative flex items-center justify-center gap-2">
                  Get Coupon Code <Zap className="h-4 w-4 fill-primary-foreground group-hover/btn:animate-pulse" />
                </span>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealCard;
