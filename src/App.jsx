import HomePage from "./pages/Homepage/HomePage"
import Footer from "./static/Header/Footer"
import Header from "./static/Header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from "./pages/AboutPage/About"


function App() {
    return  (
      <>

      <Router>
            
            
             <Header />


             <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  
              </Routes> 
              <Footer />
      

      </Router>
      
         
      
      </>
    )
}

export default App
