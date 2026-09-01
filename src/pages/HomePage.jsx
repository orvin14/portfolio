import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

import {
    FaJava,
}from "react-icons/fa";

export default function HomePage() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  const quickStats = [
    { title: 'Projects', value: '20+', subtitle: 'Finished and ongoing' },
    { title: 'Achievements', value: '5', subtitle: 'Competition highlights' },
    { title: 'GPA', value: '3.75', subtitle: 'Current performance' },
    { title: 'Years Learning', value: '2+', subtitle: 'Hands-on practice' }
  ];

  const skills = [
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#ED8B00" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> }, // untuk dark mode
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> }, // untuk dark mode
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
];

  const experiences = [
    {
    title: "System Analyst Intern",
    org: "Pertamina Patra Niaga",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Created and maintained System Requirement Specifications (SRS), flowcharts, and system design documentation to support the development process.", 
      "Collaborated with stakeholders and development teams to translate business needs into actionable system requirements." 
    ]
  },
    {
    title: "Computer Science and Engineering Laboratory Assistant",
    org: "School of Electrical Engineering and Informatics (STEI), Institut Teknologi Bandung",
    period: "Sep 2025 – Present",
    points: [
      "Coordinated academic support across multiple core computer science courses under the laboratory.",
      "Supported course operations by aligning assignment standards, timelines, and evaluation approaches.",
      "Contributed to improving academic processes and resource organization within the laboratory."
    ]
  },
  {
    title: "Algorithm Strategy Course Assistant",
    org: "School of Electrical Engineering and Informatics (STEI), Institut Teknologi Bandung",
    period: "Feb 2026 – Jun 2026",
    points: [
      "Designed and reviewed 5+ major assignments for algorithm courses, improving question clarity and alignment with learning objectives.",
      "Collaborated with lecturers to refine problem difficulty and ensure comprehensive coverage of topics including dynamic programming and graph algorithms."
    ]
  },
  {
    title: "Discrete Mathematics Course Assistant",
    org: "School of Electrical Engineering and Informatics (STEI), Institut Teknologi Bandung",
    period: "Feb 2026 – Jun 2026",
    points: [
      "Developed and validated 5+ quizzes, ensuring logical correctness and conceptual depth.",
      "Assisted in grading and provided detailed feedback to more than 100 students to strengthen conceptual understanding."
    ]
  },
  {
    title: "Linear and Geometric Algebra Course Assistant",
    org: "School of Electrical Engineering and Informatics (STEI), Institut Teknologi Bandung",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Created and reviewed more than 5 assignments and quizzes covering linear and geometric algebra concepts.",
      "Ensured assessment quality and consistency with course learning objectives."
    ]
  },
  {
    title: "Computational Thinking Course Assistant",
    org: "Preparatory Program in Science and Engineering (PTPB), Institut Teknologi Bandung",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Designed and evaluated project-based assignments focusing on problem decomposition and algorithmic thinking.",
      "Guided more than 100 students in developing structured solutions using pseudocode and basic programming."
    ]
  }
];

  const featuredProjects = projects.slice(0, 3);

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/orvin14',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.38c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.08-.75.09-.74.09-.74 1.2.09 1.83 1.24 1.83 1.24 1.06 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23.96-.26 1.99-.4 3.01-.4 1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/orvin-andika',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45H16.9V14.9c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.64H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0Z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/orvin_andika',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.36-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 0 0 5.84 12 6.16 6.16 0 0 0 12 18.16 6.16 6.16 0 0 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 0 1 8 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4Zm6.4-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
        </svg>
      )
    },
    {
      label: 'Email',
      href: 'mailto:orvin.andika@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 13.07 1.5 6.5V18A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6.5L12 13.07Zm10.5-9.57A1.5 1.5 0 0 0 21 2.5H3A1.5 1.5 0 0 0 1.5 3.5v.84L12 10.93l10.5-6.59V3.5Z" />
        </svg>
      )
    }
  ];

  return (
    <main className="home-page">
      <section className="hero-shell" id="home">
        <div className="page">
          <header className="top-nav">
            <div className="brand-wrap">
              <a href="#home" className="logo-mark">
                OA
              </a>
              <span>Orvin Andika</span>
            </div>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
            <button className="theme-toggle" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3c.1 0 .2 0 .29.01A7 7 0 1 0 20.99 12c0 .26-.01.53-.04.79H21Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1Zm0 16a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm8-8a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1ZM1 12a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H2a1 1 0 0 0-1 1Zm15.66 5.66a1 1 0 0 0 0 1.42l1.41 1.41a1 1 0 1 0 1.42-1.41l-1.42-1.42a1 1 0 0 0-1.41 0ZM4.51 4.51a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 1 0 1.41-1.42L5.93 4.51a1 1 0 0 0-1.42 0Zm14.98 0a1 1 0 0 0-1.42 0l-1.41 1.41a1 1 0 1 0 1.41 1.42l1.42-1.42a1 1 0 0 0 0-1.41ZM7.34 16.66a1 1 0 0 0-1.41 0L4.5 18.07a1 1 0 1 0 1.42 1.42l1.41-1.42a1 1 0 0 0 0-1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
                </svg>
              )}
            </button>
          </header>

          <section className="hero-grid">
            <div className="hero-copy">
              <p className="hero-hi">Hi, I'm</p>
              <h1>
                Orvin Andika
                <span>Informatics Engineering Student</span>
              </h1>
              <p className="hero-desc">
                Passionate about building software that solves real-world problems and creating intuitive user
                experiences.
              </p>
              <div className="hero-actions">
                <a className="solid-btn" href="#projects">
                  View My Projects
                </a>
                <a className="outline-btn" href="/pdf/CV-OrvinAndika.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </div>

              <div className="hero-socials">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" title={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-avatar-wrap">
              <div className="hero-visual-frame">
                <img src="/img/foto-13523017.jpg" alt="Orvin Andika" className="hero-avatar" />
                <article className="floating-note code-note">
                  <p>while (keepLearning) {'{'}</p>
                  <p>code();</p>
                  <p>learn();</p>
                  <p>build();</p>
                  <p>{'}'}</p>
                </article>
                <article className="floating-note status-note">
                  <p className="status-title">Currently</p>
                  <p>Building cool things and learning more every day.</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="content-shell">
        <div className="page content-page">
          <section className="about-grid" id="about">
            <article className="about-text-card">
              <p className="section-kicker">About Me</p>
              <h2>About Me</h2>
              <p>
                I am a final year Informatics Engineering student at Institut Teknologi Bandung with a strong passion for software engineering, backend development, and problem solving. I enjoy designing and building scalable applications that address real-world challenges while maintaining clean, maintainable code.

                Throughout my academic journey, I have worked on various software development projects ranging from web applications and mobile applications to system design and algorithmic problem solving. I am always eager to learn new technologies, improve my technical skills, and collaborate with others to create impactful solutions.

                Beyond coding, I actively contribute as a Course Assistant, helping students understand fundamental computer science concepts while continuously strengthening my own communication and leadership skills. My goal is to become a software engineer who creates reliable systems that deliver meaningful value to users.
              </p>
              <div className="about-facts">
                <p>Jakarta, Indonesia</p>
                <p></p>
                <p>Institut Teknologi Bandung</p>
              </div>
              <a href="#experience" className="text-link">
                More About Me
              </a>
            </article>

          </section>

          <section className="section-head" id="projects">
            <div>
              <p className="section-kicker">Projects</p>
              <h2>Some things I've built</h2>
            </div>
            <Link to="/projects" className="text-link">
                View All Projects →
            </Link>
          </section>

          <section className="project-grid">
            {featuredProjects.map((project) => (
              <Link key={project.slug} to={`/project/${project.slug}`} className="project-card-link" aria-label={`Open detail ${project.title}`}>
                <article className="project-card static-project-card">
                  <img src={project.thumbnail} alt={project.title} className="project-thumb" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tags">
                      {project.tech.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="detail-link">Open Detail</span>
                  </div>
                </article>
              </Link>
            ))}
          </section>

          <section className="section-head skill-headline" id="skills">
            <div>
              <p className="section-kicker">Skills</p>
              <h2>Technologies I work with</h2>
            </div>
          </section>

          <section className="tech-chip-grid">
                {skills.map((skill) => (
                    <article key={skill.name} className="tech-chip">
                    <div className="skill-icon">
                        {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                    </article>
                ))}
            </section>
          <section className="section-head" id="experience">
            <div>
              <p className="section-kicker">Experience</p>
              <h2>My journey so far</h2>
            </div>
          </section>

          <section className="timeline">
            {experiences.map((exp) => (
              <article key={exp.title} className="timeline-item">
                <div className="timeline-head">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="org-name">{exp.org}</p>
                  </div>
                  <p className="time-pill">{exp.period}</p>
                </div>
                {exp.points.map((point) => (
                  <p key={point} className="timeline-point">
                    {point}
                  </p>
                ))}
              </article>
            ))}
          </section>

          <section className="cta-strip" id="contact">
            <div>
              <h2>Let's work together!</h2>
              <p>Have a project in mind or just want to say hi? Feel free to reach out.</p>
            </div>
            <div className="contact-cards">
              <article>
                <h3>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 13.07 1.5 6.5V18A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6.5L12 13.07Zm10.5-9.57A1.5 1.5 0 0 0 21 2.5H3A1.5 1.5 0 0 0 1.5 3.5v.84L12 10.93l10.5-6.59V3.5Z" />
                  </svg>
                  Email
                </h3>
                <p>orvin.andika@gmail.com</p>
              </article>
              <article>
                <h3>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.45 20.45H16.9V14.9c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.64H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0Z" />
                  </svg>
                  LinkedIn
                </h3>
                <p>linkedin.com/in/orvin-andika</p>
              </article>
              <article>
                <h3>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.38c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.08-.75.09-.74.09-.74 1.2.09 1.83 1.24 1.83 1.24 1.06 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23.96-.26 1.99-.4 3.01-.4 1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                  GitHub
                </h3>
                <p>github.com/orvin14</p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
