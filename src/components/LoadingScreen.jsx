import { useEffect, useState } from 'react'
import './LoadingScreen.css'

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'SCANNING NETWORK...',
    'ANALYZING VULNERABILITIES...',
    'LOADING SECURITY TOOLS...',
    'INITIALIZING PORTFOLIO...'
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1
        
        // Update phase based on progress
        if (newProgress > 25 && phase === 0) setPhase(1)
        if (newProgress > 50 && phase === 1) setPhase(2)
        if (newProgress > 75 && phase === 2) setPhase(3)
        
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => onLoadingComplete(), 800)
          return 100
        }
        return newProgress
      })
    }, 25)

    return () => clearInterval(progressInterval)
  }, [onLoadingComplete, phase])

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Hexagon Grid Background */}
        <div className="hex-grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="hexagon" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="loading-main">
          {/* Lock Icon Animation */}
          <div className="lock-container">
            <div className={`lock-icon ${progress > 80 ? 'unlock' : ''}`}>
              <div className="lock-body"></div>
              <div className="lock-shackle"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="loader-name">
            <span className="name-letter">L</span>
            <span className="name-letter">I</span>
            <span className="name-letter">N</span>
            <span className="name-letter">G</span>
            <span className="name-letter">E</span>
            <span className="name-letter">S</span>
            <span className="name-letter">H</span>
            <span className="name-letter">W</span>
            <span className="name-letter">A</span>
            <span className="name-letter">R</span>
          </h1>
          <p className="loader-title">CYBERSECURITY ANALYST</p>

          {/* Progress Section */}
          <div className="progress-wrapper">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }}>
                <div className="progress-scanner"></div>
              </div>
            </div>
            <div className="progress-info">
              <span className="progress-phase">{phases[phase]}</span>
              <span className="progress-percent">{progress}%</span>
            </div>
          </div>

          {/* Binary Code Rain */}
          <div className="binary-code">
            <span>01001100</span>
            <span>01001011</span>
            <span>01010110</span>
            <span>01000001</span>
            <span>01010000</span>
            <span>01010100</span>
          </div>
        </div>

        {/* Scanning Lines */}
        <div className="scan-line horizontal"></div>
        <div className="scan-line vertical"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
