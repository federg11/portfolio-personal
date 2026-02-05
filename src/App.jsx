import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import Skill from './components/Skill'
import About from './components/About'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
    <Toaster />
      <NavBar />
      <HeroSection />
      <About />
      <ProjectsSection />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App
