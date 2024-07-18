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
import Thermal from "./pages/thermal";
import Interior from "./pages/interior";
import Nyc from "./pages/nyc";
import CostNyc from "./pages/costNyc";
import Landscape from "./pages/landscape";
import Rebar from "./pages/rebar";
import Roofing from "./pages/roofing";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>   
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services/" element={<Service />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/payment/" element={<Payment />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/estimating-fee/" element={<Estimating />} />
          <Route path="/our-trades/" element={<Trade />} />
          <Route path="/cost-estimating-services/" element={<Cost />} />
          <Route path="/construction-takeoff-services/" element={<Takeoff />} />
          <Route path="/cpm-scheduling/" element={<Cpm />} />
          <Route path="/quantity-takeoff-services/" element={<Quantity />} />
          <Route path="/material-takeoff-services/" element={<Material />} />
          <Route path="/planning/" element={<Plan />} />
          <Route path="/general-requirements/" element={<General />} />
          <Route path="/sitework-estimating-services/" element={<Sitework />} />
          <Route path="/concrete-estimating-services/" element={<Concrete />} />
          <Route path="/metals-estimating-services/" element={<Metal />} />
          <Route path="/drywall-estimating-services/" element={<Drywall />} />
          <Route path="/hvac-estimating-services/" element={<Hvac />} />
          <Route path="/mep-estimating-services/" element={<Mep />} />
          <Route path="/mechanical-estimating-services/" element={<Mechanical />} />
          <Route path="/electrical-estimating-services/" element={<Electrical />} />
          <Route path="/plumbing-estimating-services/" element={<Plumbing />} />
          <Route path="/commercial-estimating-services/" element={<Commercial />} />
          <Route path="/industrial-estimating-services/" element={<Industrial />} />
          <Route path="/residential-estimating-services/" element={<Residential />} />
          <Route path="/lumber-takeoff-services/" element={<Lumber />} />
          <Route path="/thermal-moisture-protection-estimating-services/" element={<Thermal />} />
          <Route path="/interior-exterior-finishes/" element={<Interior />} />
          <Route path="/construction-estimating-services-nyc/" element={<Nyc />} />
          <Route path="/construction-cost-estimating-services-nyc/" element={<CostNyc />} />
          <Route path="/landscaping-estimating-services/" element={<Landscape />} />
          <Route path="/rebar-estimating-services/" element={<Rebar />} />
          <Route path="/roofing-estimating-services/" element={<Roofing />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
