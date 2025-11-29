import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in hearing about new opportunities, projects, or collaborations in cybersecurity.
          </p>
          <div className="contact-links">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:lingeshwarkulal106@gmail.com">lingeshwarkulal106@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/lingeshwarkulal2001/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/lingeshwarkulal2001
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/LingeshwarKulal" target="_blank" rel="noopener noreferrer">
                github.com/LingeshwarKulal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
