import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from './lib/theme-context'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
