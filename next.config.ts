import type { NextConfig } from "next";
import { services } from "./lib/services";

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
