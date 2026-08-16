import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { clusters, getServicesByCluster } from "@/lib/services";

const cluster = clusters.find((c) => c.id === "life-transitions")!;

export const metadata = {
  title: `${cluster.title} | Best Chapter`,
  description: cluster.intro,
};

export default function ClusterPage() {
  const clusterServices = getServicesByCluster("life-transitions");
  return (
    <main>
      <SiteHeader />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">{cluster.title}</span>
      </nav>
      <section className="service-hero">
        <div>
          <p className="eyebrow">
            {cluster.icon} {cluster.title}
          </p>
          <h1>{cluster.title}</h1>
          <p className="hero-lead">{cluster.intro}</p>
        </div>
      </section>
      <section className="services-section">
        <div className="category-list">
          <article className="category">
            <div className="service-cards">
              {clusterServices.map((service) => (
                <div className="service-card" key={service.slug}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link href={`/life-transitions/${service.slug}`}>
                    Learn more <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
