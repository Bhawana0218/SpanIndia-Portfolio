function Resume() {
  return (
    <section id="resume" className="section-padding bg-dark-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-4">Resume</h2>
            <p className="lead mb-4">
              Download my detailed resume with complete work history, project
              descriptions, certifications, and achievements.
            </p>
            <div className="resume-preview p-4 mb-4 text-start">
              <div className="d-flex align-items-center mb-3">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="me-2 text-primary"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <div>
                  <strong>Rahul_R_Resume.pdf</strong>
                  <span className="text-muted small ms-2">— 2 pages</span>
                </div>
              </div>
              <div className="small text-muted">
                <span className="me-3">&#10003; ATS-Optimized</span>
                <span className="me-3">&#10003; Up-to-date</span>
                <span>&#10003; Includes all projects</span>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary btn-lg px-5"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="me-2"
                style={{ verticalAlign: "sub" }}
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
