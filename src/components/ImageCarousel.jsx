import { useState } from 'react';

export default function ImageCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function move(direction) {
    setActiveIndex((prev) => (prev + direction + images.length) % images.length);
  }

  return (
    <div className="image-carousel detail-showcase">
      <button onClick={() => move(-1)} type="button" aria-label="Screenshot sebelumnya" className="showcase-nav left">
        {'<'}
      </button>

      <img src={images[activeIndex]} alt={`${title} screenshot ${activeIndex + 1}`} className="detail-shot" />

      <button onClick={() => move(1)} type="button" aria-label="Screenshot berikutnya" className="showcase-nav right">
        {'>'}
      </button>

      <div className="image-controls showcase-dots" aria-label="Screenshot navigation">
        {images.map((_, index) => (
          <button
            key={`${title}-dot-${index}`}
            type="button"
            className={`dot-btn ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Go to screenshot ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
