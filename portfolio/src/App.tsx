import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import MoreProjects from "./components/MoreProjects";
import Mistakes from "./components/Mistakes";
import Experience from "./components/Experience";
import About from "./components/About";
import Connect from "./components/Connect";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudy />
        <MoreProjects />
        <Mistakes />
        <Experience />
        <About />
        <Connect />
      </main>
      <footer style={{
        borderTop: "1px solid var(--border-light)",
        padding: "24px 0",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>
            &#169; 2026 Rahul R
          </span>
        
        </div>
      </footer>
    </>
  );
}

export default App;
