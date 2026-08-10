import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://montrixtech.in/sitemap.xml",
    host: "https://montrixtech.in",
  };
}
