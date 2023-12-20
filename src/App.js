import React from 'react';
import Navebar from './Components/Navebar';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
       <Router>
         <Navebar/>
         <Routes>
            <Route  path='/' element={<Home/>}  />
            <Route  path='/about' element={<About/>}  />
            <Route  path='/shop' element={<Shop/>}  />
            <Route  path='/contact' element={<Contact/>}  />
         </Routes>
         <Footer/>
      </Router>

    </div>
  )
}

export default App