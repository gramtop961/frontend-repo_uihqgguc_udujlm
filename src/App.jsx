import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Research, Experience, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 border-t bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alex Carter — AIML Portfolio</p>
          <a href="#home" className="text-indigo-600 hover:text-indigo-700 font-medium">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
