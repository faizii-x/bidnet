import { useEffect } from "react"
import BannerGeneral from "../components/bannerGeneral"
import Conc from "../components/conc"
import ConcText from "../components/concText"
import ConcreteImg from "../components/concreteImg"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"


function Concrete() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
    
    
    <ConcreteImg/>
    <SliderStyle/>
    <Conc/>
    <BannerGeneral/>
    <ConcText/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Concrete