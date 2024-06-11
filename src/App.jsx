import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Service from "./pages/service";
import ContactUs from "./pages/contactus";
import Payment from "./pages/payment";
import About from "./pages/about";
import Estimating from "./pages/estimating";
import Trade from "./pages/trade";
import Cost from "./pages/cost";
import Takeoff from "./pages/takeoff";
import Cpm from "./pages/cpm";
import PageNotFound from "./pages/pageNotFound";
import Quantity from "./pages/quantity";
import Material from "./pages/material";
import Plan from "./pages/plan";
import General from "./pages/general";

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
          <Route path="/about" element={<About />} />
          <Route path="/estimating" element={<Estimating />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/cost" element={<Cost />} />
          <Route path="/takeoff" element={<Takeoff />} />
          <Route path="/cpm" element={<Cpm />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/material" element={<Material />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/general" element={<General />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
