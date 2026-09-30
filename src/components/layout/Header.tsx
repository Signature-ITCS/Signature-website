import { industries } from "@/content/industries";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  const industryLinks = industries.map(({ slug, name, excerpt }) => ({ slug, name, excerpt }));
  return <HeaderClient industries={industryLinks} />;
}
