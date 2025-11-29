import profileImg from '../assets/profile.jpg'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Lingeshwar Kulal</h1>
          <h2 className="hero-subtitle">Cybersecurity Analyst</h2>
          <p className="hero-description">
            Security Analyst specializing in Vulnerability Assessment and Penetration Testing (VAPT), 
            network security, and OSINT-based reconnaissance. Experienced in security assessments, 
            documentation, and incident response support.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://github.com/LingeshwarKulal" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Lingeshwar Kulal" />
        </div>
      </div>
    </section>
  )
}

export default Hero
