// ==========================================
// HOSPITAL SERVICES
// ==========================================
// Add, edit or remove services here.
// The Services page will automatically
// use this information.
// ==========================================

const base = import.meta.env.BASE_URL;

export const services = [
  {
    id: "outpatient",
    name: "Outpatient Services",
    shortDescription:
      "Quality medical consultation and treatment for patients who don't require hospital admission.",
    image: `${base}images/outpatient.jpg`,
  },

  {
    id: "inpatient",
    name: "Inpatient Services",
    shortDescription:
      "Comfortable inpatient care supported by dedicated healthcare professionals.",
    image: `${base}images/inpatient.jpg`,
  },

  {
    id: "maternity",
    name: "Maternity Services",
    shortDescription:
      "Compassionate maternity care supporting mothers throughout pregnancy, delivery and recovery.",
    image: `${base}images/maternity.jpg`,
  },

  {
    id: "theatre",
    name: "Theatre Services",
    shortDescription:
      "Surgical services provided in a professional and supportive environment.",
    image: `${base}images/theatre.jpg`,
  },

  {
    id: "dental",
    name: "Dental Clinic",
    shortDescription:
      "Professional dental care focused on maintaining healthy teeth and gums.",
    image: `${base}images/dental.jpg`,
  },

  {
    id: "optical",
    name: "Optical Clinic",
    shortDescription:
      "Eye care services supporting healthy vision and eye health.",
    image: `${base}images/optical.jpg`,
  },

  {
    id: "gynae",
    name: "Gynaecology Clinic",
    shortDescription:
      "Specialized women's health services and gynaecological care.",
    image: `${base}images/gynae.jpg`,
  },

  {
    id: "hypertension",
    name: "Hypertension Clinic",
    shortDescription:
      "Care and monitoring for patients managing high blood pressure.",
    image: `${base}images/hypertension.jpg`,
  },

  {
    id: "diabetes",
    name: "Diabetes Clinic",
    shortDescription:
      "Ongoing support and monitoring for patients living with diabetes.",
    image: `${base}images/diabetes.jpg`,
  },
];