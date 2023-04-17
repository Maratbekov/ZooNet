import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Katalog from './components/pages/katalog/Katalog'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/katalog"
          element={<Katalog />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
