
import './App.css'
import HeroBanner from './components/HeroBanner'
import SectionHeader from './components/SectionHeader'

function App() {

  return (

    <div className="bg-background w-screen h-screen">
      <div className="w-[90%] m-auto">
        <SectionHeader/>
        <HeroBanner/>
      </div>
    </div>

  )
}

export default App
