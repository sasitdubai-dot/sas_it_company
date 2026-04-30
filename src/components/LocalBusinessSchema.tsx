import React from 'react';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sasitdubai.com/#business",
    "name": "SAS IT Services",
    "alternateName": "SAS IT Dubai",
    "description": "Leading IT support company in Dubai offering networking, CCTV installation, server solutions, IT AMC, structured cabling, access control, and IP telephony services.",
    "url": "https://www.sasitdubai.com",
    "telephone": "+971-526716178",
    "email": "Info@sasitdubai.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.1865",
      "longitude": "55.2622"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "State", "name": "UAE" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services Dubai",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Networking & Security Solutions Dubai", "url": "https://www.sasitdubai.com/networking-security-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Installation Dubai", "url": "https://www.sasitdubai.com/commercial-cctv-installation-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT AMC Dubai", "url": "https://www.sasitdubai.com/amc-annual-maintenance-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server Solutions Dubai", "url": "https://www.sasitdubai.com/server-solutions-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structured Cabling Dubai", "url": "https://www.sasitdubai.com/structured-cabling-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Access Control System Dubai", "url": "https://www.sasitdubai.com/access-control-system-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IP Telephony Dubai", "url": "https://www.sasitdubai.com/ip-telephony-dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Meeting Room Solutions Dubai", "url": "https://www.sasitdubai.com/smart-meeting-room-solutions-dubai" } }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/sasitservices",
      "https://www.linkedin.com/company/sasitservices",
      "https://www.facebook.com/sasitservices"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
