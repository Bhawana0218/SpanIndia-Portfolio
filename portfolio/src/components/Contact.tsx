import { type FormEvent, useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const honeypot = data.get("_gotcha");
    if (honeypot) return;

    setSending(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setSending(false);
      })
      .catch(() => {
        setSubmitted(true);
        setSending(false);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="section-title text-center mb-5">Get In Touch</h2>
            {submitted ? (
              <div className="alert alert-success text-center p-5" role="alert">
                <h4 className="alert-heading mb-3">Message Sent!</h4>
                <p className="mb-0">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="contact-form p-4 p-md-5"
                name="portfolio-contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="portfolio-contact" />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your opportunity..."
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5"
                      disabled={sending}
                    >
                      {sending ? (
                        <>
                          <span className="spinner me-2"></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
            <div className="text-center mt-4">
              <p className="mb-1">
                <strong>Email:</strong>{" "}
                <a href="mailto:rahul.r.devop@gmail.com" className="contact-link">
                  rahul.r.devop@gmail.com
                </a>
              </p>
              <p className="mb-1">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919514701296" className="contact-link">
                  +91 9514701296
                </a>
              </p>
              <p>
                <strong>Location:</strong> Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
