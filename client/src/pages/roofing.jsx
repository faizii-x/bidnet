import { useEffect } from "react"
import Banner from "../components/banner"
import RoofDiv from "../components/roofDiv"
import RoofImg from "../components/roofImg"
import RoofingComp from "../components/roofingComp"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"


function Roofing() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <RoofImg/>
    <SliderStyle/>
    <RoofingComp/> 
    <Banner/>
    <RoofDiv/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Roofing