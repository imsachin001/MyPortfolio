import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════════════════ */

type RouteKey =
  | "/"
  | "/projects"
  | "/about"
  | "/contact"
  | "/project1"
  | "/project2"
  | "/project3";

type TechItem    = { name: string; icon: string; desc: string };
type ArchStep    = { label: string; icon: string };
type Challenge   = { title: string; problem: string; solution: string };
type Result      = { value: string; label: string };
type GalleryItem = { label: string; desc: string };
type SolutionStep = { step: string; title: string; desc: string };

type ProjectDetail = {
  route: RouteKey;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  heroSubtitle: string;
  heroTags: string[];
  githubUrl: string;
  liveUrl: string;

  /* card data */
  cardEyebrow: string;
  cardSummary: string;
  cardTags: string[];

  /* sections */
  idea: string;
  myRole: string;
  overview: string;
  problemHeading: string;
  problemBody: string;
  problemPills: string[];
  solutionHeading: string;
  solutionSteps: SolutionStep[];
  techStack: TechItem[];
  archSteps: ArchStep[];
  features: string[];
  challenges: Challenge[];
  results: Result[];
  gallery: GalleryItem[];
  technicalHighlights: string[];
  learned: string[];
  lessonsLearned: string;
  nextSteps: string[];
};

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════════════════════════════════════════ */

