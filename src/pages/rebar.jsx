import { useEffect } from "react"
import Banner from "../components/banner"
import RebarImg from "../components/rebarImg"
import RebComp from "../components/rebComp"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"



function Rebar() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <RebarImg/>
    <SliderStyle/>
    <RebComp/>
    <Banner/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Rebar