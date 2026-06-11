function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 small text-muted">
              &copy; {year} Rahul R. Built with React &amp; Bootstrap.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/ragulravi2405-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link small"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rahul-r-6536022a0"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link small"
              >
                LinkedIn
              </a>
              <a href="mailto:rahul.r.devop@gmail.com" className="footer-link small">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
