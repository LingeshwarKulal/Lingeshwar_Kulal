import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const handleLoadingComplete = () => {
    setFadeOut(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  return (
    <>
      {loading && (
        <div className={`loading-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}
      <div className={`App ${!loading ? 'fade-in' : ''}`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
