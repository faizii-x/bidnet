import ThermalImg from "../components/thermalImg";
import SliderStyle from "../components/sliderStyle";
import Therone from "../components/therone";
import Banner from "../components/banner";
import RoofComp from "../components/roofComp";
import Software from "../components/software";
import Steps from "../components/steps";
import { useEffect } from "react";

function Thermal() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <ThermalImg />
      <SliderStyle />
      <Therone/>
      <Banner/>
      <RoofComp/>
      <Software/>
      <Steps/>

    </>
  );
}

export default Thermal;
