import servicesData from "@/data/services.json";

export type Cluster = "legacy-and-documents" | "life-transitions" | "discovery-and-purpose";

export type ServiceFeature = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  description: string;
  heroLead: string;
  heroSub: string;
  icon: string;
  originalCategory: string;
  cluster: Cluster;
  features: ServiceFeature[];
};

export const services: Service[] = servicesData as Service[];

export const clusters: { id: Cluster; icon: string; title: string; intro: string }[] = [
  {
    id: "legacy-and-documents",
    icon: "✓",
    title: "Legacy & Documents",
    intro: "Get your affairs organized — documents, estate plans, and the story you want to leave behind.",
  },
  {
    id: "life-transitions",
    icon: "◇",
    title: "Life Transitions",
    intro: "Support for moves, care decisions, home safety, and the major changes retirement can bring.",
  },
  {
    id: "discovery-and-purpose",
    icon: "↗",
    title: "Discovery & Purpose",
    intro: "Find new interests, connections, and a sense of purpose for the chapter ahead.",
  },
];

export function getServicesByCluster(cluster: Cluster): Service[] {
  return services.filter((s) => s.cluster === cluster);
}

export function getServiceBySlug(cluster: Cluster, slug: string): Service | undefined {
  return services.find((s) => s.cluster === cluster && s.slug === slug);
}
