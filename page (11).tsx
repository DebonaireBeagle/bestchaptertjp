import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// TODO(phase 2): this route needs to be auth-gated once Supabase auth is
// wired up. Pattern: check the session in a server component (or middleware),
// redirect to /login if there isn't one, then load the user's profile
// (interests, life events, tools used) to drive the cross-cluster
// recommendations described in the strategy doc.
export default function DashboardPage() {
  return (
    <main>
      <SiteHeader />
      <section className="service-hero">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h1>Your dashboard</h1>
          <p className="hero-lead">
            This is a placeholder. Once accounts are set up, this page will show your saved
            bucket list items, checklist progress, and personalized recommendations across all
            three areas of the site.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
