export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Co-Host Solutions",
    description: "Professional Airbnb property management and co-hosting services in the Philippines",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cagayan de Oro",
      addressRegion: "Misamis Oriental",
      postalCode: "9000",
      addressCountry: "PH",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cagayan de Oro",
      },
      {
        "@type": "City",
        name: "Pasay",
      },
    ],
    telephone: "+63",
    email: "office@co-hostsolutions.com",
    url: "https://co-hostsolutions.com",
    service: [
      {
        "@type": "Service",
        name: "Airbnb Property Management",
        description: "Professional management of short-term rental properties on Airbnb",
      },
      {
        "@type": "Service",
        name: "Guest Management",
        description: "24/7 guest support and communication management",
      },
      {
        "@type": "Service",
        name: "Revenue Optimization",
        description: "Dynamic pricing and seasonal rate optimization",
      },
    ],
    sameAs: [],
  };
}

export function generateBlogPostSchema(title: string, description: string, date: string, author: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://co-hostsolutions.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Co-Host Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://co-hostsolutions.com/logo.png",
      },
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
