import { Link, useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { getProjectBySlug } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="page detail-page detail-shell">
        <p>Project tidak ditemukan.</p>
        <Link className="back-link" to="/">
          Kembali ke beranda
        </Link>
      </main>
    );
  }

  return (
    <main className="detail-shell">
      <div className="page detail-page">

        <section className="detail-main-grid">
          <aside className="detail-sidebar">
            <Link className="back-link" to="/projects">
              {'<'} Back to Projects
            </Link>

            <p className="project-category-pill">{project.category || 'Web Development'}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div className="meta-list">
              <p>
                <span>Project Type</span>
                {project.projectType || 'Personal Project'}
              </p>
              <p>
                <span>Duration</span>
                {project.duration || '2024'}
              </p>
              <p>
                <span>Team</span>
                {project.team || 'Solo Project'}
              </p>
            </div>

            <div className="detail-link-group">
                {project.demoUrl && (
                    <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="solid-btn"
                    >
                    Live Demo
                    </a>
                )}

                {project.sourceUrl && (
                    <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="outline-btn"
                    >
                    Source Code
                    </a>
                )}
                </div>

            <section className="detail-tech">
              <h2>Technologies Used</h2>
              <div className="tags">
                {project.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>
          </aside>

          <div className="detail-visual-column">
            <ImageCarousel images={project.screenshots} title={project.title} />

            <section className="detail-meta detail-content-block">
              <h2>About the Project</h2>
              <p>{project.description}</p>

              <div className="detail-info-grid">
                <article>
                  <h3>Key Features</h3>
                  <ul>
                    {(project.features || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article>
                  <h3>What I Learned</h3>
                  <ul>
                    {(project.learned || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="challenges-card">
                  <h3>Challenges</h3>
                  <ul>
                    {(project.challenges || []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
