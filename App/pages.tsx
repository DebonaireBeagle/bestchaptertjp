import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { clusters, getServicesByCluster } from "@/lib/services";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Your next chapter starts here</p>
          <h1>
            Retirement is not the end of the story. It's the beginning of the best chapter yet.
          </h1>
          <p className="hero-lead">
            Find purpose, connection, confidence, and practical support for the life you want to
            build next.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#clusters">
              Explore Services
            </a>
            <Link className="button secondary" href="/quiz">
              Take the Lifestyle Quiz
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/hero-retirees.png"
            alt="Two friends volunteering together in a community garden"
            width={1536}
            height={1024}
          />
        </div>
      </section>

      <section className="intro-section" id="about">
        <div>
          <p className="eyebrow">A better way to navigate retirement</p>
          <h2>Practical support for the whole person.</h2>
        </div>
        <p>
          Retirement changes more than a work schedule. It can reshape purpose, relationships,
          health, home, identity, and the way you spend each day. Best Chapter brings those
          pieces together in one clear, trusted place — organized around what you're actually
          going through, not a list of two dozen unrelated services.
        </p>
      </section>

      <section className="services-section" id="clusters">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore your possibilities</p>
            <h2>Three places to start</h2>
          </div>
          <p>
            Every service on Best Chapter lives under one of three areas, depending on what
            you're trying to do right now.
          </p>
        </div>
        <div className="category-list">
          {clusters.map((cluster, i) => {
            const clusterServices = getServicesByCluster(cluster.id);
            return (
              <article className="category" key={cluster.id}>
                <div className="category-intro">
                  <span className="category-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="category-icon">{cluster.icon}</span>
                  <h3>{cluster.title}</h3>
                  <p>{cluster.intro}</p>
                </div>
                <div className="service-cards">
                  {clusterServices.slice(0, 3).map((service) => (
                    <div className="service-card" key={service.slug}>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <Link href={`/${cluster.id}/${service.slug}`}>
                        Learn more <span>→</span>
                      </Link>
                    </div>
                  ))}
                </div>
                <Link className="button secondary" href={`/${cluster.id}`}>
                  See all {clusterServices.length} services in {cluster.title} →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-heading light">
          <div>
            <p className="eyebrow">Simple by design</p>
            <h2>Start where you are.</h2>
          </div>
          <p>
            No sprawling questionnaires. No pressure to solve everything at once. Choose one
            useful next step and build from there.
          </p>
        </div>
        <div className="steps">
          <article>
            <span>01</span>
            <h3>Discover</h3>
            <p>Browse by area or take the short lifestyle quiz.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Choose</h3>
            <p>Compare clear options and practical starting points.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Take action</h3>
            <p>Use a tool, join a program, or connect with trusted help.</p>
          </article>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="eyebrow">Your experience still matters</p>
        <h2>There is more ahead than behind.</h2>
        <p>
          Start with one question, one connection, or one small adventure. Your next chapter does
          not need to look like anyone else's.
        </p>
        <a className="button primary" href="#clusters">
          Find your next step
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
