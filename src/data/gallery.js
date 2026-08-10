// ==========================================
// MARY IMMACULATE HEALTH CENTRE
// Gallery Images
// ==========================================
// To add a photo:
// 1. Put the image inside public/images/gallery/
// 2. Add an entry below.
//
// To remove a photo:
// Delete its entry from this file.
// ==========================================

const base = import.meta.env.BASE_URL;

export const galleryImages = [
  {
    id: 1,
    src: `${base}images/hospital.jpg`,
    alt: "Mary Immaculate Health Centre",
    category: "Facility",
  },
  {
    id: 2,
    src: `${base}images/maternity.jpg`,
    alt: "Maternity services",
    category: "Maternity",
  },
  {
    id: 3,
    src: `${base}images/outpatient.jpg`,
    alt: "Outpatient services",
    category: "Healthcare",
  },
  {
    id: 4,
    src: `${base}images/dental.jpg`,
    alt: "Dental services",
    category: "Healthcare",
  },
  {
    id: 5,
    src: `${base}images/optical.jpg`,
    alt: "Optical services",
    category: "Healthcare",
  },
  {
    id: 6,
    src: `${base}images/theatre.jpg`,
    alt: "Theatre services",
    category: "Facility",
  },
];