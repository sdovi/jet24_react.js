import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aircraft from "./Component/Aircraft/Aircraft";
import Chart from "./Component/Chart/Chart";
import Concierge from "./Component/Concierge/Concierge";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Section1 from "./Component/Section1/Section1";
import RequestForm from "./Component/RequestForm/RequestForm";
import We from "./Component/We/test";
import Just from "./Component/Just/Just";
import The from "./Component/The/The";
import About from "./Component/About/About";
import Contact from "./Component/Сontact/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<We/>} />
            <Route path="/page2" element={<Just/>} />
            <Route path="/page3" element={<The/>} />
            <Route path="/about" element={<About/> } />
            <Route path="/chart" element={<Chart/>  } />
            <Route path="/aircraft" element={<Aircraft />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="/contact" element={<Contact/>} />  
          
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
