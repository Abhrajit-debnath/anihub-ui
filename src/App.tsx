
import { useState } from 'react'
import './App.css'
import AnimeSection from './components/AnimeSection'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
const [searchTerm, setsearchTerm] = useState("")
  return (

    <div className="bg-background  min-h-screen">
      <div className="w-[90%] m-auto">
        <Navbar onSearch={setsearchTerm} />
        <HeroBanner />
        <AnimeSection searchTerm={searchTerm}/>
        <Footer/>
      </div>
    </div>

  )
}

export default App
