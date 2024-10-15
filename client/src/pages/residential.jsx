import { useEffect } from "react"
import ResiComp from "../components/resiComp"
import ResiImg from "../components/resiImg"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"


function Residential() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <ResiImg/>
    <SliderStyle/>
    <ResiComp/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Residential