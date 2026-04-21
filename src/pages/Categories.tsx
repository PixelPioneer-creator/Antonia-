import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import DealCard from "@/components/DealCard";
import { deals, categories } from "@/data/deals";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [selected, setSelected] = useState(initialCat);
  const [sort, setSort] = useState("latest");

  const filtered = useMemo(() => {
    let result = selected === "All" ? deals : deals.filter((d) => d.category === selected);
    if (sort === "discount") result = [...result].sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
    return result;
  }, [selected, sort]);

  return (
    <Layout>
      <div className="container py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Categories</span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-foreground mb-8">Browse by Category</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-56 shrink-0">
            <h3 className="font-heading font-semibold text-foreground mb-3">Categories</h3>
            <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
              <button
                onClick={() => setSelected("All")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-left ${selected === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                All Deals
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelected(cat.name)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-left ${selected === cat.name ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
            <h3 className="font-heading font-semibold text-foreground mt-6 mb-3">Sort By</h3>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
            >
              <option value="latest">Latest</option>
              <option value="discount">Highest Discount</option>
            </select>
          </aside>
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">No deals found in this category.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((deal) => (
                  <DealCard key={deal.id} {...deal} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
