import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Service from "./pages/service";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
