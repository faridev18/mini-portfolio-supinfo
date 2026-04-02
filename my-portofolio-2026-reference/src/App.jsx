
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import { ScrollToTop } from './components/ScrollToTop'
import { ThemeProvider } from './lib/theme-context'

function App() {

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
