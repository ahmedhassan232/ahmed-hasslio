// Maps a technology name to a lucide-react icon + accent color for badge display.
// Purely decorative (no brand logos available) — icons are generic stand-ins.
export const techIconMap = {
  "React": { icon: "Atom", color: "var(--accent-blue)" },
  "JavaScript": { icon: "FileCode2", color: "var(--accent-orange)" },
  "Vite": { icon: "Zap", color: "var(--accent-purple)" },
  "CSS3": { icon: "Palette", color: "var(--accent-blue)" },
  "CSS": { icon: "Palette", color: "var(--accent-blue)" },
  "Python": { icon: "Terminal", color: "var(--accent-blue)" },
  "OOP": { icon: "Boxes", color: "var(--accent-purple)" },
  "customtkinter": { icon: "AppWindow", color: "var(--accent-green)" },
  "Flask (REST API)": { icon: "Server", color: "var(--accent-orange)" },
  "Flask": { icon: "Server", color: "var(--accent-orange)" },
  "JSON storage": { icon: "Database", color: "var(--text-tertiary)" },
  "NLP": { icon: "MessageSquareText", color: "var(--accent-purple)" },
  "Streamlit": { icon: "LayoutDashboard", color: "var(--accent-orange)" },
  "Pandas": { icon: "Table", color: "var(--accent-green)" },
  "NumPy": { icon: "Sigma", color: "var(--accent-blue)" },
  "Scikit-learn": { icon: "BrainCircuit", color: "var(--accent-green)" },
  "ML Basics": { icon: "BrainCircuit", color: "var(--accent-green)" },
  "OpenCV": { icon: "Camera", color: "var(--accent-purple)" },
  "Image Processing": { icon: "ImageIcon", color: "var(--accent-orange)" },
  "Arduino": { icon: "Cpu", color: "var(--accent-green)" },
  "Arduino UNO": { icon: "Cpu", color: "var(--accent-green)" },
  "C++": { icon: "Braces", color: "var(--accent-blue)" },
  "Proteus": { icon: "CircuitBoard", color: "var(--accent-purple)" },
  "Proteus 8": { icon: "CircuitBoard", color: "var(--accent-purple)" },
  "Sensors": { icon: "Radar", color: "var(--accent-orange)" },
  "LEDs": { icon: "Lightbulb", color: "var(--accent-orange)" },
  "LDR": { icon: "SunMedium", color: "var(--accent-orange)" },
  "Motor": { icon: "Cog", color: "var(--accent-blue)" },
  "Cisco": { icon: "Network", color: "var(--accent-blue)" },
  "Packet Tracer": { icon: "Network", color: "var(--accent-blue)" },
  "Cisco Packet Tracer": { icon: "Network", color: "var(--accent-blue)" },
  "VLAN": { icon: "Waypoints", color: "var(--accent-purple)" },
  "Routing": { icon: "Route", color: "var(--accent-green)" },
  "Subnetting": { icon: "Binary", color: "var(--accent-orange)" },
};

export function getTechIcon(name) {
  return techIconMap[name] || { icon: "Code2", color: "var(--text-tertiary)" };
}
