import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type RouteKey = "/" | "/projects" | "/about" | "/contact" | "/project1" | "/project2" | "/project3";

type ProjectRoute = Exclude<RouteKey, "/">;

type ProjectInfo = {
  label: string;
  path: ProjectRoute;
  eyebrow: string;
  summary: string;
  detail: string;
  demo: string;
  tags: string[];
};

const PROJECTS: ProjectInfo[] = [
  {
    label: "AI Resume Analyzer",
    path: "/project1",
    eyebrow: "AI-Powered Resume Evaluation",
    summary: "AI-powered resume evaluation platform that analyzes resumes, calculates ATS scores, and generates personalized improvement suggestions.",
    detail: "A full-stack AI-powered platform that evaluates resumes against job descriptions, computes ATS compatibility scores, and provides actionable, role-specific improvement suggestions powered by Gemini AI.",
    demo: "Demo area for AI Resume Analyzer — live analysis, ATS scoring, and improvement suggestions.",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
  },
  {
    label: "ChronoSync",
    path: "/project2",
    eyebrow: "Intelligent Productivity Platform",
    summary: "An intelligent productivity platform that schedules tasks using AI, manages notes, and visualizes weekly productivity analytics.",
    detail: "An intelligent productivity suite that uses Gemini AI to auto-schedule tasks, integrates a rich notes manager, and displays weekly analytics through clean, readable charts.",
    demo: "Demo area for ChronoSync — AI scheduling, note management, and productivity analytics.",
    tags: ["React", "Express", "MongoDB", "Gemini"],
  },
  {
    label: "Notes Manager",
    path: "/project3",
    eyebrow: "Containerized REST API",
    summary: "A containerized REST API deployed using Docker and Kubernetes, demonstrating modern backend deployment workflows.",
    detail: "A production-ready containerized REST API built with Node.js, packaged with Docker, and orchestrated via Kubernetes — showcasing real-world cloud deployment patterns.",
    demo: "Demo area for Notes Manager — API endpoints, container architecture, and Kubernetes orchestration.",
    tags: ["Node.js", "Docker", "Kubernetes"],
  },
];

