import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import DealCard from "@/components/DealCard";
import { deals, stores } from "@/data/deals";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorePage = () => {
  const { slug } = useParams();
  const store = stores.find((s) => s.name.toLowerCase().replace(/[^a-z0-9]/g, "") === slug);
  const storeDeals = deals.filter((d) => d.store.toLowerCase().replace(/[^a-z0-9]/g, "") === slug);

  if (!store) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Store not found</h1>
          <Link to="/stores" className="text-primary mt-4 inline-block hover:underline">Browse all stores</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/50 border-b border-border">
        <div className="container py-10 flex items-center gap-6 animate-fade-in">
          <img src={store.logo} alt={store.name} className="w-20 h-20 object-contain bg-card rounded-xl p-3 border border-border" />
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">{store.name}</h1>
            <p className="text-muted-foreground mt-1">{store.deals} active coupons & deals</p>
            <a href={store.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="mt-2 gap-1">
                Visit Store <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="container py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/stores" className="hover:text-primary">Stores</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{store.name}</span>
        </div>
        {storeDeals.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No deals available for this store right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {storeDeals.map((deal, i) => (
              <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <DealCard {...deal} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StorePage;
