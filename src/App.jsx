import HomePage from "./pages/Homepage/HomePage"
import Footer from "./static/Header/Footer"
import Header from "./static/Header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { myValue } from "./context/NavState";


function App() {
    return  (
      <>

      <Router>
            
            <myValue.Provider value={false}>
             <Header />


             <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  
              </Routes> 
              <Footer />
              </myValue.Provider>

      </Router>
      
         
      
      </>
    )
}

export default App
