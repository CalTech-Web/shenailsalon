import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shenailsalon.com";
  const now = new Date();

  // Hub pages
  const hubs: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/category/what-are`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/category/how-to`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/category/california`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Top "What Are" articles by traffic potential
  const whatAreArticles: MetadataRoute.Sitemap = [
    "/what-are/what-are-gel-x-nails/",
    "/what-are/what-are-gel-nails/",
    "/what-are/what-are-dip-nails/",
    "/what-are/what-are-builder-gel-nails/",
    "/what-are/what-are-acrylic-nails/",
    "/what-are/what-are-shellac-nails/",
    "/what-are/what-are-polygel-nails/",
    "/what-are/what-are-press-on-nails/",
    "/what-are/what-are-hard-gel-nails/",
    "/what-are/what-are-biab-nails/",
    "/what-are/what-are-russian-nails/",
    "/what-are/what-are-french-tip-nails/",
    "/what-are/what-are-nails-made-of/",
    "/what-are/what-are-coffin-nails/",
    "/what-are/what-are-stiletto-nails/",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Top "How To" articles by traffic potential
  const howToArticles: MetadataRoute.Sitemap = [
    "/how-to/how-to-remove-acrylic-nails/",
    "/how-to/how-to-remove-gel-x-nails/",
    "/how-to/how-to-remove-dip-nails/",
    "/how-to/how-to-remove-gel-nails/",
    "/how-to/how-to-remove-press-on-nails/",
    "/how-to/how-to-shape-nails/",
    "/how-to/how-to-paint-nails/",
    "/how-to/how-to-remove-fake-nails/",
    "/how-to/how-to-remove-glue-on-nails/",
    "/how-to/how-to-apply-dip-powder-nails/",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Top California city pages
  const californiaPages: MetadataRoute.Sitemap = [
    "/california/nail-salon-los-angeles/",
    "/california/nail-salon-san-francisco/",
    "/california/nail-salon-san-diego/",
    "/california/nail-salon-sacramento/",
    "/california/nail-salon-irvine/",
    "/california/nail-salon-pasadena/",
    "/california/nail-salon-san-jose/",
    "/california/nail-salon-anaheim/",
    "/california/nail-salon-long-beach/",
    "/california/nail-salon-concord/",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...hubs, ...whatAreArticles, ...howToArticles, ...californiaPages];
}
