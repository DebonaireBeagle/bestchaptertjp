import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="brand">
        <span className="brand-mark">◒</span>
        <span>Best Chapter</span>
      </div>
      <p>Purpose, confidence, and connection for life after work.</p>
      <div>
        <Link href="/legacy-and-documents">Legacy & Documents</Link>
        <Link href="/life-transitions">Life Transitions</Link>
        <Link href="/discovery-and-purpose">Discovery & Purpose</Link>
      </div>
      <small>
        Educational and lifestyle information only. Health, care, Medicare, and legal content is
        not personalized professional advice.
      </small>
    </footer>
  );
}
