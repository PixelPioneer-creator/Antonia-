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
          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This article covers practical tips and strategies to help you maximize your fashion savings. Check out our
            <Link to="/categories" className="text-primary hover:underline mx-1">latest fashion deals</Link>
            to start saving today.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            <em>Disclosure: Some links in this article are affiliate links. We may earn a commission if you make a purchase through these links, at no extra cost to you. 
            <Link to="/affiliate-disclosure" className="text-primary hover:underline ml-1">Learn more</Link>.</em>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
