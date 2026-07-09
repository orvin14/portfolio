import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const visible = useMemo(() => {
    const left = (activeIndex - 1 + items.length) % items.length;
    const right = (activeIndex + 1) % items.length;
    return [left, activeIndex, right];
  }, [activeIndex, items.length]);

  function move(direction) {
    setActiveIndex((prev) => (prev + direction + items.length) % items.length);
  }

  return (
    <section className="project-carousel">
      <button className="carousel-nav" onClick={() => move(-1)} aria-label="Project sebelumnya" type="button">
        <span>{'<'}</span>
      </button>

      <div className="carousel-track" role="list" aria-label="Daftar project">
        {visible.map((index, position) => {
          const project = items[index];
          const isCenter = position === 1;

          return (
            <article key={project.slug} className={`project-card ${isCenter ? 'active' : ''}`} role="listitem">
              <img src={project.thumbnail} alt={project.title} className="project-thumb" />
              <div className="project-content">
                <p className="project-meta">Project {index + 1}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="detail-link" to={`/project/${project.slug}`}>
                  Lihat detail
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <button className="carousel-nav" onClick={() => move(1)} aria-label="Project berikutnya" type="button">
        <span>{'>'}</span>
      </button>
    </section>
  );
}
