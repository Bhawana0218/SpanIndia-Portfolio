function Profile() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: "640px" }}>
          <span className="eyebrow">Profile</span>
          <h2 style={{ marginBottom: "20px" }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
            Final-year Computer Science student with two industry internships and five shipped
            projects. Experience spans full-stack web development (React, Django, Express),
            ETL pipelines, and BI dashboard configuration. Comfortable deploying on Linux servers
            with Nginx and Gunicorn. Looking for a full-time software engineering role from mid-2026.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;