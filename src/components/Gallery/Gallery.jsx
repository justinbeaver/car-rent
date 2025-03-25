import PropTypes from "prop-types";
import { useState } from "react";

import { galleryClass, galleryConfig } from "./Gallery.config";
import s from "./Gallery.module.scss";

export const Gallery = ({ size = "sm", images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = images[currentImageIndex];

  return (
    <div className={galleryClass({ size })}>
      <div className={s["main-img-wrapper"]}>
        <img
          className={s["main-img"]}
          src={currentImage.url}
          alt={currentImage.alt}
        />
      </div>
      <div className={s.previews}>
        {images.map(({ previewUrl, alt }, index) => (
          <button
            key={index}
            className={`${s["preview__button"]} ${
              currentImageIndex === index ? s["preview__button--active"] : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`show image ${index + 1}`}
          >
            <img
              className={s["preview__img"]}
              src={previewUrl}
              alt={alt}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  size: PropTypes.oneOf(Object.keys(galleryConfig.variants.size)).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      previewUrl: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};
