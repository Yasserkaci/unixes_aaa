import './App.css'
import Header from './componentes/1.header/Header'
import Hero from './componentes/2.hero/Hero'
import Services from './componentes/3.services/Services'
import Eservice from './componentes/4.extra_service/Eservice'
import Aboutus from './componentes/5.about/Aboutus'
import Contact from './componentes/6.contact/Contact'
import Footer from './componentes/7.footer/Footer'
// import PaymentForm from './componentes/8.payment/Payment'

function App() {

  return (
    <>
     <Header />
     <Hero/>
     <Services />
     <Eservice/>
     <Aboutus/>
     <Contact/>
     <Footer/>
     {/* <PaymentForm/> */}
    </>
  )
}

export default App
