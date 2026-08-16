import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// next.config.ts is compiled in isolation before the rest of the app, so it
// can't reliably import your own TypeScript modules (e.g. lib/services.ts) —
// that's what was causing the "Cannot find module './lib/services'" build
// error. Reading the plain JSON file directly with fs sidesteps that.
type ServiceRecord = { slug: string; cluster: string };

const servicesPath = path.join(process.cwd(), "data", "services.json");
const services: ServiceRecord[] = JSON.parse(fs.readFileSync(servicesPath, "utf-8"));

const nextConfig: NextConfig = {
  // Redirect the old flat /services/[slug].html structure (from the Vite site)
  // to the new cluster-based routes, in case any of the old URLs are
  // already indexed or linked externally.
  async redirects() {
    return services.map((s) => ({
      source: `/services/${s.slug}.html`,
      destination: `/${s.cluster}/${s.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
