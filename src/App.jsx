import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center">

      <div className="w-full max-w-7xl px-6 mt-6 mb-6">
        
        <div className="bg-[#F3F7F3] border border-gray-200 rounded-2xl px-3 pt-8 md:px-5 md:pt-10 overflow-hidden h-[940px]">
          
          <Navbar />
          <Hero />

        </div>

      </div>

    </div>
  )
}

export default App