const HOME_LABELS: Array<{ label: string; path: "/projects" | "/about" | "/contact" }> = [
  { label: "PROJECTS", path: "/projects" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const SOCIALS = [
  { label: "in", path: "https://www.linkedin.com" },
  { label: "◎", path: "https://dribbble.com" },
  { label: "⦿", path: "https://www.instagram.com" },
];

function getRoute(pathname: string): RouteKey {
  if (pathname === "/projects" || pathname === "/about" || pathname === "/contact") {
    return pathname;
  }

  if (pathname === "/project1" || pathname === "/project2" || pathname === "/project3") {
    return pathname;
  }

  return "/";
}

function useRoute() {
  const [route, setRoute] = useState<RouteKey>(() => getRoute(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setRoute(getRoute(window.location.pathname));

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path: RouteKey) => {
    if (window.location.pathname === path) {
      return;
    }

    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { navigate, route };
}

function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      {SOCIALS.map((social) => (
        <a key={social.label} className="social-link" href={social.path} target="_blank" rel="noreferrer">
          {social.label}
        </a>
      ))}
      <span className="rail-line" />
      <span className="rail-year">© 2025</span>
    </aside>
  );
}

function HomeView({ onNavigate }: { onNavigate: (path: RouteKey) => void }) {
  return (
    <section className="home-layout">
      <motion.div
        className="intro-wipe"
        aria-hidden="true"
        initial={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        animate={{ clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"], opacity: [1, 1, 0] }}
        transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1], times: [0, 0.78, 1] }}
      >
        <div className="intro-wipe-top" />
        <div className="intro-wipe-bottom" />
      </motion.div>

      <motion.div
        className="home-panel"
        initial={{ opacity: 0, filter: "blur(16px)", y: 18, scale: 1.012 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
        transition={{ duration: 1.9, ease: [0.2, 0.9, 0.15, 1], delay: 0.55 }}
      >
        <div className="home-copy-block">
          <p className="hero-name">LAUREN WALLER</p>
          <p className="hero-description">
            Award-winning Product Designer working full-time at Detail Technologies - winner of Apple&apos;s iPad App of the Year 2025.
          </p>
          <p className="hero-description hero-description--small">Framer Developer and Partner.</p>
        </div>

        <nav className="hero-nav" aria-label="Primary">
          {HOME_LABELS.map((item) => (
            <button key={item.label} type="button" className="hero-nav-item" onClick={() => onNavigate(item.path)}>
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}

function ProjectsView({ onNavigate }: { onNavigate: (path: RouteKey) => void }) {
  return (
    <motion.section
      className="section-layout section-layout--projects"
      initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.15, 1] }}
    >
      <div className="section-copy">
        
        <span className="section-eyebrow">PROJECTS</span>
        <h2 className="projects-quote">
          Every project started with a real problem, not just an idea. From AI-powered applications to cloud deployments, these are the products I&apos;ve designed, built, and deployed from scratch.
        </h2>
        <p className="projects-subtext">
          Each project showcases the complete development journey—from identifying a problem and designing the architecture to implementing, deploying, and refining the final product. I focus on writing clean code, building practical features, and understanding the engineering decisions behind every solution.
        </p>
      </div>

      <div className="project-card-row">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.label}
            role="button"
            tabIndex={0}
            className="project-card"
            onClick={() => onNavigate(project.path)}
            onKeyDown={(e) => e.key === "Enter" && onNavigate(project.path)}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.68, ease: [0.2, 0.9, 0.15, 1], delay: index * 0.14 }}
          >
            <span className="project-card-eyebrow">{project.eyebrow}</span>
            <strong className="project-card-title">{project.label}</strong>
            <span className="project-card-summary">{project.summary}</span>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <span className="project-card-cta">&rarr; View Case Study</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function SimpleView({ title, body, onNavigate }: { title: string; body: string; onNavigate: (path: RouteKey) => void }) {
  return (
    <motion.section
      className="section-layout"
      initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.15, 1] }}
    >
      <div className="section-copy">
        <button type="button" className="back-link" onClick={() => onNavigate("/")}>
          BACK HOME
        </button>
        <span className="section-eyebrow">INFO</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </motion.section>
  );
}

function SectionView({ project, onNavigate }: { project: ProjectInfo; onNavigate: (path: RouteKey) => void }) {
  return (
    <motion.section
      className="section-layout"
      initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.15, 1] }}
    >
      <div className="section-copy">
        <button type="button" className="back-link" onClick={() => onNavigate("/")}>
          BACK PROJECTS
        </button>
        <span className="section-eyebrow">{project.eyebrow}</span>
        <h1>{project.label}</h1>
        <p>{project.detail}</p>
      </div>

      <div className="section-card-row">
        <article className="section-card">
          <span>Summary</span>
          <strong>{project.summary}</strong>
        </article>
        <article className="section-card">
          <span>Demo</span>
          <strong>{project.demo}</strong>
        </article>
      </div>
    </motion.section>
  );
}

export default function App() {
  const { navigate, route } = useRoute();

  const sectionContent = useMemo(() => PROJECTS.find((project) => project.path === route) ?? null, [route]);

  return (
    <main className="app-shell">
      <div className="page-bg page-bg--gold" aria-hidden="true" />
      <div className="page-bg page-bg--ink" aria-hidden="true" />
      <SocialRail />

      <AnimatePresence mode="wait">
        {route === "/" ? (
          <motion.div key="home" className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            <HomeView onNavigate={navigate} />
          </motion.div>
        ) : route === "/projects" ? (
          <motion.div key="projects" className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            <ProjectsView onNavigate={navigate} />
          </motion.div>
        ) : route === "/about" ? (
          <motion.div key="about" className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            <SimpleView
              title="ABOUT"
              body="Keep the about section here. The project list stays on the PROJECTS page and the detail demos stay on the project routes."
              onNavigate={navigate}
            />
          </motion.div>
        ) : route === "/contact" ? (
          <motion.div key="contact" className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            <SimpleView
              title="CONTACT"
              body="Keep the contact section here. The editorial palette and spacing stay consistent across all pages."
              onNavigate={navigate}
            />
          </motion.div>
        ) : (
          <motion.div key={route} className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            {sectionContent ? <SectionView project={sectionContent} onNavigate={navigate} /> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}