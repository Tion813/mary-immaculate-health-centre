import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

function FacilitiesGallery() {
  const base = import.meta.env.BASE_URL;

  const galleryItems = [
    {
      title: "Mary Immaculate Health Centre",
      category: "Our Facility",
      image: `${base}images/hospital.JPG`,
    },
    {
      title: "Outpatient Services",
      category: "Outpatient",
      image: `${base}images/outpatient.jfif`,
    },
    {
      title: "Inpatient Care",
      category: "Inpatient",
      image: `${base}images/inpatient.jpg`,
    },
    {
      title: "Maternity Services",
      category: "Maternity",
      image: `${base}images/maternity.jpg`,
    },
    {
      title: "Theatre",
      category: "Surgical Services",
      image: `${base}images/theatre.jpg`,
    },
    {
      title: "Radiography",
      category: "Diagnostic Services",
      image: `${base}images/radiography.jpg`,
    },
    {
      title: "Dental Clinic",
      category: "Dental",
      image: `${base}images/dental.jpg`,
    },
    {
      title: "Optical Clinic",
      category: "Optical",
      image: `${base}images/optical.jfif`,
    },
    {
      title: "VCT Services",
      category: "VCT",
      image: `${base}images/vct.jfif`,
    },
    {
      title: "Hospital Canteen",
      category: "Visitor Facilities",
      image: `${base}images/canteen.jpg`,
    },
    {
      title: "Health Centre",
      category: "Our Facility",
      image: `${base}images/IMG-20260810-WA0003.jpg`,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="section section-light facilities-gallery-section">
        <div className="container">

          {/* Section Header */}
          <div className="section-header">
            <span className="subtitle">Our Facilities</span>

            <h2>
              Explore Our
              <span> Facilities & Equipment</span>
            </h2>

            <p>
              Take a look at some of the facilities and services available
              at Mary Immaculate Health Centre.
            </p>
          </div>

          {/* Gallery */}
          <div className="facilities-gallery-grid">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                className={`facility-gallery-item ${
                  index === 0 ? "facility-gallery-featured" : ""
                }`}
                key={item.image}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="facility-gallery-overlay">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <div className="facility-gallery-zoom">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="facility-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="facility-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <div
            className="facility-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="facility-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FacilitiesGallery;