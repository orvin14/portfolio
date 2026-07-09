import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectListPage() {
  return (
    <main className="page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <section className="section-head">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h1>All Projects</h1>
        </div>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/project/${project.slug}`}
            className="project-card-link"
          >
            <article className="project-card">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="tags">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}