import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Security & VAPT",
      skills: [
        "Web and Network Penetration Testing",
        "Reconnaissance & Enumeration",
        "OSINT Investigations",
        "Vulnerability Identification & Documentation",
        "Incident Response Support",
        "Kali Linux & Red-Team Tooling"
      ]
    },
    {
      title: "Networking",
      skills: [
        "LAN/WAN Configuration",
        "Routing & Switching",
        "VLANs, VPNs, NAT, ACLs",
        "TCP/IP, DHCP, DNS, ARP",
        "Cisco Packet Tracer (network simulations)"
      ]
    },
    {
      title: "AI-Assisted Development (Vibe Coding)",
      skills: [
        "Using AI tools to accelerate project building",
        "AI-guided troubleshooting and workflow improvement",
        "Rapid configuration building with AI support",
        "AI-generated documentation & analysis",
        "Accelerated creation of OSINT/security utilities with AI guidance"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Metasploit",
        "Gobuster",
        "SQLMap",
        "OSINT Platforms (Shodan, Censys, etc.)",
        "Git & GitHub"
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        "Linux (Kali, Parrot)",
        "Windows & Windows Server Basics"
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
