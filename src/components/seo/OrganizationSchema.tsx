export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://montrixtech.com/#organization",

    name: "MontrixTech Private Limited",

    url: "https://montrixtech.com",

    logo: {
      "@type": "ImageObject",
      url: "https://montrixtech.com/logo.png",
    },
    
image: "https://montrixtech.com/logo.png",

    description:
      "MontrixTech Private Limited is a software development company offering web development, mobile app development, cloud solutions, AI solutions and custom software development.",

    email: "contact@montrixtech.in",

    telephone: "+91 90351 96480",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No 12, 1st Main, 9th Cross, Papanna Layout, Maruthi Nagar",
      addressLocality: "Yelahanka",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.instagram.com/montrixtech_/",
      "https://www.linkedin.com/company/montrixtech-private-limited/",
      "https://www.facebook.com/people/MontrixTech-Private-Limited/61591503377270/",
      "https://www.youtube.com/channel/UCQBF4NK6hXWmFnpWNpeV0Gw",
      "https://x.com/MontrixTech",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://montrixtech.com/#website",
    name: "MontrixTech",
    alternateName: "MontrixTech Private Limited",
    url: "https://montrixtech.com/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}