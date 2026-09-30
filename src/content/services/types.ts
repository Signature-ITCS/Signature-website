export type ServiceContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  overviewTitle: string;
  overview: string[];
  features: { title: string; desc: string }[];
  deliverables: string[];
  stats: { value: string; label: string }[];
  process: { title: string; desc: string }[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};
