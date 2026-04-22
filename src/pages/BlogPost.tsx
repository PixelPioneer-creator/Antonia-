import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/deals";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Post not found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block hover:underline">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-10 max-w-2xl animate-fade-in">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{post.title.slice(0, 30)}...</span>
        </div>
        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
        <h1 className="text-3xl font-heading font-bold text-foreground mt-3 mb-2">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{post.date} · {post.readTime} read</p>
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="text-muted-foreground leading-relaxed text-lg font-medium">{post.excerpt}</p>
          
          {post.content && (
            <div className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          )}

          {post.externalUrl && (
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-foreground font-semibold mb-2">Further Reading</h3>
              <a 
                href={post.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Read more on external source
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground leading-relaxed">
              This article covers practical tips and strategies to help you maximize your fashion savings. Check out our
              <Link to="/categories" className="text-primary hover:underline mx-1">latest fashion deals</Link>
              to start saving today.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-xs">
              <em>Disclosure: Some links in this article are affiliate links. We may earn a commission if you make a purchase through these links, at no extra cost to you. 
              <Link to="/affiliate-disclosure" className="text-primary hover:underline ml-1">Learn more</Link>.</em>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
