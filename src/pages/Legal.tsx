import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalPageProps) => (
  <Layout>
    <div className="container py-10 max-w-2xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">{title}</span>
      </div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-6">{title}</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </div>
  </Layout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <p>Last updated: April 15, 2026</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Information We Collect</h2>
    <p>We collect information you provide directly, such as your email when subscribing to our newsletter. We also collect usage data through cookies and Google Analytics to improve your experience.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Google Analytics</h2>
    <p>Antonia uses Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit, what pages they visit, and what other sites they used prior to coming to our site. We use this information to improve our service. Google Analytics collects only the IP address assigned to you on the date you visit, rather than your name or other identifying information.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">How We Use Your Data</h2>
    <p>Your information helps us personalize deals, send relevant notifications, and improve our platform. We never sell your personal data to third parties.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Cookies</h2>
    <p>We use cookies to track website usage, remember your preferences, and improve performance. You can manage cookie preferences in your browser settings.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Affiliate Tracking</h2>
    <p>When you click on deal links, affiliate cookies may be placed by our partner merchants. These cookies help us earn a commission when you make a purchase, at no extra cost to you.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Contact</h2>
    <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@antonia.lovable.app" className="text-primary hover:underline">privacy@antonia.lovable.app</a>.</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Terms & Conditions">
    <p>Last updated: April 15, 2026</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Acceptance of Terms</h2>
    <p>By using Antonia, you agree to these terms. If you do not agree, please do not use our website.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Use of Content</h2>
    <p>All coupon codes and deals are provided for personal, non-commercial use. You may not scrape, redistribute, or sell our content without permission.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Affiliate Links</h2>
    <p>Antonia contains affiliate links. When you click on these links and make a purchase, we may earn a commission. This does not affect the price you pay.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Limitation of Liability</h2>
    <p>We strive for accuracy but cannot guarantee that all codes will work. Antonia is not liable for failed transactions or expired coupons.</p>
  </LegalLayout>
);

export const AffiliateDisclosure = () => (
  <LegalLayout title="Affiliate Disclosure">
    <p>Last updated: April 15, 2026</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">How We Earn</h2>
    <p>Antonia participates in affiliate marketing programs with fashion brands including but not limited to Myntra, Amazon, Flipkart, AJIO, H&M, Adidas, Levi's, and many others.</p>
    <p>When you click on a deal link on our website and make a purchase on the merchant's site, we may earn a commission at <strong>no additional cost to you</strong>. The price you pay remains exactly the same whether you use our link or go directly to the merchant.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Our Commitment</h2>
    <p>This affiliate revenue helps us keep Antonia free and continue providing verified fashion deals and coupons to our users. Our editorial content and deal selections are <strong>not influenced</strong> by affiliate partnerships — we only recommend deals we believe provide genuine value to our users.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">Transparency</h2>
    <p>We believe in full transparency with our users. Every deal and coupon on Antonia is verified by our team before being listed. We clearly mark deals that contain affiliate links. If a coupon doesn't work, we encourage you to report it so we can update our listings.</p>
    <h2 className="text-lg font-heading font-semibold text-foreground mt-6">FTC Compliance</h2>
    <p>In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that Antonia receives compensation for referring traffic and business to partner companies. This disclosure is provided in compliance with the FTC's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."</p>
  </LegalLayout>
);

export const Disclaimer = () => (
  <LegalLayout title="Disclaimer">
    <p>Last updated: April 15, 2026</p>
    <p>The information provided on Antonia is for general informational purposes only. While we make every effort to ensure coupon codes and deals are accurate and up-to-date, we cannot guarantee their validity at the time of use.</p>
    <p>Deals, discounts, and promo codes are subject to change by the respective merchants (Myntra, Amazon, AJIO, Flipkart, H&M, etc.) without notice. Always verify the terms at the merchant's website before making a purchase.</p>
    <p>Antonia is not responsible for any losses or issues arising from the use of coupon codes listed on this website. Product prices, availability, and discount percentages shown on Antonia may differ from those on the merchant's website.</p>
  </LegalLayout>
);
