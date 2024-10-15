import { useEffect } from "react"
import LumbComp from "../components/lumbComp"
import LumberImg from "../components/lumberImg"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"


function Lumber() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    

    <LumberImg/>
    <SliderStyle/>
    <LumbComp/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Lumber