import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/deals";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <Layout>
    <div className="container py-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Blog</span>
      </div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Fashion Savings Blog</h1>
      <p className="text-muted-foreground mb-8">Tips, guides, and deal roundups to help you save more on fashion.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-12">
        {blogPosts.map((post, i) => (
          <article key={post.id} className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-xs text-muted-foreground ml-auto">{post.readTime} read</span>
            </div>
            <h2 className="font-heading font-semibold text-foreground mb-2 hover:text-primary transition-colors">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-primary text-sm font-medium flex items-center gap-1 hover:underline group">
              Read More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </article>
        ))}
      </div>
      
      <div className="max-w-3xl border-t border-border pt-8 mt-4">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4">External Resources & Partner Links</h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.vogue.com/fashion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
              Vogue Fashion Trends <ArrowRight className="h-3 w-3" />
            </a>
          </li>
          <li>
            <a href="https://www.gq.com/style" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
              GQ Men's Style Guide <ArrowRight className="h-3 w-3" />
            </a>
          </li>
          <li>
            <a href="https://www.businessoffashion.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
              The Business of Fashion <ArrowRight className="h-3 w-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Blog;
