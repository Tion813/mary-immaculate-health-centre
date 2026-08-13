import { useState } from "react";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { services } from "../data/services";

function ServiceGallery() {
  const base = import.meta.env.BASE_URL;

  // Get the service ID from the URL
  // Example:
  // /mary-immaculate-health-centre/services/outpatient/gallery
  const serviceId = window.location.hash
  .replace("#/services/", "")
  .split("/")
  .filter(Boolean)[0];

  const service = services.find((item) => item.id === serviceId);

  const [selectedImage, setSelectedImage] = useState(null);

  // Service not found
  if (!service) {
    return (
      <main className="service-gallery-page">
        <div className="container">
          <h1>Service Not Found</h1>

          <p>
            We couldn't find the service gallery you are looking for.
          </p>

          <a href={base} className="btn btn-primary">
            <ArrowLeft size={18} />
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  const gallery = service.gallery || [];

  return (
    <main className="service-gallery-page">

      {/* ==========================================
          GALLERY HERO
      ========================================== */}

      <section className="service-gallery-hero">
        <div className="container">

          <a
            href={`${base}#/services/${service.id}`}
            className="service-back-link"
          >
            <ArrowLeft size={18} />
            Back to {service.name}
          </a>

          <div className="service-gallery-hero-content">

            <span className="subtitle">
              {service.name}
            </span>

            <h1>
              {service.name}
              <span> Gallery</span>
            </h1>

            <p>
              Take a closer look at the facilities and services
              available under {service.name.toLowerCase()}.
            </p>

          </div>
        </div>
      </section>


      {/* ==========================================
          GALLERY
      ========================================== */}

      <section className="section section-light">
        <div className="container">

          {gallery.length > 0 ? (
            <div className="service-gallery-grid">

              {gallery.map((item, index) => (
                <button
                  type="button"
                  className="service-gallery-card"
                  key={`${item.image}-${index}`}
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >

                  <div className="service-gallery-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    <div className="service-gallery-overlay">
                      <div className="service-gallery-zoom">
                        <ZoomIn size={21} />
                      </div>
                    </div>

                  </div>

                  <div className="service-gallery-card-content">

                    <span>
                      {service.name}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    {item.description && (
                      <p>
                        {item.description}
                      </p>
                    )}

                  </div>

                </button>
              ))}

            </div>
          ) : (
            <div className="service-gallery-empty">

              <h2>Gallery Coming Soon</h2>

              <p>
                Photos for this service will be added soon.
              </p>

            </div>
          )}

        </div>
      </section>


      {/* ==========================================
          BACK TO SERVICE
      ========================================== */}

      <section className="service-gallery-back-section">
        <div className="container">

          <a
            href={`${base}#/services/${service.id}`}
            className="service-back-link"
          >
            <ArrowLeft size={18} />
            Back to {service.name}
          </a>

        </div>
      </section>


      {/* ==========================================
          IMAGE LIGHTBOX
      ========================================== */}

      {selectedImage && (
        <div
          className="service-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            className="service-gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>


          <div
            className="service-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="service-gallery-lightbox-caption">

              <span>
                {service.name}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              {selectedImage.description && (
                <p>
                  {selectedImage.description}
                </p>
              )}

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default ServiceGallery;