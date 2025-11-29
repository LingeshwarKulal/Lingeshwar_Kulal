import './Header.css'

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Lingeshwar Kulal</h1>
        <nav className="nav">
          <a onClick={() => scrollToSection('hero')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('experience')}>Experience</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
