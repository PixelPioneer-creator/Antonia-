import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { stores } from "@/data/deals";
import { ExternalLink } from "lucide-react";

const Stores = () => (
  <Layout>
    <div className="container py-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Stores</span>
      </div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-2">All Fashion Stores</h1>
      <p className="text-muted-foreground mb-8">Browse coupons from your favorite fashion brands</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {stores.map((store, i) => (
          <Link
            key={store.name}
            to={`/store/${store.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
            className="bg-card border border-border rounded-xl p-6 text-center hover-lift animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img src={store.logo} alt={store.name} loading="lazy" className="w-16 h-16 mx-auto object-contain mb-3 transition-transform duration-300 hover:scale-110" />
            <h3 className="font-heading font-semibold text-foreground text-sm">{store.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{store.deals} deals</p>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default Stores;
