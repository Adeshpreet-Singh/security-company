import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel Security | Professional Security Services",
  description: "Sentinel Security - Professional security guards, surveillance systems, alarm monitoring, and access control solutions. Protecting what matters most.",
  openGraph: {
    title: "Sentinel Security | Professional Security Services",
    description: "Professional security guards, surveillance systems, alarm monitoring, and access control solutions. Protecting what matters most.",
    url: "https://sentinelsecurity.com",
    siteName: "Sentinel Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Sentinel Security - Professional Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Security | Professional Security Services",
    description: "Professional security guards, surveillance systems, alarm monitoring, and access control solutions.",
    images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityCompany",
    name: "Sentinel Security",
    description: "Professional security guards, surveillance systems, alarm monitoring, and access control solutions.",
    url: "https://sentinelsecurity.com",
    telephone: "+15558907233",
    email: "info@sentinelsecurity.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "500 Security Blvd",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://facebook.com/sentinelsecurity",
      "https://twitter.com/sentinelsec",
      "https://linkedin.com/company/sentinelsecurity",
      "https://instagram.com/sentinelsecurity",
    ],
    priceRange: "$$",
    areaServed: { "@type": "City", name: "Los Angeles" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Guards" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Surveillance Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alarm Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cyber Security" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Consulting" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "320",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}
