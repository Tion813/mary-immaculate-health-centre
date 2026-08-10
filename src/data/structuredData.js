import { siteConfig } from "./siteConfig";

export const hospitalStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",

  name: siteConfig.hospital.name,

  description:
    "Mary Immaculate Health Centre Bahati provides quality and compassionate healthcare services including outpatient, inpatient, maternity, theatre, dental, optical and specialist clinics.",

  url: "https://maryimmaculatehealthcentre.com/",

  telephone: siteConfig.contact.phone || undefined,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahati",
    addressRegion: "Nairobi",
    addressCountry: "KE",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921392987010103,
    longitude: 36.85513294028902,
  },

  hasMap: siteConfig.contact.mapsUrl,

  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.youtube,
  ].filter(Boolean),

  medicalSpecialty: [
    "General Practice",
    "Maternity",
    "Dental",
    "Optical",
    "Gynecology",
    "Hypertension",
    "Diabetes",
  ],

  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Outpatient Services",
    },
    {
      "@type": "MedicalProcedure",
      name: "Inpatient Services",
    },
    {
      "@type": "MedicalProcedure",
      name: "Maternity Services",
    },
    {
      "@type": "MedicalProcedure",
      name: "Theatre Services",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dental Services",
    },
    {
      "@type": "MedicalProcedure",
      name: "Optical Services",
    },
  ],
};