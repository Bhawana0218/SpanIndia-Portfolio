import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "resume.pdf");

const esc = (s) =>
  s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\n/g, "\\n");

const header = "%PDF-1.4\n%\xFF\xFF\xFF\xFF\n";

const sections = [
  `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
  `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
  `3 0 obj\n<< /Type /Page /Parent 2 0 R\n   /MediaBox [0 0 612 792]\n   /Contents 4 0 R\n   /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >>\n>>\nendobj\n`,
  `4 0 obj\n<< /Length 5 0 R >>\nstream\nBT\n/F2 24 Tf\n50 750 Td\n(${esc("RAHUL R")}) Tj\n/F1 12 Tf\n50 725 Td\n(${esc("Software Engineer & Full Stack Developer")}) Tj\n/F1 10 Tf\n50 705 Td\n(${esc("Chennai, TN | rahul.r.devop@gmail.com | +91 9514701296")}) Tj\n/F1 10 Tf\n50 690 Td\n(${esc("LinkedIn: /in/rahul-r-6536022a0 | GitHub: @ragulravi2405-coder")}) Tj\n/F2 14 Tf\n50 660 Td\n(${esc("PROFESSIONAL SUMMARY")}) Tj\n/F1 10 Tf\n50 640 Td\n(${esc("Software Engineer with full-stack expertise in Python, JavaScript, React.js, and Node.js.")}) Tj\n/F1 10 Tf\n50 625 Td\n(${esc("Two industry internships at NIM Technologies and IBM. National Top 1.7% in Full Stack Dev.")}) Tj\n/F2 14 Tf\n50 595 Td\n(${esc("TECHNICAL SKILLS")}) Tj\n/F1 10 Tf\n50 575 Td\n(${esc("Languages: Python, JavaScript, TypeScript, C, C++, SQL, Bash")}) Tj\n/F1 10 Tf\n50 560 Td\n(${esc("Frontend: React.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Redux, Figma")}) Tj\n/F1 10 Tf\n50 545 Td\n(${esc("Backend: Django, Flask, Node.js, Express.js, REST APIs, JWT Auth")}) Tj\n/F1 10 Tf\n50 530 Td\n(${esc("Database: MongoDB, MySQL, Firebase  |  DevOps: Git, Docker, Linux, Nginx, CI/CD")}) Tj\n/F2 14 Tf\n50 500 Td\n(${esc("EXPERIENCE")}) Tj\n/F1 10 Tf\n50 480 Td\n(${esc("- Python Developer Intern @ NIM Technologies (2025): Automation, Django REST APIs, Linux deploy")}) Tj\n/F1 10 Tf\n50 465 Td\n(${esc("- IBM Cognos Intern (2024): BI dashboard config, enterprise analytics, cross-functional delivery")}) Tj\n/F2 14 Tf\n50 435 Td\n(${esc("PROJECTS")}) Tj\n/F1 10 Tf\n50 415 Td\n(${esc("- Portfolio Website: React SPA, 95+ Lighthouse, 40% smaller bundle, Netlify deploy")}) Tj\n/F1 10 Tf\n50 400 Td\n(${esc("- Global Chat App: React + Firebase, sub-500ms latency, real-time messaging")}) Tj\n/F1 10 Tf\n50 385 Td\n(${esc("- E-Commerce Platform: React/Node/Mongo, 35% API reduction, JWT auth")}) Tj\n/F1 10 Tf\n50 370 Td\n(${esc("- Internship Portal: CRUD app, 500+ concurrent records, sub-100ms queries")}) Tj\n/F2 14 Tf\n50 340 Td\n(${esc("EDUCATION")}) Tj\n/F1 10 Tf\n50 320 Td\n(${esc("B.E. CSE @ Vins Christian College (2023-2027) | CGPA: 8.5+")}) Tj\n/F1 10 Tf\n50 305 Td\n(${esc("Diploma in Python Programming (2023)")}) Tj\n/F2 14 Tf\n50 275 Td\n(${esc("ACHIEVEMENTS")}) Tj\n/F1 10 Tf\n50 255 Td\n(${esc("- Top 500 / 30,000+ (Top 1.7%) - Wadhwani Full Stack Dev Program")}) Tj\n/F1 10 Tf\n50 240 Td\n(${esc("- Top 500 / 25,000+ (Top 2%) - TN Skill State Hackathon")}) Tj\nET\nendstream\nendobj\n`,
  `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
  `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
];

// Write objects and compute offsets
let body = "";
const offsets = [];
for (let i = 0; i < sections.length; i++) {
  offsets.push(header.length + body.length);
  body += sections[i];
}

const xrefOffset = header.length + body.length;
const xref = `xref\n0 ${sections.length + 1}\n0000000000 65535 f \n${offsets
  .map((o) => String(o).padStart(10, "0") + " 00000 n ")
  .join("\n")}\n`;
const trailer = `trailer\n<< /Size ${sections.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(outPath, header + body + xref + trailer);
console.log("Resume PDF generated:", outPath);
