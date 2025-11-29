import './Education.css'

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-section">
            <h3>Education</h3>
            <div className="edu-item">
              <h4>Master of Computer Applications (MCA)</h4>
              <p>Trinity Academy of Engineering</p>
            </div>
            <div className="edu-item">
              <h4>Bachelor of Science in Electronics</h4>
              <p>Rajaram College</p>
            </div>
          </div>
          
          <div className="education-section">
            <h3>Certifications</h3>
            <ul>
              <li>Deloitte Cyber Job Simulation</li>
              <li>CCEP</li>
              <li>Cisco Networking Basics</li>
              <li>Additional hands-on labs in Linux, Wireshark, and cybersecurity</li>
            </ul>
          </div>

          <div className="career-objective">
            <h3>Career Objective</h3>
            <p>
              To build a career in VAPT, Penetration Testing, and Red Teaming, applying my skills in 
              vulnerability assessment, reconnaissance, and security analysis to strengthen organizational security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
