import { Images, ArrowRight } from "lucide-react";
import { galleryImages } from "../data/gallery";

function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">

        <div className="section-header">
          <span className="subtitle">Our Gallery</span>

          <h2>
            A Look Inside
            <span> Mary Immaculate</span>
          </h2>

          <p>
            Explore our healthcare environment and get a glimpse of the
            services and facilities available at Mary Immaculate Health Centre.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.id}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div>
                  <span>{image.category}</span>
                  <h3>{image.alt}</h3>
                </div>

                <div className="gallery-icon">
                  <Images size={19} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-bottom">
          <p>
            More photos will be added as we continue updating our gallery.
          </p>

          <a href="#contact" className="btn btn-outline">
            Visit Us
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default GallerySection;