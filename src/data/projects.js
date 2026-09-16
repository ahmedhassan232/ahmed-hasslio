// Verified Web projects — the primary showcase.
export const webProjects = [
  {
    id: "real-estate-analytics",
    name: "Real Estate Analytics System",
    category: "Web Application",
    tags: ["Web Application", "Dashboard"],
    bannerIcon: "Building2",
    accent: "var(--accent-blue)",
    description:
      "A property analytics and management system with a dashboard-style interface for managing and analyzing property data.",
    overview:
      "Manages property records (apartments, villas, offices, lands) through a dashboard-style interface covering property listings, owners, employees, and statistics, with a Flask REST API layer added on top of the core application.",
    features: [
      "Dashboard with property statistics (apartments, villas, offices, lands)",
      "Property management screens: add, list, filter, paginate",
      "Owners and employees management",
      "Reports & settings screens",
      "Light mode and dark mode",
      "Flask REST API layer over the core application",
    ],
    tech: ["Python", "OOP", "customtkinter", "Flask (REST API)", "JSON storage"],
    challenges: "Details coming soon",
    demoUrl: null,
    sourceUrl: null,
    status: "In Progress",
  },
  {
    id: "portfolio-website",
    name: "Personal Portfolio Website",
    category: "Frontend",
    tags: ["Web", "Frontend"],
    bannerIcon: "Laptop2",
    accent: "var(--accent-purple)",
    description:
      "A multi-page personal portfolio showcasing projects, skills, certificates, timeline, resume, blog, and contact information.",
    overview:
      "An 8+ page personal portfolio built as a dashboard-style single-page application, with light/dark mode, animations, and a fully responsive layout.",
    features: [
      "Multi-page layout with client-side routing",
      "Responsive design (desktop, tablet, mobile)",
      "Dark mode / light mode",
      "Interactive navigation with a command palette (Ctrl+K)",
      "Custom cursor, animated counters, and charts",
      "Project filtering",
      "Timeline, CV/Resume, Certificates, Blog, and Contact pages",
    ],
    tech: ["React", "JavaScript", "Vite", "CSS3"],
    challenges: "Details coming soon",
    demoUrl: null,
    sourceUrl: null,
    status: "Done",
  },
];

// Other technical work — real projects, kept visible but secondary to the web-dev brand.
export const otherProjects = [
  {
    id: 1,
    name: "Smart Product Review Analyzer",
    category: "AI & Data",
    bannerIcon: "BarChart3",
    accent: "var(--accent-green)",
    description: "AI-powered tool that analyzes product reviews for sentiment, key insights, and genuine-vs-fake signals.",
    tech: ["Python", "NLP", "Streamlit", "Pandas"],
  },
  {
    id: 2,
    name: "Smart Home System",
    category: "Embedded",
    bannerIcon: "Home",
    accent: "var(--accent-orange)",
    description: "Arduino-based smart home with LDR light control, rain detection, and servo motors on Proteus.",
    tech: ["Arduino", "C++", "Proteus", "Sensors"],
  },
  {
    id: 3,
    name: "Traffic Light System",
    category: "Embedded",
    bannerIcon: "TrafficCone",
    accent: "var(--accent-orange)",
    description: "Full traffic light simulation with timed LED sequencing using Arduino UNO on Proteus 8.",
    tech: ["Arduino UNO", "LEDs", "Proteus 8"],
  },
  {
    id: 4,
    name: "Network Design (VLAN)",
    category: "Networking",
    bannerIcon: "Network",
    accent: "var(--accent-purple)",
    description: "Enterprise network with VLAN segmentation, IP addressing, and inter-VLAN routing.",
    tech: ["Cisco", "Packet Tracer", "VLAN", "Routing"],
  },
  {
    id: 5,
    name: "LDR + Motor Circuit",
    category: "Embedded",
    bannerIcon: "Cpu",
    accent: "var(--accent-orange)",
    description: "Light-controlled motor circuit — reads LDR and activates motor automatically.",
    tech: ["Arduino", "LDR", "Motor"],
  },
  {
    id: 7,
    name: "AI / Data Science Work",
    category: "AI & Data",
    bannerIcon: "BrainCircuit",
    accent: "var(--accent-green)",
    description: "Applied ML problem-solving: data analysis tasks, algorithm implementation, and model evaluation.",
    tech: ["Python", "ML Basics", "Scikit-learn"],
  },
  {
    id: 8,
    name: "Computer Vision Work",
    category: "AI & Data",
    bannerIcon: "Camera",
    accent: "var(--accent-green)",
    description: "Image processing and analysis using Python and OpenCV fundamentals.",
    tech: ["Python", "OpenCV", "Image Processing"],
  },
  {
    id: 9,
    name: "Advanced VLAN Project",
    category: "Networking",
    bannerIcon: "Waypoints",
    accent: "var(--accent-purple)",
    description: "Detailed VLAN naming, IP addressing scheme, and complete routing configuration.",
    tech: ["Cisco", "Packet Tracer", "Subnetting"],
  },
];

export const projectFilters = ["All", "Web Applications", "Dashboards", "Frontend", "React", "JavaScript"];

export function matchesFilter(project, filter) {
  if (filter === "All") return true;
  if (filter === "Web Applications") return project.tags?.includes("Web Application") || project.tags?.includes("Web");
  if (filter === "Dashboards") return project.tags?.includes("Dashboard");
  if (filter === "Frontend") return project.tags?.includes("Frontend");
  if (filter === "React") return project.tech?.includes("React");
  if (filter === "JavaScript") return project.tech?.includes("JavaScript");
  return true;
}

export const verifiedWebProjectCount = webProjects.length;
export const totalProjectCount = webProjects.length + otherProjects.length;
