import EstimationCards from "../components/estimationCards";
import Pricing from "../components/pricing";
import Banner from "../components/banner";
import EstimateCopy from "../components/estimateCopy";
import { useEffect } from "react";


function Estimating() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Pricing />
      <EstimationCards />
      <Banner />
      <EstimateCopy/>
    </>
  );
}

export default Estimating;
