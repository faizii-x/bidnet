import { useEffect } from "react"
import BanComp from "../components/banComp"
import Banner from "../components/banner"
import LandComp from "../components/landComp"
import LandImg from "../components/landImg"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"


function Landscape() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <LandImg/>
    <SliderStyle/>
    <LandComp/>
    <Banner/>
    <BanComp/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Landscape