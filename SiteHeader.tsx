import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Best Chapter home">
        <span className="brand-mark">◒</span>
        <span>Best Chapter</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/legacy-and-documents">Legacy & Documents</Link>
        <Link href="/life-transitions">Life Transitions</Link>
        <Link href="/discovery-and-purpose">Discovery & Purpose</Link>
      </nav>
      <Link className="header-cta" href="/quiz">
        Find Your Next Step
      </Link>
    </header>
  );
}
