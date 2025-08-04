
import './App.css'
import AnimeSection from './components/AnimeSection'
import HeroBanner from './components/HeroBanner'
import SectionHeader from './components/SectionHeader'

function App() {

  return (

    <div className="bg-background w-screen">
      <div className="w-[90%] m-auto">
        <SectionHeader/>
        <HeroBanner/>
        <AnimeSection/>
      </div>
    </div>

  )
}

export default App
