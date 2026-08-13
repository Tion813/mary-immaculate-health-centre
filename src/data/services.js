// ==========================================
// MARY IMMACULATE HEALTH CENTRE SERVICES
// ==========================================

const base = import.meta.env.BASE_URL;

export const services = [
  // ==========================================
  // OUTPATIENT SERVICES
  // ==========================================
  {
    id: "outpatient",
    name: "Outpatient Services",
    shortDescription:
      "Accessible medical care for patients who require consultation, diagnosis, treatment and follow-up without hospital admission.",

    image: `${base}images/outpatient.jfif`,

    gallery: [
      {
        title: "Outpatient Services",
        description:
          "Our outpatient department provides accessible medical consultation, assessment and treatment.",
        image: `${base}images/outpatient.jfif`,
      },
    ],

    description:
      "Our outpatient services provide accessible medical care for patients who need consultation, diagnosis, treatment and follow-up without hospital admission.",

    features: [
      {
        name: "Medical Consultation",
        description:
          "Professional consultation and assessment by qualified healthcare professionals.",
      },
      {
        name: "Laboratory Services",
        description:
          "Diagnostic laboratory services to support accurate assessment, diagnosis and treatment.",
      },
      {
        name: "Pharmacy",
        description:
          "Access to prescribed medicines and guidance on their proper use.",
      },
      {
        name: "Treatment & Procedures",
        description:
          "Essential medical treatments and procedures based on the patient's healthcare needs.",
      },
      {
        name: "Follow-up Care",
        description:
          "Continued monitoring and care to support recovery and ongoing wellbeing.",
      },
      {
        name: "Dental Services",
        description:
          "Dental assessment and treatment services supporting good oral health.",
      },
      {
        name: "Optical Services",
        description:
          "Eye examinations, vision assessment and optical care services.",
      },
    ],

    expectations: [
      {
        title: "Registration",
        description:
          "Patients begin by registering and providing the necessary information.",
      },
      {
        title: "Medical Consultation",
        description:
          "A healthcare professional assesses the patient's condition and concerns.",
      },
      {
        title: "Assessment & Testing",
        description:
          "Where necessary, laboratory, radiography or other diagnostic services may be recommended.",
      },
      {
        title: "Treatment & Follow-up",
        description:
          "Patients receive appropriate treatment and guidance on any required follow-up.",
      },
    ],

    benefits: [
      {
        title: "Professional Care",
        description:
          "Care provided by dedicated healthcare professionals.",
      },
      {
        title: "Patient Focused",
        description:
          "We place the needs, dignity and wellbeing of patients first.",
      },
      {
        title: "Convenient Access",
        description:
          "Essential healthcare services are available within our community.",
      },
    ],
  },

  // ==========================================
  // INPATIENT SERVICES
  // ==========================================
  {
    id: "inpatient",
    name: "Inpatient Services",
    shortDescription:
      "Comfortable inpatient care supported by dedicated healthcare professionals throughout admission and recovery.",

    image: `${base}images/inpatient.jpg`,

    gallery: [
      {
        title: "Inpatient Care",
        description:
          "Our inpatient facilities provide a supportive environment for patients requiring admission and continued care.",
        image: `${base}images/inpatient.jpg`,
      },
    ],

    description:
      "Our inpatient services provide patients with continued medical and nursing care when hospital admission is required.",

    features: [
      {
        name: "Patient Admission",
        description:
          "Admission and orientation of patients requiring continued hospital care.",
      },
      {
        name: "24-Hour Nursing Care",
        description:
          "Ongoing nursing support and monitoring throughout the patient's stay.",
      },
      {
        name: "Medical Monitoring",
        description:
          "Regular monitoring of the patient's condition and progress.",
      },
      {
        name: "Medication Administration",
        description:
          "Administration and monitoring of prescribed medications.",
      },
      {
        name: "Discharge Planning",
        description:
          "Preparation and guidance for patients transitioning home after treatment.",
      },
      {
        name: "Ambulance Referral",
        description:
          "Ambulance referral services for inpatient patients who require transfer to another healthcare facility.",
      },
    ],

    expectations: [
      {
        title: "Admission",
        description:
          "The patient is assessed and admitted when inpatient care is required.",
      },
      {
        title: "Medical Assessment",
        description:
          "The healthcare team evaluates the patient's condition and develops a care plan.",
      },
      {
        title: "Ongoing Care",
        description:
          "Patients receive regular nursing care, treatment and monitoring.",
      },
      {
        title: "Discharge",
        description:
          "Patients receive appropriate instructions and follow-up guidance when discharged.",
      },
    ],

    benefits: [
      {
        title: "Continuous Care",
        description:
          "Patients receive ongoing support throughout their hospital stay.",
      },
      {
        title: "Dedicated Team",
        description:
          "Our healthcare professionals work together to support patient recovery.",
      },
      {
        title: "Patient Safety",
        description:
          "We aim to provide a safe and supportive environment for patients.",
      },
    ],
  },

  // ==========================================
  // MATERNITY SERVICES
  // ==========================================
  {
    id: "maternity",
    name: "Maternity Services",
    shortDescription:
      "Compassionate maternity care supporting mothers and newborns throughout pregnancy, delivery and recovery.",

    image: `${base}images/maternity.jpg`,

    gallery: [
      {
        title: "Maternity Services",
        description:
          "Our maternity services support mothers throughout pregnancy, delivery and recovery.",
        image: `${base}images/maternity.jpg`,
      },
    ],

    description:
      "Our maternity services support mothers throughout pregnancy, delivery and the postnatal period in a caring and supportive environment.",

    features: [
      {
        name: "Antenatal Care",
        description:
          "Routine care and monitoring throughout pregnancy.",
      },
      {
        name: "Normal Delivery",
        description:
          "Support and care for mothers during normal childbirth.",
      },
      {
        name: "Postnatal Care",
        description:
          "Care and monitoring for mothers following delivery.",
      },
      {
        name: "Family Planning",
        description:
          "Information and services supporting informed family planning choices.",
      },
      {
        name: "Newborn Care",
        description:
          "Essential care and monitoring for newborn babies.",
      },
      {
        name: "New Born Unit",
        description:
          "Critical care and monitoring for newborn babies requiring specialized attention.",
      },
      {
        name: "Surgical Care",
        description:
          "Surgical care may be provided where required as part of maternity management.",
      },
    ],

    expectations: [
      {
        title: "Antenatal Visits",
        description:
          "Mothers receive routine pregnancy assessments and monitoring.",
      },
      {
        title: "Delivery Preparation",
        description:
          "The healthcare team provides guidance and prepares mothers for delivery.",
      },
      {
        title: "Delivery Care",
        description:
          "Mothers receive professional support throughout childbirth.",
      },
      {
        title: "Postnatal & Newborn Support",
        description:
          "Care and guidance are provided following delivery for both mother and baby.",
      },
    ],

    benefits: [
      {
        title: "Compassionate Care",
        description:
          "We aim to make maternity care supportive and respectful.",
      },
      {
        title: "Mother & Baby Focus",
        description:
          "Care considers the wellbeing of both mother and newborn.",
      },
      {
        title: "Continuity of Care",
        description:
          "Support extends from pregnancy through the postnatal period.",
      },
    ],
  },

  // ==========================================
  // THEATRE SERVICES
  // ==========================================
  {
    id: "theatre",
    name: "Theatre Services",
    shortDescription:
      "Surgical services provided in a professional and supportive environment.",

    image: `${base}images/theatre.jpg`,

    gallery: [
      {
        title: "Theatre Services",
        description:
          "Our theatre provides a professional environment for surgical procedures and patient care.",
        image: `${base}images/theatre.jpg`,
      },
    ],

    description:
      "Our theatre services support patients requiring surgical procedures, from preparation through recovery.",

    features: [
      {
        name: "Minor Surgical Procedures",
        description:
          "Minor surgical procedures carried out by qualified healthcare professionals.",
      },
      {
        name: "Major Surgical Procedures",
        description:
          "Surgical procedures provided according to the patient's clinical needs.",
      },
      {
        name: "Pre-operative Care",
        description:
          "Assessment and preparation before surgery.",
      },
      {
        name: "Post-operative Care",
        description:
          "Monitoring and care following surgical procedures.",
      },
      {
        name: "Surgical Monitoring",
        description:
          "Close monitoring throughout the surgical care process.",
      },
    ],

    expectations: [
      {
        title: "Assessment",
        description:
          "Patients are assessed before a surgical procedure is planned.",
      },
      {
        title: "Preparation",
        description:
          "The healthcare team prepares the patient for the procedure.",
      },
      {
        title: "Procedure",
        description:
          "The planned surgical procedure is performed in the theatre.",
      },
      {
        title: "Recovery",
        description:
          "Patients receive appropriate monitoring and post-operative care.",
      },
    ],

    benefits: [
      {
        title: "Professional Team",
        description:
          "Surgical care is provided by dedicated healthcare professionals.",
      },
      {
        title: "Patient Safety",
        description:
          "Patient wellbeing and safety remain important throughout care.",
      },
      {
        title: "Continued Support",
        description:
          "Patients receive support before and after their procedure.",
      },
    ],
  },

  // ==========================================
  // SPECIAL CLINICS
  // ==========================================
  {
    id: "special-clinics",
    name: "Special Clinics",
    shortDescription:
      "Specialized clinic services supporting patients with specific and ongoing healthcare needs.",

    image: `${base}images/hypertension.avif`,

    gallery: [
      {
        title: "Hypertension Clinic",
        description:
          "Specialized care and monitoring for patients managing high blood pressure.",
        image: `${base}images/hypertension.avif`,
      },
      {
        title: "Diabetes Clinic",
        description:
          "Ongoing support and monitoring for patients living with diabetes.",
        image: `${base}images/diabetes.jpg`,
      },
      {
        title: "Gynaecology Clinic",
        description:
          "Specialized healthcare services addressing women's reproductive and gynaecological health needs.",
        image: `${base}images/gynae.jfif`,
      },
    ],

    description:
      "Our special clinics provide focused healthcare services for patients requiring ongoing monitoring, treatment and support.",

    features: [
      {
        name: "Hypertension Clinic",
        description:
          "Monitoring, treatment and follow-up support for patients managing high blood pressure.",
      },
      {
        name: "Diabetes Clinic",
        description:
          "Ongoing monitoring, treatment and lifestyle support for patients living with diabetes.",
      },
      {
        name: "Gynaecology Clinic",
        description:
          "Specialized healthcare services addressing women's reproductive and gynaecological health needs.",
      },
    ],

    expectations: [
      {
        title: "Clinic Registration",
        description:
          "Patients register and provide the necessary information before consultation.",
      },
      {
        title: "Clinical Assessment",
        description:
          "A healthcare professional assesses the patient's condition and healthcare needs.",
      },
      {
        title: "Treatment & Guidance",
        description:
          "Patients receive appropriate treatment, advice and support.",
      },
      {
        title: "Follow-up",
        description:
          "Regular follow-up may be recommended depending on the patient's needs.",
      },
    ],

    benefits: [
      {
        title: "Specialized Attention",
        description:
          "Patients receive focused care based on their specific healthcare needs.",
      },
      {
        title: "Regular Monitoring",
        description:
          "Ongoing monitoring supports effective management and follow-up.",
      },
      {
        title: "Patient Support",
        description:
          "Patients receive guidance and support throughout their care.",
      },
    ],
  },

  {
    id: "radiography",
    name: "Radiography Services",
    shortDescription:
      "Radiographic imaging services supporting diagnosis and patient assessment.",
    image: `${base}images/radiography.jpg`,

    gallery: [
      {
        title: "Radiography Services",
        description:
          "Radiographic imaging services supporting diagnosis and patient assessment.",
        image: `${base}images/radiography.jpg`,
      },
    ],
  
    description:
      "Our radiography services provide diagnostic imaging support to assist healthcare professionals in assessing and managing patients.",
  
    features: [
      {
        name: "X-Ray Services",
        description:
          "Radiographic imaging to support the diagnosis and assessment of different medical conditions.",
      },
      {
        name: "Diagnostic Imaging",
        description:
          "Imaging services that support healthcare professionals in making informed clinical decisions.",
      },
      {
        name: "Patient Assessment",
        description:
          "Radiographic examinations may be requested as part of a patient's medical assessment.",
      },
    ],
  
    expectations: [
      {
        title: "Referral or Request",
        description:
          "A healthcare professional may request a radiographic examination based on the patient's needs.",
      },
      {
        title: "Radiographic Examination",
        description:
          "The patient is guided through the appropriate imaging procedure.",
      },
      {
        title: "Image Assessment",
        description:
          "The resulting images support clinical assessment and diagnosis.",
      },
      {
        title: "Follow-up",
        description:
          "Further care or follow-up may be recommended based on the clinical findings.",
      },
    ],
  
    benefits: [
      {
        title: "Diagnostic Support",
        description:
          "Radiographic imaging supports healthcare professionals in patient assessment.",
      },
      {
        title: "Professional Care",
        description:
          "Patients receive guidance throughout the imaging process.",
      },
      {
        title: "Accessible Service",
        description:
          "Radiography is available as part of the healthcare services offered at the facility.",
      },
    ],
  },

  // ==========================================
  // VCT SERVICES
  // ==========================================
  {
    id: "vct",
    name: "VCT Services",
    shortDescription:
      "Confidential voluntary counselling and testing services provided in a supportive environment.",

    image: `${base}images/vct.jfif`,

    gallery: [
      {
        title: "VCT Services",
        description:
          "Confidential voluntary counselling and testing services provided in a supportive environment.",
        image: `${base}images/vct.jfif`,
      },
    ],

    description:
      "Our VCT services provide a confidential and supportive environment for individuals seeking voluntary counselling and testing.",

    features: [
      {
        name: "Voluntary Counselling & Testing",
        description:
          "Confidential counselling and testing services for individuals who wish to know their status.",
      },
      {
        name: "Counselling",
        description:
          "Professional and confidential counselling support.",
      },
      {
        name: "Confidential Support",
        description:
          "A respectful environment where clients can access information and support.",
      },
      {
        name: "Referral Services",
        description:
          "Referral and linkage to appropriate healthcare services where required.",
      },
    ],

    expectations: [
      {
        title: "Registration",
        description:
          "Clients are welcomed and guided through the service process.",
      },
      {
        title: "Counselling",
        description:
          "Clients receive appropriate counselling before testing.",
      },
      {
        title: "Testing",
        description:
          "Testing is carried out in a confidential and supportive environment.",
      },
      {
        title: "Support & Referral",
        description:
          "Appropriate support, information or referral is provided where required.",
      },
    ],

    benefits: [
      {
        title: "Confidentiality",
        description:
          "Client privacy and confidentiality are treated with importance.",
      },
      {
        title: "Professional Support",
        description:
          "Counselling and support are provided in a professional environment.",
      },
      {
        title: "Accessible Care",
        description:
          "VCT services are available within the healthcare facility.",
      },
    ],
  },

// ==========================================
// VISITOR CANTEEN
// ==========================================
{
  id: "canteen",
  name: "Hospital Canteen",
  shortDescription:
    "A convenient visitor canteen providing snacks, refreshments and small meals for visitors.",

  image: `${base}images/canteen.jpg`,

  gallery: [
    {
      title: "Hospital Canteen",
      description:
        "A convenient visitor canteen providing snacks, refreshments and small meals.",
      image: `${base}images/canteen.jpg`,
    },
  ],

  description:
    "The hospital canteen provides snacks, refreshments and small meals for visitors during their time at Mary Immaculate Health Centre.",

  features: [
    {
      name: "Snacks",
      description:
        "A selection of snacks available for hospital visitors.",
    },
    {
      name: "Small Meals",
      description:
        "Convenient small meals available for visitors.",
    },
    {
      name: "Refreshments",
      description:
        "Refreshments available for visitors during their time at the facility.",
    },
    {
      name: "Visitor Convenience",
      description:
        "A convenient facility for visitors to access food and refreshments.",
    },
  ],

  expectations: [
    {
      title: "Visit the Canteen",
      description:
        "Visitors can access the canteen during its operating hours.",
    },
    {
      title: "Choose Refreshments",
      description:
        "Visitors can select available snacks, refreshments or small meals.",
    },
    {
      title: "Enjoy Your Meal",
      description:
        "The canteen provides a convenient place for visitors to have refreshments.",
    },
  ],

  benefits: [
    {
      title: "Convenience",
      description:
        "Visitors can access refreshments within the health centre.",
    },
    {
      title: "Quick Refreshments",
      description:
        "Snacks and small meals are available for visitors.",
    },
    {
      title: "Visitor Friendly",
      description:
        "The canteen is intended to make visits more convenient.",
    },
  ],
},
];