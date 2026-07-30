import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type RouteKey = "/" | "/project1" | "/project2" | "/project3";

type ProjectRoute = Exclude<RouteKey, "/">;

type ProjectInfo = {
  label: string;
  path: ProjectRoute;
  eyebrow: string;
  summary: string;
  detail: string;
  demo: string;
};

const PROJECTS: ProjectInfo[] = [
  {
    label: "Project1",
    path: "/project1",
    eyebrow: "Webflow Development",
    summary: "Editorial landing page with a soft, premium motion intro.",
    detail: "A warm, minimal project card built to match the source template with the same calm spacing and serif-led hierarchy.",
    demo: "Demo area for project one content, interactions, and presentation.",
  },
  {
    label: "Project2",
    path: "/project2",
    eyebrow: "Framer Development",
    summary: "A refined showcase layout with bold type and quiet rhythm.",
    detail: "The page keeps the same color family, letter spacing, and vertical balance so the second project feels part of the same system.",
    demo: "Demo area for project two interactions and supporting visuals.",
  },
  {
    label: "Project3",
    path: "/project3",
    eyebrow: "Product Design",
    summary: "Simple, high-contrast project presentation with room for details.",
    detail: "This route can host the final case study, demo states, and supporting copy while keeping the same warm palette.",
    demo: "Demo area for project three proof, motion, and content.",
  },
];

const SOCIALS = [
  { label: "in", path: "https://www.linkedin.com" },
  { label: "◎", path: "https://dribbble.com" },
  { label: "⦿", path: "https://www.instagram.com" },
];

function getRoute(pathname: string): RouteKey {
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
          <p className="hero-name">PROJECTS</p>
          <p className="hero-description">
            A focused set of three project studies presented with the same color template, spacing, and serif-led rhythm as the reference.
          </p>
          <p className="hero-description hero-description--small">Click a project to open its details and demo.</p>
        </div>

        <nav className="hero-nav" aria-label="Primary">
          {PROJECTS.map((project) => (
            <button key={project.label} type="button" className="hero-nav-item" onClick={() => onNavigate(project.path)}>
              {project.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </section>
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
        ) : (
          <motion.div key={route} className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            {sectionContent ? <SectionView project={sectionContent} onNavigate={navigate} /> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}