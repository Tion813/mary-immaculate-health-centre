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
    src: `${base}/images/hospital/hospital.jpeg`,
    alt: "Mary Immaculate Health Centre",
    category: "Facility",
  },
  {
    id: 2,
    src: `${base}/images/hospital/parking.jpeg`,
    alt: "Maternity services",
    category: "Maternity",
  },
  {
    id: 3,
    src: `${base}/images/hospital/reception.jpeg`,
    alt: "Reception",
    category: "Healthcare",
  },
  {
    id: 4,
    src: `${base}/images/hospital/lab.jpeg`,
    alt: "Laboratory services",
    category: "Healthcare",
  },
  {
    id: 5,
    src: `${base}/images/hospital/parking 3.jpeg`,
    alt: "Parking",
    category: "Healthcare",
  },
  {
    id: 6,
    src: `${base}/images/hospital/theatre.jpeg`,
    alt: "Theatre services",
    category: "Facility",
  },
];