import './App.css'
import Appointment from './components/common/Appointment'
import Navbar from './components/common/Navbar'
import Feedbacksection from './components/homepage/Feedbacksection'
import Hero from './components/homepage/Hero'

function App() {
   return (
    <div className='app'>
     <Navbar/>
     <Hero/>
     <Appointment/>
     <Feedbacksection/>
    </div>
  )
}

export default App
