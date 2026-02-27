import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sasitdubai.com";

  return [
    {
      url: `${baseUrl}/networking-security-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/server-solutions-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/structured-cabling-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ip-telephony-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/amc-annual-maintenance-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/computer-repair-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { 
      url: `${baseUrl}/access-control-system-dubai`,
     lastModified: new Date(),
      changeFrequency: "monthly",
       priority: 0.8, 
      }, 
      { 
        url: `${baseUrl}/commercial-cctv-installation-dubai`,
       lastModified: new Date(), 
       changeFrequency: "monthly",
        priority: 0.8, 
      }, 
      { 
        url: `${baseUrl}/smart-meeting-room-solutions-dubai`, 
        lastModified: new Date(), 
        changeFrequency: "monthly", 
        priority: 0.8, 
      },
  ];
}
