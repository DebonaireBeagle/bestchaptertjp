import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// TODO(phase 2): once Stripe is wired up, this page becomes the paid-tier
// landing page. Per the strategy doc, Concierge should be offered
// contextually (after a user shows multi-cluster engagement in one
// session) rather than only sitting here as a static destination — but
// this route is still needed as the actual checkout/signup landing spot.
export default function ConciergePage() {
  return (
    <main>
      <SiteHeader />
      <section className="service-hero">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h1>Retiree Concierge Service</h1>
          <p className="hero-lead">
            A hybrid digital assistant for trips, documents, and trusted local services —
            coordinating across everything Best Chapter offers.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
