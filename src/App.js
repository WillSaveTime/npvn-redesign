import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aos from "aos";
import Header from './component/Header'
import Login from './component/Login'
import Register from './component/Register'
import Home from "./pages/Home"
import Order from "./pages/Order"
import Faq from "./pages/Faq"
import ContactUs from "./pages/ContactUs"
import ClientArea from "./pages/Client Area";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './App.sass'
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/questionList" element={<Faq />} />
          <Route path="/submit" element={<ContactUs />} />
          <Route path="/client_area" element={<ClientArea/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
