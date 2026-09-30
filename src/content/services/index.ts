import { marketingContent } from "./marketing";
import { technologyContent } from "./technology";
import { businessContent } from "./business";
import type { ServiceContent } from "./types";

export type { ServiceContent };

const serviceContent: Record<string, ServiceContent> = {
  ...marketingContent,
  ...technologyContent,
  ...businessContent,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContent[slug];
}
