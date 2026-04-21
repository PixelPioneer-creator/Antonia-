import Layout from "@/components/Layout";
import DealCard from "@/components/DealCard";
import { deals } from "@/data/deals";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopDeals = () => {
  const [sort, setSort] = useState("popular");
  const sorted = [...deals].sort((a, b) => {
    if (sort === "discount") return parseInt(b.discount) - parseInt(a.discount);
    return (b.successRate || 0) - (a.successRate || 0);
  });

  return (
    <Layout>
      <div className="container py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Top Deals</span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Top Fashion Deals</h1>
            <p className="text-muted-foreground mt-1">Curated best fashion deals with highest success rates</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
          >
            <option value="popular">Most Popular</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sorted.map((deal, i) => (
            <div key={deal.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <DealCard {...deal} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopDeals;
