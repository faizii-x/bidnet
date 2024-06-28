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
import Sitework from "./pages/sitework";
import Concrete from "./pages/concrete";
import Metal from "./pages/metal";
import Drywall from "./pages/drywall";
import Hvac from "./pages/hvac";
import Mep from "./pages/mep";
import Mechanical from "./pages/mechanical";
import Electrical from "./pages/electrical";
import Plumbing from "./pages/plumbing";
import Commercial from "./pages/commercial";
import Industrial from "./pages/industrial";
import Residential from "./pages/residential";
import Lumber from "./pages/lumber";

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
          <Route path="/sitework" element={<Sitework />} />
          <Route path="/concrete" element={<Concrete />} />
          <Route path="/metal" element={<Metal />} />
          <Route path="/drywall" element={<Drywall />} />
          <Route path="/hvac" element={<Hvac />} />
          <Route path="/mep" element={<Mep />} />
          <Route path="/mechanical" element={<Mechanical />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/lumber" element={<Lumber />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
