import "./App.css";
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login/Login";
import LoginHome from "./componets/LoginHome/LoginHome";
import Registration from "./componets/Registration/Registration";

export default function App() {
  return (
    <div className="fullContainer">
         <Router>
         <Header />
           <Routes>
              <Route path="/" element={<LoginHome />} />
              <Route path="/Login" element={<Login />} />     
              <Route path="/Registration" element={<Registration />} />     
           </Routes>
           </Router>
         <Footer/>
    </div>
  )
}
