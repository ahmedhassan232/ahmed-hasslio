// ===== Primary brand: Web Development =====

// Tag-only groups (no invented percentages — these were never quantified).
export const frontendTags = ["HTML", "CSS", "JavaScript", "React", "Vite", "Responsive Design", "Component-Based UI"];

export const uiUxTags = [
  "Responsive Interfaces", "Dashboard Design", "Design Systems", "Layout", "Typography", "Accessibility", "UI Components",
];

export const devToolTags = ["Git", "GitHub", "VS Code", "Chrome DevTools"];

// Quantified core proficiency — only figures the user actually stated previously.
export const coreProficiency = [
  { name: "Problem Solving", level: 90 },
  { name: "VS Code", level: 85 },
  { name: "Git / GitHub", level: 65 },
  { name: "React / JavaScript", level: 55 },
];

// ===== Secondary: Other Technical Experience (kept, but visually de-emphasized) =====
export const otherTechnicalGroups = [
  {
    id: "ai",
    title: "AI & Data Science",
    skills: [
      { name: "Python", level: 80 },
      { name: "Data Analysis (Pandas/NumPy)", level: 75 },
      { name: "Machine Learning Basics", level: 60 },
      { name: "Computer Vision (OpenCV)", level: 50 },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    skills: [
      { name: "Arduino / Embedded C++", level: 85 },
      { name: "Proteus Simulation", level: 80 },
      { name: "Sensor Integration", level: 78 },
      { name: "Circuit Design", level: 72 },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    skills: [
      { name: "Cisco Packet Tracer", level: 70 },
      { name: "VLAN Configuration", level: 68 },
      { name: "IP Addressing & Routing", level: 65 },
      { name: "Network Design", level: 70 },
    ],
  },
];

// Dashboard quick chart — frontend-focused (only figures previously confirmed).
export const dashboardSkillChart = [
  { name: "Problem Solving", level: 90 },
  { name: "VS Code", level: 85 },
  { name: "Git / GitHub", level: 65 },
  { name: "React / JS", level: 55 },
];

export const tools = [
  { name: "React", emoji: "⚛️" },
  { name: "VS Code", emoji: "💻" },
  { name: "GitHub", emoji: "🐙" },
  { name: "Chrome DevTools", emoji: "🛠️" },
  { name: "Vite", emoji: "⚡" },
  { name: "Python", emoji: "🐍" },
  { name: "Arduino IDE", emoji: "⚙️" },
  { name: "Cisco Packet Tracer", emoji: "🌐" },
];

// Project Activity (monthly) — dashboard line chart.
export const projectActivity = [
  { month: "Jan", value: 2 },
  { month: "Feb", value: 4 },
  { month: "Mar", value: 3 },
  { month: "Apr", value: 6 },
  { month: "May", value: 5 },
  { month: "Jun", value: 8 },
  { month: "Jul", value: 7 },
  { month: "Aug", value: 9 },
];

// Projects by field (donut) — across all verified work (web + other technical).
export const projectsByField = [
  { name: "Web", value: 2, color: "var(--accent-blue)" },
  { name: "AI & Data", value: 3, color: "var(--accent-green)" },
  { name: "Embedded", value: 3, color: "var(--accent-purple)" },
  { name: "Networking", value: 2, color: "var(--accent-orange)" },
];
