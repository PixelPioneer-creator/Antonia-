import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="container py-10 max-w-lg">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Contact</span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Get in Touch</h1>
        <p className="text-muted-foreground mb-8">Have a question, deal suggestion, or partnership inquiry? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-shadow"
              required
            />
          </div>
          <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform">
            <MessageSquare className="h-4 w-4 mr-2" /> Send Message
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>Or email us directly at <a href="mailto:hello@antonia.com" className="text-primary hover:underline">hello@antonia.com</a></p>
          <div className="flex justify-center gap-3 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