const PROJECT_DATA: ProjectDetail[] = [
  /* ── PROJECT 1: AI Resume Analyzer ───────────────────────────────────── */
  {
    route: "/project1",
    eyebrow: "Case Study · AI-Powered Resume Evaluation",
    titleLine1: "AI Resume",
    titleLine2: "Analyzer",
    heroSubtitle:
      "An AI-powered resume evaluation platform that analyzes resumes, matches them against job descriptions, generates ATS scores, and provides actionable improvement suggestions.",
    heroTags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
    githubUrl: "https://github.com",
    liveUrl: "#",

    cardEyebrow: "AI-Powered Resume Evaluation",
    cardSummary:
      "AI-powered resume evaluation platform that analyzes resumes, calculates ATS scores, and generates personalized improvement suggestions.",
    cardTags: ["React", "Node.js", "MongoDB", "Gemini AI"],

    idea:
      "The idea came after spending hours tweaking my own resume with no clear direction. I realized the problem wasn't just about writing well — it was about understanding what Applicant Tracking Systems actually look for. I wanted to build the tool I wished existed: one that gives honest, role-specific, AI-powered feedback in seconds rather than generic tips behind a paywall.",

    myRole:
      "I designed, developed, tested, and deployed every layer of this application end-to-end — from the React UI and Express REST API to the PDF parsing pipeline, Gemini AI integration, MongoDB schema design, Clerk authentication setup, and full deployment on Vercel and Render.",

    overview:
      "Instead of writing resumes blindly and hoping for callbacks, I wanted to build a platform that provides intelligent resume feedback in seconds. The application combines ATS scoring, AI analysis, and keyword matching to help candidates improve their resumes before applying for jobs.",

    problemHeading: "Recruiters spend only a few seconds reviewing resumes.",
    problemBody:
      "Many great candidates get rejected simply because their resumes aren't ATS-optimised. Existing resume checkers either give generic advice, provide inaccurate ATS scores, or hide everything behind a paid subscription. I wanted to create an intelligent, accessible alternative.",
    problemPills: ["Generic advice", "Inaccurate ATS scores", "Paywalled insights"],

    solutionHeading: "A complete full-stack AI pipeline from upload to analysis.",
    solutionSteps: [
      { step: "01", title: "Upload Resume", desc: "PDF parsing extracts structured text from any resume template." },
      { step: "02", title: "Add Job Description", desc: "Optional JD input enables targeted, role-specific ATS scoring." },
      { step: "03", title: "AI Analysis", desc: "Gemini evaluates content, tone, keywords, and section gaps." },
      { step: "04", title: "Receive Feedback", desc: "Section-wise suggestions and a detailed ATS score instantly." },
    ],

    techStack: [
      { name: "React",      icon: "⚛",  desc: "Frontend UI" },
      { name: "Node.js",    icon: "⬡",  desc: "Runtime" },
      { name: "Express",    icon: "⚡",  desc: "API Server" },
      { name: "MongoDB",    icon: "🍃", desc: "Database" },
      { name: "Clerk",      icon: "🔐", desc: "Auth" },
      { name: "Gemini API", icon: "✦",  desc: "AI Engine" },
      { name: "Vercel",     icon: "▲",  desc: "Frontend Host" },
      { name: "Render",     icon: "☁",  desc: "Backend Host" },
    ],

    archSteps: [
      { label: "User",               icon: "👤" },
      { label: "React Frontend",     icon: "⚛" },
      { label: "Express API",        icon: "⚡" },
      { label: "PDF Parser",         icon: "📄" },
      { label: "Gemini AI",          icon: "✦" },
      { label: "MongoDB",            icon: "🍃" },
      { label: "Analysis Dashboard", icon: "📊" },
    ],

    features: [
      "Secure Authentication using Clerk",
      "Resume Upload & PDF Parsing",
      "AI Analysis using Gemini",
      "ATS Compatibility Scoring",
      "Keyword Gap Detection",
      "Section-wise Feedback",
      "Resume History Tracking",
      "Interactive Dashboard",
    ],

    challenges: [
      {
        title: "Accurate ATS Score",
        problem:
          "Initially the ATS score barely changed for different job descriptions because my matching algorithm was too generic.",
        solution:
          "I redesigned the scoring logic by separating Resume Quality, JD Match, Missing Keywords, and Action Verbs into distinct weighted modules — producing far more realistic, role-specific scores.",
      },
      {
        title: "PDF Parsing",
        problem:
          "Different resume templates produced wildly inconsistent extracted text, breaking Gemini's analysis.",
        solution:
          "I added structured pre-processing and validation layers before sending data to Gemini, normalizing whitespace, layout artifacts, and encoding issues.",
      },
      {
        title: "Deployment",
        problem:
          "Faced CORS issues and environment variable problems while deploying frontend on Vercel and backend on Render.",
        solution:
          "Resolved using strict CORS configuration with origin whitelisting and secure environment variable management on both platforms.",
      },
    ],

    results: [
      { value: "50–55s",  label: "Average Analysis Time" },
      { value: "100%",    label: "Automated ATS Evaluation" },
      { value: "∞",       label: "Resume History Stored" },
      { value: "256-bit", label: "Secure Authentication" },
    ],

    gallery: [
      { label: "Login Page",          desc: "Clerk-powered secure authentication with a clean, branded sign-in flow." },
      { label: "Upload Resume",       desc: "Drag-and-drop resume upload with optional job description field for targeted analysis." },
      { label: "Analysis Dashboard",  desc: "A rich dashboard displaying section-wise AI feedback and improvement suggestions." },
      { label: "ATS Score",           desc: "Real-time ATS compatibility score with keyword gap visualization." },
      { label: "Suggestions",         desc: "Actionable, role-specific improvement suggestions generated by Gemini AI." },
    ],

    technicalHighlights: [
      "Gemini AI integration via streaming API for real-time resume feedback",
      "Custom ATS scoring engine with weighted modules for resume quality, JD match, keyword gaps, and action verbs",
      "PDF text extraction with multi-layer normalization before AI processing",
      "Clerk authentication with JWT-protected Express routes",
      "Persistent resume history stored per-user in MongoDB with full analysis snapshots",
    ],

    learned: [
      "Building scalable full-stack APIs",
      "AI integration with Gemini",
      "JWT-based authentication flows",
      "PDF parsing and text normalization",
      "Frontend state management with React",
      "Cross-platform deployment (Vercel + Render)",
      "Debugging production CORS and env issues",
      "System design and architecture thinking",
    ],

    lessonsLearned:
      "I'd invest more time upfront in designing the ATS scoring algorithm rather than iterating post-launch. I'd also add a proper testing suite from the beginning — unit tests for the scoring logic and integration tests for the AI pipeline would have saved significant debugging time. In a future version, I'd separate the AI analysis into a queue-based worker to handle load more gracefully.",

    nextSteps: [
      "Reduce AI response time with streaming output and caching",
      "Add support for multiple resume versions with diff comparison",
      "Improve ATS scoring with industry-specific keyword databases",
      "Integrate LinkedIn profile import for resume auto-population",
      "Add a cover letter generator powered by the same Gemini pipeline",
    ],
  },

  /* ── PROJECT 2: ChronoSync ────────────────────────────────────────────── */
  {
    route: "/project2",
    eyebrow: "Case Study · Intelligent Productivity Platform",
    titleLine1: "ChronoSync",
    titleLine2: "",
    heroSubtitle:
      "AI-powered productivity platform that intelligently schedules tasks, manages notes, and visualizes productivity analytics.",
    heroTags: ["React", "Node.js", "MongoDB", "Gemini"],
    githubUrl: "https://github.com",
    liveUrl: "#",

    cardEyebrow: "Intelligent Productivity Platform",
    cardSummary:
      "An intelligent productivity platform that schedules tasks using AI, manages notes, and visualizes weekly productivity analytics.",
    cardTags: ["React", "Express", "MongoDB", "Gemini"],

    idea:
      "During a particularly overwhelming semester, I noticed I was spending more time deciding what to work on than actually working. Traditional to-do apps just stored tasks — they never told me what to tackle first. I wanted to build a planner that actively helps organize the day using AI priority scoring, not just passive list management.",

    myRole:
      "I designed, developed, tested, and deployed ChronoSync end-to-end as a solo project — covering the React frontend, Express API, MongoDB schema, Gemini AI scheduling integration, analytics dashboard, CRUD operations, and authentication system.",

    overview:
      "ChronoSync helps users organize their day by automatically prioritizing tasks using AI while also providing a lightweight notes manager and weekly productivity insights. The platform evaluates urgency, deadlines, and importance to generate an optimized execution order for the day.",

    problemHeading: "People waste time deciding what task to tackle next.",
    problemBody:
      "Traditional to-do apps simply store tasks without helping users prioritize. People often don't know which tasks are truly urgent, important, or time-sensitive — leading to decision fatigue and poor planning. I wanted an assistant that actively helps plan the day, not just record it.",
    problemPills: ["Decision fatigue", "No smart prioritization", "No productivity insights"],

    solutionHeading: "An AI scheduler that evaluates urgency, priority, and deadlines.",
    solutionSteps: [
      { step: "01", title: "Add Tasks",        desc: "Users input tasks with deadlines, priority levels, and tags." },
      { step: "02", title: "AI Scheduling",    desc: "Gemini evaluates urgency, importance, and deadline to generate an optimized execution order." },
      { step: "03", title: "Notes Manager",    desc: "Integrated lightweight notes system for capturing ideas alongside tasks." },
      { step: "04", title: "Analytics",        desc: "Weekly dashboard tracks completed, pending, and overdue tasks with visual charts." },
    ],

    techStack: [
      { name: "React",    icon: "⚛",  desc: "Frontend UI" },
      { name: "Node.js",  icon: "⬡",  desc: "Runtime" },
      { name: "Express",  icon: "⚡",  desc: "API Server" },
      { name: "MongoDB",  icon: "🍃", desc: "Database" },
      { name: "Gemini",   icon: "✦",  desc: "AI Scheduler" },
      { name: "Chart.js", icon: "📈", desc: "Analytics" },
      { name: "JWT",      icon: "🔐", desc: "Auth" },
      { name: "Render",   icon: "☁",  desc: "Deployment" },
    ],

    archSteps: [
      { label: "User",             icon: "👤" },
      { label: "React Frontend",   icon: "⚛" },
      { label: "Express API",      icon: "⚡" },
      { label: "Gemini AI",        icon: "✦" },
      { label: "MongoDB",          icon: "🍃" },
      { label: "Analytics Engine", icon: "📈" },
      { label: "Dashboard",        icon: "📊" },
    ],

    features: [
      "AI Task Prioritization via Gemini",
      "Optimized Daily Schedule Generation",
      "Notes Manager with CRUD",
      "Weekly Analytics Dashboard",
      "Completed / Pending / Overdue Tracking",
      "JWT Authentication",
      "Responsive Design",
      "Persistent Data via MongoDB",
    ],

    challenges: [
      {
        title: "Smart Scheduling Logic",
        problem:
          "Scheduling wasn't as simple as sorting by deadline. Different tasks needed different weight for urgency, importance, and time sensitivity — a naive sort produced unhelpful schedules.",
        solution:
          "I experimented with multiple priority formulas, eventually settling on a weighted composite score incorporating deadline proximity, user-defined priority, and Gemini's semantic assessment of task importance.",
      },
      {
        title: "AI Response Consistency",
        problem:
          "Gemini's scheduling output was sometimes inconsistent in format, making it hard to parse reliably into structured task orders.",
        solution:
          "I introduced a structured prompt template that instructs Gemini to return responses in a fixed JSON schema, with a fallback parser to handle edge cases gracefully.",
      },
      {
        title: "Analytics Accuracy",
        problem:
          "Tracking productivity across time zones and partial completions produced misleading dashboard numbers.",
        solution:
          "I normalised all timestamps to UTC on the backend and introduced task completion timestamps, enabling precise daily and weekly breakdowns in the analytics engine.",
      },
    ],

    results: [
      { value: "↓60%",  label: "Planning Time Reduced" },
      { value: "3-in-1", label: "Tasks, Notes & Analytics" },
      { value: "1 sem",  label: "Used Personally" },
      { value: "Real-time", label: "AI Schedule Generation" },
    ],

    gallery: [
      { label: "Dashboard",        desc: "Central hub showing today's AI-prioritized task list alongside quick-access notes." },
      { label: "AI Scheduler",     desc: "Gemini-powered scheduling that generates an optimized execution order for the day." },
      { label: "Notes Manager",    desc: "Lightweight editor for capturing ideas, linked seamlessly to tasks." },
      { label: "Analytics",        desc: "Weekly productivity chart tracking completed, pending, and overdue tasks." },
      { label: "Task Detail",      desc: "Individual task view with priority, deadline, tags, and AI-suggested slot." },
    ],

    technicalHighlights: [
      "Gemini AI integration with structured JSON prompt templates for deterministic scheduling output",
      "Composite priority scoring algorithm weighting deadline proximity, user priority, and AI importance assessment",
      "Chart.js weekly analytics dashboard with real-time data aggregation",
      "JWT-protected Express routes with role-aware middleware",
      "MongoDB aggregation pipelines for productivity metric computation",
    ],

    learned: [
      "Building scalable APIs with Express",
      "AI integration and prompt engineering",
      "Authentication with JWT",
      "Frontend state management",
      "Data visualization with Chart.js",
      "Deployment and environment management",
      "Debugging AI response inconsistencies",
      "System design thinking",
    ],

    lessonsLearned:
      "I'd spend more time on the AI prompt design upfront — getting consistent, parseable output from Gemini required significant trial and error that a well-defined prompt template could have avoided. I'd also build the analytics engine earlier; it ended up being more complex than anticipated and shaped the data schema in ways I hadn't planned for initially.",

    nextSteps: [
      "Add calendar integration (Google Calendar / iCal sync)",
      "Support recurring tasks with smart rescheduling",
      "Introduce collaborative workspaces for team planning",
      "Build a mobile app with push notifications for daily schedule reminders",
      "Improve AI scheduler with user feedback loop — learning personal work patterns over time",
    ],
  },

  /* ── PROJECT 3: Notes Manager ─────────────────────────────────────────── */
  {
    route: "/project3",
    eyebrow: "Case Study · Containerized REST API & DevOps",
    titleLine1: "Notes",
    titleLine2: "Manager",
    heroSubtitle:
      "A RESTful Notes application built to learn Docker, containerization, and Kubernetes deployment — focused on real-world DevOps workflows.",
    heroTags: ["Node.js", "Express", "Docker", "Kubernetes"],
    githubUrl: "https://github.com",
    liveUrl: "#",

    cardEyebrow: "Containerized REST API",
    cardSummary:
      "A containerized REST API deployed using Docker and Kubernetes, demonstrating modern backend deployment workflows.",
    cardTags: ["Node.js", "Docker", "Kubernetes"],

    idea:
      "After building several full-stack applications, I realized I had a gap in understanding how modern apps actually run in production. I'd heard about Docker and Kubernetes but never built with them. I chose a familiar domain — a notes API — to minimize complexity on the application side, and focused entirely on mastering the infrastructure layer from containerization through Kubernetes orchestration.",

    myRole:
      "I designed, developed, tested, and deployed the entire application end-to-end as a solo learning project — writing the Express REST API, authoring the Dockerfile and Kubernetes YAML manifests, building and pushing the Docker image, and deploying the containerized application on a local Kubernetes cluster using Minikube.",

    overview:
      "Rather than focusing on frontend features, this project was created to understand how modern backend applications are deployed using containers and Kubernetes. The Notes API is the vehicle — the real subject is containerization, orchestration, and the DevOps pipeline connecting code to a running, scalable service.",

    problemHeading: "Deploying applications manually is fragile and inconsistent.",
    problemBody:
      "Manual deployment becomes increasingly difficult as systems grow. Without containerization, applications behave differently across development, staging, and production environments — leading to the classic 'works on my machine' problem. I wanted to understand how containerization solves this at the infrastructure level.",
    problemPills: ["Environment inconsistency", "Manual deployment complexity", "No orchestration"],

    solutionHeading: "Containerize the API and orchestrate it with Kubernetes.",
    solutionSteps: [
      { step: "01", title: "Build the API",    desc: "A clean RESTful Notes API with Express — create, read, update, delete notes." },
      { step: "02", title: "Dockerize",        desc: "Author a Dockerfile to package the app into a portable, reproducible image." },
      { step: "03", title: "Push Image",       desc: "Build and push the Docker image to a container registry." },
      { step: "04", title: "Deploy on K8s",    desc: "Write Kubernetes manifests to deploy the app as a Pod, expose it via a ClusterIP Service, and manage it with a Deployment." },
    ],

    techStack: [
      { name: "Node.js",     icon: "⬡",  desc: "Runtime" },
      { name: "Express",     icon: "⚡",  desc: "REST API" },
      { name: "Docker",      icon: "🐳", desc: "Containerization" },
      { name: "Kubernetes",  icon: "☸",  desc: "Orchestration" },
      { name: "Minikube",    icon: "🖥",  desc: "Local K8s Cluster" },
      { name: "YAML",        icon: "📄", desc: "K8s Manifests" },
      { name: "kubectl",     icon: "⌨",  desc: "CLI Tool" },
      { name: "Docker Hub",  icon: "📦", desc: "Image Registry" },
    ],

    archSteps: [
      { label: "Express App",         icon: "⚡" },
      { label: "Docker Image",        icon: "🐳" },
      { label: "Docker Container",    icon: "📦" },
      { label: "Kubernetes Pod",      icon: "☸" },
      { label: "ClusterIP Service",   icon: "🔗" },
      { label: "Browser",             icon: "🌐" },
    ],

    features: [
      "RESTful CRUD Notes API",
      "Docker Image with Dockerfile",
      "Kubernetes Deployment Manifest",
      "ClusterIP Service Configuration",
      "Pod Health Management",
      "Container Registry Push",
      "Minikube Local Cluster",
      "YAML-driven Infrastructure",
    ],

    challenges: [
      {
        title: "Writing Kubernetes Manifests",
        problem:
          "Kubernetes YAML configuration is verbose and unforgiving — a single misconfigured field caused silent failures that were difficult to diagnose without deep knowledge of the K8s spec.",
        solution:
          "I worked through the official Kubernetes documentation systematically, validating each manifest with kubectl describe and kubectl logs to isolate and fix configuration errors step by step.",
      },
      {
        title: "Pod-to-Service Networking",
        problem:
          "Understanding how Pods communicate through Services — and why ClusterIP doesn't expose the app externally without port-forwarding — was conceptually confusing initially.",
        solution:
          "I built a mental model by mapping the networking flow: Pod → Service → ClusterIP → kubectl port-forward → localhost. Visualizing each hop made the networking model click.",
      },
      {
        title: "Image Pull Errors",
        problem:
          "Kubernetes couldn't pull the Docker image due to registry authentication and incorrect image tag references in the manifest.",
        solution:
          "Fixed by verifying the exact image name and tag format, ensuring the image was pushed successfully to Docker Hub, and confirming the Kubernetes imagePullPolicy was set correctly.",
      },
    ],

    results: [
      { value: "✓",       label: "Deployed on Kubernetes" },
      { value: "6+",      label: "K8s Concepts Mastered" },
      { value: "Minikube", label: "Local Cluster Platform" },
      { value: "0→Pod",   label: "Code to Cluster Pipeline" },
    ],

    gallery: [
      { label: "Dockerfile",          desc: "Multi-step Dockerfile packaging the Express app into a minimal production image." },
      { label: "K8s Deployment",      desc: "Kubernetes Deployment manifest defining replica count, image, and container config." },
      { label: "ClusterIP Service",   desc: "Service manifest exposing the Pod within the cluster via ClusterIP." },
      { label: "kubectl Output",      desc: "Live kubectl get pods and kubectl describe outputs confirming healthy deployment." },
      { label: "API Response",        desc: "Browser output showing the Notes API running successfully inside the Kubernetes cluster." },
    ],

    technicalHighlights: [
      "Authored a production-grade Dockerfile with multi-stage awareness and minimal image footprint",
      "Configured Kubernetes Deployment, Pod, and ClusterIP Service manifests from scratch in YAML",
      "Deployed and managed the application lifecycle using kubectl on a Minikube local cluster",
      "Debugged image pull errors and Pod scheduling failures using kubectl describe and logs",
      "Mapped the full networking path from container port through ClusterIP Service to localhost via port-forward",
    ],

    learned: [
      "Docker Images and Containers",
      "Writing Dockerfiles",
      "Kubernetes Pods and Deployments",
      "ClusterIP Services and Networking",
      "YAML manifest configuration",
      "kubectl CLI commands",
      "Container registry workflows",
      "Infrastructure-as-Code thinking",
    ],

    lessonsLearned:
      "I'd introduce persistent storage earlier using Kubernetes Volumes and PersistentVolumeClaims — the current deployment is stateless and loses data on Pod restart. I'd also explore Helm charts to manage manifest complexity at scale, and set up a proper CI/CD pipeline to automate image builds and deployments rather than running kubectl commands manually.",

    nextSteps: [
      "Add persistent storage with Kubernetes Volumes and PersistentVolumeClaims",
      "Set up a CI/CD pipeline (GitHub Actions) to automate Docker builds and Kubernetes deployments",
      "Deploy to a managed Kubernetes cluster on a cloud provider (GKE or EKS)",
      "Add resource limits, liveness probes, and readiness probes to the Deployment manifest",
      "Explore Helm charts to manage multi-environment Kubernetes configurations",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECTS LIST (for the project cards page)
═══════════════════════════════════════════════════════════════════════════ */

const HOME_LABELS: Array<{ label: string; path: "/projects" | "/about" | "/contact" }> = [
  { label: "PROJECTS", path: "/projects" },
  { label: "ABOUT",    path: "/about" },
  { label: "CONTACT",  path: "/contact" },
];

const SOCIALS = [
  { label: "in", path: "https://www.linkedin.com" },
  { label: "◎",  path: "https://dribbble.com" },
  { label: "⦿",  path: "https://www.instagram.com" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   ROUTING
═══════════════════════════════════════════════════════════════════════════ */

function getRoute(pathname: string): RouteKey {
  const valid: RouteKey[] = ["/projects", "/about", "/contact", "/project1", "/project2", "/project3"];
  if (valid.includes(pathname as RouteKey)) return pathname as RouteKey;
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
    if (window.location.pathname === path) return;
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { navigate, route };
}

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED ANIMATION HELPER
═══════════════════════════════════════════════════════════════════════════ */

function fadeUp(delay = 0) {
  return {
    initial:     { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport:    { once: true, amount: 0.1 },
    transition:  { duration: 0.72, ease: [0.2, 0.9, 0.15, 1], delay },
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED CHROME
═══════════════════════════════════════════════════════════════════════════ */

function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      {SOCIALS.map((s) => (
        <a key={s.label} className="social-link" href={s.path} target="_blank" rel="noreferrer">
          {s.label}
        </a>
      ))}
      <span className="rail-line" />
      <span className="rail-year">© 2025</span>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME VIEW
═══════════════════════════════════════════════════════════════════════════ */

function HomeView({ onNavigate }: { onNavigate: (p: RouteKey) => void }) {
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
            Award-winning Product Designer working full-time at Detail Technologies — winner of Apple&apos;s iPad App of the Year 2025.
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

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECTS LIST VIEW
═══════════════════════════════════════════════════════════════════════════ */

function ProjectsView({ onNavigate }: { onNavigate: (p: RouteKey) => void }) {
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
          Every project started with a real problem, not just an idea. From AI-powered applications to cloud
          deployments, these are the products I&apos;ve designed, built, and deployed from scratch.
        </h2>
        <p className="projects-subtext">
          Each project showcases the complete development journey — from identifying a problem and designing the
          architecture to implementing, deploying, and refining the final product.
        </p>
      </div>

      <div className="project-card-row">
        {PROJECT_DATA.map((p, index) => (
          <motion.div
            key={p.route}
            role="button"
            tabIndex={0}
            className="project-card"
            onClick={() => onNavigate(p.route)}
            onKeyDown={(e) => e.key === "Enter" && onNavigate(p.route)}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.68, ease: [0.2, 0.9, 0.15, 1], delay: index * 0.14 }}
          >
            <span className="project-card-eyebrow">{p.cardEyebrow}</span>
            <strong className="project-card-title">{p.titleLine1} {p.titleLine2}</strong>
            <span className="project-card-summary">{p.cardSummary}</span>
            <div className="project-card-tags">
              {p.cardTags.map((tag) => (
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

/* ═══════════════════════════════════════════════════════════════════════════
   SIMPLE VIEWS (About / Contact)
═══════════════════════════════════════════════════════════════════════════ */

function SimpleView({ title, body, onNavigate }: { title: string; body: string; onNavigate: (p: RouteKey) => void }) {
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

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED PROJECT DETAIL VIEW  (used by all three projects)
═══════════════════════════════════════════════════════════════════════════ */

function ArchDiagram({ steps }: { steps: ArchStep[] }) {
  return (
    <div className="pd-arch">
      {steps.map((step, i) => (
        <div key={step.label} className="pd-arch-row">
          <motion.div
            className="pd-arch-node"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
          >
            <span className="pd-arch-icon">{step.icon}</span>
            <span className="pd-arch-label">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              className="pd-arch-arrow"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.09 + 0.25 }}
            >
              ↓
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectDetailView({ data, onNavigate }: { data: ProjectDetail; onNavigate: (p: RouteKey) => void }) {
  return (
    <motion.div
      className="pd-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      {/* ── Topbar ── */}
      <div className="pd-topbar">
        <button className="pd-back" onClick={() => onNavigate("/projects")}>
          ← Back to Projects
        </button>
      </div>

      {/* ══ HERO ══ */}
      <section className="pd-hero">
        <motion.div className="pd-hero-inner" {...fadeUp(0.1)}>
          <span className="pd-hero-eyebrow">{data.eyebrow}</span>
          <h1 className="pd-hero-title">
            {data.titleLine1}<br />{data.titleLine2}
          </h1>
          <p className="pd-hero-subtitle">{data.heroSubtitle}</p>
          <div className="pd-hero-tags">
            {data.heroTags.map((t) => (
              <span key={t} className="pd-hero-tag">{t}</span>
            ))}
          </div>
        </motion.div>
        <div className="pd-hero-glow" aria-hidden="true" />
      </section>

      {/* ══ THE IDEA ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">The Idea</span>
          <p className="pd-body">{data.idea}</p>
        </motion.div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Overview</span>
          <p className="pd-body">{data.overview}</p>
        </motion.div>
      </section>

      {/* ══ MY ROLE ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">My Role</span>
          <div className="pd-role-card">
            <span className="pd-role-badge">Solo · End-to-End</span>
            <p className="pd-body">{data.myRole}</p>
          </div>
        </motion.div>
      </section>

      {/* ══ PROBLEM ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">The Problem</span>
          <h2 className="pd-heading">{data.problemHeading}</h2>
          <p className="pd-body pd-body--muted">{data.problemBody}</p>
          <div className="pd-problem-pills">
            {data.problemPills.map((pill) => (
              <div key={pill} className="pd-pill pd-pill--bad">{pill}</div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ SOLUTION ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">My Solution</span>
          <h2 className="pd-heading">{data.solutionHeading}</h2>
          <div className="pd-solution-grid">
            {data.solutionSteps.map((s) => (
              <motion.div className="pd-solution-card" key={s.step} {...fadeUp(0.08)}>
                <span className="pd-solution-step">{s.step}</span>
                <strong className="pd-solution-title">{s.title}</strong>
                <p className="pd-solution-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Tech Stack</span>
          <div className="pd-tech-grid">
            {data.techStack.map((t, i) => (
              <motion.div className="pd-tech-card" key={t.name} {...fadeUp(i * 0.055)}>
                <span className="pd-tech-icon">{t.icon}</span>
                <strong className="pd-tech-name">{t.name}</strong>
                <span className="pd-tech-desc">{t.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ ARCHITECTURE ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Architecture</span>
          <h2 className="pd-heading">End-to-end data flow</h2>
          <ArchDiagram steps={data.archSteps} />
        </motion.div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Key Features</span>
          <div className="pd-features-grid">
            {data.features.map((f, i) => (
              <motion.div className="pd-feature-item" key={f} {...fadeUp(i * 0.05)}>
                <span className="pd-feature-check">✔</span>
                <span className="pd-feature-text">{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ CHALLENGES ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Challenges</span>
          <h2 className="pd-heading">Real problems, honest solutions.</h2>
          <div className="pd-challenges">
            {data.challenges.map((c, i) => (
              <motion.div className="pd-challenge-card" key={c.title} {...fadeUp(i * 0.1)}>
                <div className="pd-challenge-header">
                  <span className="pd-challenge-num">0{i + 1}</span>
                  <strong className="pd-challenge-title">{c.title}</strong>
                </div>
                <div className="pd-challenge-body">
                  <div className="pd-challenge-col">
                    <span className="pd-challenge-badge pd-challenge-badge--problem">Problem</span>
                    <p className="pd-body pd-body--muted">{c.problem}</p>
                  </div>
                  <div className="pd-challenge-divider" />
                  <div className="pd-challenge-col">
                    <span className="pd-challenge-badge pd-challenge-badge--solution">Solution</span>
                    <p className="pd-body pd-body--muted">{c.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ RESULTS ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Results</span>
          <div className="pd-results-grid">
            {data.results.map((r, i) => (
              <motion.div className="pd-result-card" key={r.label} {...fadeUp(i * 0.09)}>
                <span className="pd-result-value">{r.value}</span>
                <span className="pd-result-label">{r.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ TECHNICAL HIGHLIGHTS ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Technical Highlights</span>
          <h2 className="pd-heading">Standout implementation details.</h2>
          <div className="pd-highlights">
            {data.technicalHighlights.map((h, i) => (
              <motion.div className="pd-highlight-item" key={i} {...fadeUp(i * 0.06)}>
                <span className="pd-highlight-num">0{i + 1}</span>
                <p className="pd-body pd-body--muted">{h}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ GALLERY ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Gallery</span>
          <h2 className="pd-heading">Screenshots &amp; Screens</h2>
          <div className="pd-gallery">
            {data.gallery.map((g, i) => (
              <motion.div className="pd-gallery-card" key={g.label} {...fadeUp(i * 0.07)}>
                <div className="pd-gallery-thumb">
                  <div className="pd-gallery-mockup">
                    <div className="pd-gallery-mockup-bar">
                      <span /><span /><span />
                    </div>
                    <div className="pd-gallery-mockup-screen">
                      <span className="pd-gallery-screen-label">{g.label}</span>
                    </div>
                  </div>
                </div>
                <div className="pd-gallery-info">
                  <strong className="pd-gallery-title">{g.label}</strong>
                  <p className="pd-gallery-desc">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ WHAT I LEARNED ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">What I Learned</span>
          <h2 className="pd-heading">Skills built through building.</h2>
          <div className="pd-learned-grid">
            {data.learned.map((item, i) => (
              <motion.div className="pd-learned-item" key={item} {...fadeUp(i * 0.05)}>
                <span className="pd-learned-dot" />
                <span className="pd-learned-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ LESSONS LEARNED ══ */}
      <section className="pd-section pd-section--alt">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Lessons Learned</span>
          <h2 className="pd-heading">What I&apos;d do differently.</h2>
          <p className="pd-body">{data.lessonsLearned}</p>
        </motion.div>
      </section>

      {/* ══ NEXT STEPS ══ */}
      <section className="pd-section">
        <motion.div className="pd-section-inner" {...fadeUp()}>
          <span className="pd-label">Next Steps</span>
          <h2 className="pd-heading">Planned enhancements.</h2>
          <div className="pd-next-steps">
            {data.nextSteps.map((step, i) => (
              <motion.div className="pd-next-item" key={i} {...fadeUp(i * 0.07)}>
                <span className="pd-next-arrow">→</span>
                <p className="pd-body pd-body--muted">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ CTA ══ */}
      <section className="pd-section pd-section--cta">
        <motion.div className="pd-section-inner pd-cta-inner" {...fadeUp()}>
          <span className="pd-label">Explore the Project</span>
          <h2 className="pd-heading pd-heading--light">See it live or read the code.</h2>
          <div className="pd-cta-buttons">
            <a className="pd-btn pd-btn--primary" href={data.liveUrl} target="_blank" rel="noreferrer">
              ↗ Live Demo
            </a>
            <a className="pd-btn pd-btn--outline" href={data.githubUrl} target="_blank" rel="noreferrer">
              ⌥ GitHub
            </a>
          </div>
        </motion.div>
        <div className="pd-cta-glow" aria-hidden="true" />
      </section>

      {/* ── Footer nav ── */}
      <div className="pd-footer-nav">
        <button className="pd-back pd-back--footer" onClick={() => onNavigate("/projects")}>
          ← All Projects
        </button>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════════════════════ */

export default function App() {
  const { navigate, route } = useRoute();

  const projectData = useMemo(
    () => PROJECT_DATA.find((p) => p.route === route) ?? null,
    [route]
  );

  const isProjectRoute = route === "/project1" || route === "/project2" || route === "/project3";

  return (
    <main className="app-shell">
      <div className="page-bg page-bg--gold" aria-hidden="true" />
      <div className="page-bg page-bg--ink"  aria-hidden="true" />
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
        ) : isProjectRoute && projectData ? (
          <motion.div key={route} className="page-frame" exit={{ opacity: 0, filter: "blur(8px)" }}>
            <ProjectDetailView data={projectData} onNavigate={navigate} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}