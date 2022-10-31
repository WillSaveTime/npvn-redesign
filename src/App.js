import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aos from "aos";
import Header from './component/Header'
import Home from "./pages/Home"
import Order from "./pages/Order"
import Faq from "./pages/Faq"
import ContactUs from "./pages/ContactUs"
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './App.sass'
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/questionList" element={<Faq />} />
          <Route path="/submit" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
