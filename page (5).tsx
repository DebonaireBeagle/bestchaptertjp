import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { clusters, getServiceBySlug, getServicesByCluster } from "@/lib/services";

const CLUSTER_ID = "legacy-and-documents" as const;
const cluster = clusters.find((c) => c.id === CLUSTER_ID)!;

export function generateStaticParams() {
  return getServicesByCluster(CLUSTER_ID).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(CLUSTER_ID, slug);
  if (!service) return {};
  return { title: `${service.title} | Best Chapter`, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(CLUSTER_ID, slug);
  if (!service) notFound();

  const related = getServicesByCluster(CLUSTER_ID)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <SiteHeader />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/${CLUSTER_ID}`}>{cluster.title}</Link>
        <span>/</span>
        <span aria-current="page">{service.title}</span>
      </nav>

      <section className="service-hero">
        <div>
          <p className="eyebrow">
            {cluster.icon} {cluster.title}
          </p>
          <h1>{service.title}</h1>
          <p className="hero-lead">{service.heroLead}</p>
          <p className="hero-sub">{service.heroSub}</p>
          <div className="hero-actions">
            <a className="button primary" href="/#contact">
              Get Started
            </a>
            <Link className="button secondary" href={`/${CLUSTER_ID}`}>
              See All {cluster.title}
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <p className="eyebrow">What this includes</p>
        <h2>Practical support, built around you.</h2>
        <div className="feature-grid">
          {service.features.map((f) => (
            <article key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-section">
          <p className="eyebrow">More in {cluster.title}</p>
          <h2>Related services</h2>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/${CLUSTER_ID}/${r.slug}`}>
                {r.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
