import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import MyWork from '../MyWork/MyWork'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Homepage
