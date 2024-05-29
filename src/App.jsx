import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Service from "./pages/service";
import ContactUs from "./pages/contactus";
import Payment from "./pages/payment";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
