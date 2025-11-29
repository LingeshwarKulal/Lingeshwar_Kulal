import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Attack Surface Mapper – OSINT Platform",
      description: "An OSINT-based tool designed to gather intelligence across domains, subdomains, IPs, emails, leaks, and infrastructure.",
      focus: ["OSINT data collection", "Automated recon workflow"],
      approach: "Built using AI-assisted development tools to structure modules and workflows"
    },
    {
      title: "34+ Tool OSINT API Framework",
      description: "A large-scale OSINT framework combining 34 different reconnaissance tools under one workflow.",
      focus: ["Recon data aggregation", "Threat intelligence enhancement"],
      approach: "AI-assisted configuration, workflow automation, and documentation"
    },
    {
      title: "VAPT Projects – SYSAP Technologies",
      description: "Performed VAPT on internal applications and network environments.",
      focus: ["Enumeration", "Exploitation", "Packet analysis", "Reporting"],
      approach: "Tools Used: Burp Suite, Nmap, Wireshark, Kali Linux"
    },
    {
      title: "Cisco Packet Tracer Networking Projects",
      description: "Designed and implemented enterprise-grade network simulations.",
      focus: ["VLANs", "DHCP", "DNS", "ACLs", "Routing", "Switching", "NAT"],
      approach: "Practical hands-on networking lab environments"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Highlighted Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-focus">
                <strong>Focus Areas:</strong>
                <ul>
                  {project.focus.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="project-approach"><strong>Approach:</strong> {project.approach}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
